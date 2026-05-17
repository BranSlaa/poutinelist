export interface LatLng {
	lat: number;
	lng: number;
}

/**
 * Extracts latitude/longitude from a Google Maps URL.
 *
 * Tries (in order):
 *   1. The `@lat,lng,zoom` segment in the path
 *   2. The `!3d<lat>!4d<lng>` segment in the encoded `data` parameter
 *
 * Returns `null` if no coordinates can be found.
 */
export function parseLatLngFromMapsUrl(url: string | undefined): LatLng | null {
	if (!url) return null;

	const atMatch = url.match(/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/);
	if (atMatch) {
		const lat = parseFloat(atMatch[1]);
		const lng = parseFloat(atMatch[2]);
		if (isFinite(lat) && isFinite(lng)) return { lat, lng };
	}

	const dataMatch = url.match(/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/);
	if (dataMatch) {
		const lat = parseFloat(dataMatch[1]);
		const lng = parseFloat(dataMatch[2]);
		if (isFinite(lat) && isFinite(lng)) return { lat, lng };
	}

	return null;
}
