import React, { Component, Fragment } from 'react';
import classnames from 'classnames';

import { unescapeHTML } from '../../../../lib/utils';
import { getFallbackAudio } from '../../../../lib/video';
// import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

import styles from './Video.module.css';

class Video extends Component {
    constructor(props) {
        super(props);

        this.ref_video = React.createRef();
        this.ref_audio = React.createRef();

        this.ready_to_play = {
            video: false,
            audio: false,
        };

        this.ref_embedded_media = React.createRef();
    }

    componentDidMount () {
        if (!this.ref_embedded_media || !this.ref_embedded_media.current) return;

        const iframe = this.ref_embedded_media.current.getElementsByTagName('iframe')[0];
        const iframe_width = iframe.width;
        const iframe_height = iframe.height;
        const iframe_ratio = iframe_width / iframe_height;

        iframe.width = this.ref_embedded_media.current.clientWidth;
        iframe.height = this.ref_embedded_media.current.clientWidth / iframe_ratio;
    }

    onCanPlay (type) {
        this.ready_to_play[type] = true;
        if (this.ready_to_play.video && this.ready_to_play.audio) {
            // this.ref_video.current.play();
            // this.ref_audio.current.play();
        }
    }

    render () {
        const {
            post = {},
        } = this.props;
        const {
            secure_media = {},
            secure_media_embed = {}
        } = post;

        if (secure_media.reddit_video) {
            const video = secure_media.reddit_video.fallback_url;
            const audio = getFallbackAudio(video);

            return (
                <Fragment>
                    <video
                        className={styles.video}
                        ref={this.ref_video}
                        src={video}
                        onCanPlay={() => {
                            this.onCanPlay('video');
                        }}
                    />
                    <audio
                        className={styles.audio}
                        ref={this.ref_audio}
                        src={audio}
                        onCanPlay={() => {
                            this.onCanPlay('audio');
                        }}
                    />
                    <div className={styles.controls_wrapper}>
                        <div
                            className={classnames(styles.control, styles.playpause)}
                            onClick={() => {
                                if (this.ref_video.current.paused) {
                                    this.ref_video.current.play();
                                    this.ref_audio.current.play();
                                } else {
                                    this.ref_video.current.pause();
                                    this.ref_audio.current.pause();
                                }
                            }}
                        >PLAYPAUSE</div>
                        <div
                            className={classnames(styles.control, styles.mute)}
                            onClick={() => {
                                this.ref_audio.current.muted = !this.ref_audio.current.muted;
                            }}
                        >MUTE</div>
                    </div>
                </Fragment>
            );
        }

        if (secure_media_embed.content) {
            return (
                <div
                    className={styles.media}
                    dangerouslySetInnerHTML={{ __html: unescapeHTML(post.secure_media_embed.content) }}
                    ref={this.ref_embedded_media}
                />
            );
        }
    };
}

export default Video;
