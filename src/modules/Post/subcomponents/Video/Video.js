import React, { Component } from 'react';
import { unescapeHTML } from '../../../../lib/utils';

import styles from './Video.module.css';

class Video extends Component {
    constructor(props) {
        super(props);

        this.ref_media = React.createRef();
    }

    componentDidMount () {
        if (!this.ref_media || !this.ref_media.current) return;

        const iframe = this.ref_media.current.getElementsByTagName('iframe')[0];
        const iframe_width = iframe.width;
        const iframe_height = iframe.height;
        const iframe_ratio = iframe_width / iframe_height;

        iframe.width = this.ref_media.current.clientWidth;
        iframe.height = this.ref_media.current.clientWidth / iframe_ratio;
    }

    render () {
        const {
            post = {},
        } = this.props;
        const {
            secure_media = {},
            secure_media_embed = {}
        } = post;

        // if (post.url) {
        //     return (
        //         <video
        //             className={styles.media}
        //             controls
        //         >
        //             <meta
        //                 itemProp="embedURL"
        //                 content={post.url}
        //             />
        //         </video>
        //     );
        // }

        if (secure_media.reddit_video) {
            return (
                <video
                    className={styles.media}
                    controls
                    src={secure_media.reddit_video.fallback_url}
                />
            );
        }

        if (secure_media_embed.content) {
            return (
                <div
                    className={styles.media}
                    dangerouslySetInnerHTML={{ __html: unescapeHTML(post.secure_media_embed.content) }}
                    ref={this.ref_media}
                />
            );
        }
    };
}

export default Video;
