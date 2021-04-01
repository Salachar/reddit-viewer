import { GET } from './utils';

class DashPlayer {
    constructor (opts = {}) {
        const { url } = opts;

        console.log(url);

        this.fetchManifest(url);
    }

    fetchManifest (URL) {
        GET(URL, (response) => {
            return response;
        }).then((manifest_data) => {
            console.log(manifest_data);
        });
    }
}

export default DashPlayer;
