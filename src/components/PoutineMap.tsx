"use client";

import { useCallback, useMemo, useState } from "react";
import {
	GoogleMap,
	InfoWindowF,
	MarkerF,
	useJsApiLoader,
} from "@react-google-maps/api";
import { Poutine } from "@/types/poutine";
import { parseLatLngFromMapsUrl, LatLng } from "@/utils/parseLocation";
import { getPoutineOverallRating } from "@/utils/ratingCalculator";

interface PoutineMapProps {
	poutines: Poutine[];
}

interface MappedPoutine {
	poutine: Poutine;
	coords: LatLng;
}

const mapContainerStyle = { width: "100%", height: "100%" } as const;

// Centred roughly over Southern Ontario, where most reviews live.
const defaultCenter = { lat: 45.0, lng: -80.0 } as const;

const mapOptions: google.maps.MapOptions = {
	gestureHandling: "cooperative",
	streetViewControl: false,
	mapTypeControl: false,
	fullscreenControl: true,
	clickableIcons: false,
	zoomControl: true,
};

export default function PoutineMap({ poutines }: PoutineMapProps) {
	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

	const { isLoaded, loadError } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: apiKey,
	});

	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const mapped: MappedPoutine[] = useMemo(() => {
		return poutines
			.map((poutine) => {
				const coords = parseLatLngFromMapsUrl(poutine.location_url);
				return coords ? { poutine, coords } : null;
			})
			.filter((m): m is MappedPoutine => m !== null);
	}, [poutines]);

	const onLoad = useCallback(
		(map: google.maps.Map) => {
			if (mapped.length === 0) return;
			if (mapped.length === 1) {
				map.setCenter(mapped[0].coords);
				map.setZoom(12);
				return;
			}
			const bounds = new google.maps.LatLngBounds();
			mapped.forEach(({ coords }) => bounds.extend(coords));
			map.fitBounds(bounds, 48);
		},
		[mapped],
	);

	if (!apiKey) {
		return (
			<div className="w-full h-full flex items-center justify-center text-amber-900 text-center p-6">
				<p>
					Set <code>NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> in
					your <code>.env</code> file to enable the map.
				</p>
			</div>
		);
	}

	if (loadError) {
		return (
			<div className="w-full h-full flex items-center justify-center text-red-800">
				Failed to load Google Maps.
			</div>
		);
	}

	if (!isLoaded) {
		return (
			<div className="w-full h-full flex items-center justify-center text-amber-900">
				Loading map…
			</div>
		);
	}

	return (
		<GoogleMap
			mapContainerStyle={mapContainerStyle}
			center={defaultCenter}
			zoom={5}
			options={mapOptions}
			onLoad={onLoad}
		>
			{mapped.map(({ poutine, coords }, index) => {
				const rating = poutine.rating
					? getPoutineOverallRating(poutine)
					: null;
				const isActive = activeIndex === index;
				return (
					<MarkerF
						key={`${poutine.name}-${coords.lat}-${coords.lng}`}
						position={coords}
						title={poutine.name}
						onClick={() => setActiveIndex(index)}
					>
						{isActive && (
							<InfoWindowF
								position={coords}
								onCloseClick={() => setActiveIndex(null)}
							>
								<div className="min-w-[180px]">
									<p className="font-bold text-red-800 text-base mb-1">
										{poutine.name}
									</p>
									{poutine.location && (
										<p className="text-sm text-gray-700 mb-2">
											{poutine.location}
										</p>
									)}
									{rating !== null && (
										<p className="text-sm text-amber-900 font-semibold mb-2">
											Rating: {rating.toFixed(1)} / 5
										</p>
									)}
									{poutine.location_url && (
										<a
											href={poutine.location_url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm text-red-800 underline hover:text-amber-900"
										>
											Open in Google Maps
										</a>
									)}
								</div>
							</InfoWindowF>
						)}
					</MarkerF>
				);
			})}
		</GoogleMap>
	);
}
