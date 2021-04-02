export function copy (obj) {
    return JSON.parse(JSON.stringify(obj));
}

export function UUID () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = (c === 'x') ? r : ((r & 0x3) | 0x8);
        return v.toString(16);
    });
}

export function unescapeHTML (string) {
    const txt = document.createElement("textarea");
    txt.innerHTML = string;
    return txt.value;
}

export function GET (url, parser, opts = {}) {
    return new Promise((resolve, reject) => {
        try {
            fetch(url, opts).then(response => response.json()).then((response) => {
                try {
                    resolve(parser(response));
                } catch (e) {
                    reject(e);
                }
            }).catch((e) => {
                reject(e)
            });
        } catch (e) {
            reject(e);
        }
    });
}
