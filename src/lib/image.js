export function imageIDtoURL (image_id, mime_type) {
    // https://i.redd.it/<ID>.<M>
    return `https://i.redd.it/${image_id}.${mime_type.replace('image/', '')}`;
}

export function decodeImageURL (image_url) {
    return image_url.replace(/&amp;/g, '&');
}
