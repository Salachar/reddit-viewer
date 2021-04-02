export function getFallbackAudio (fallback_url) {
    const dash_split = fallback_url.split('DASH');
    return `${dash_split[0]}DASH_audio.mp4`;
}
