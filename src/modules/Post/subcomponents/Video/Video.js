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

        this.state = {
            controls_ready: false,
            paused: true,
            muted: false,
            duration: null,
            current_time: null,
            volume: 0.5,
        };

        this.ready_to_play = {
            video: false,
            audio: false,
            complete: false,
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
        const {
            volume,
        } = this.state;

        this.ready_to_play[type] = true;
        if (this.ready_to_play.video && this.ready_to_play.audio && !this.ready_to_play.complete) {
            // We only want this to fire the first time the video and audio are ready
            // and not after things like clicking on the progress bar
            this.ready_to_play.complete = true;
            this.ref_audio.current.volume = volume;
            this.setState({
                controls_ready: true,
                duration: this.ref_video.current.duration,
                current_time: 0,
            });
        }
    }

    render () {
        const {
            post = {},
        } = this.props;
        const {
            controls_ready,
            paused,
            muted,
            current_time,
            duration,
            volume,
        } = this.state;
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
                        onTimeUpdate={() => {
                            this.setState({
                                current_time: this.ref_video.current.currentTime,
                            });
                        }}
                        onClick={() => {
                            if (this.ref_video.current.paused) {
                                this.ref_video.current.play();
                                this.ref_audio.current.play();
                                this.setState({
                                    paused: false,
                                });
                            } else {
                                this.ref_video.current.pause();
                                this.ref_audio.current.pause();
                                this.setState({
                                    paused: true,
                                });
                            }
                        }}
                    />
                    <audio
                        className={styles.audio}
                        ref={this.ref_audio}
                        src={audio}
                        volume={volume}
                        onCanPlay={() => {
                            this.onCanPlay('audio');
                        }}
                    />
                    {controls_ready && (
                        <div className={styles.controls}>
                            <i
                                className={classnames(styles.control, styles.playpause_icon,{
                                    "fas fa-pause": !paused,
                                    "fas fa-play": paused,
                                })}
                                onClick={() => {
                                    if (this.ref_video.current.paused) {
                                        this.ref_video.current.play();
                                        this.ref_audio.current.play();
                                        this.setState({
                                            paused: false,
                                        });
                                    } else {
                                        this.ref_video.current.pause();
                                        this.ref_audio.current.pause();
                                        this.setState({
                                            paused: true,
                                        });
                                    }
                                }}
                            />
                            <div className={classnames(styles.bar_wrapper, styles.progress_bar_wrapper)}>
                                <div className={styles.bar} onClick={(e) =>{
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const { left } = rect;

                                    const x_diff = e.pageX - left;
                                    const per = x_diff / e.currentTarget.clientWidth;
                                    const new_time = duration * per;

                                    if (new_time < 0) new_time = 0;
                                    if (new_time > this.duration) new_time = this.duration;

                                    this.ref_video.current.currentTime = new_time;
                                    this.ref_audio.current.currentTime = new_time;

                                    this.setState({
                                        current_time: new_time,
                                    });
                                }}>
                                    <div className={styles.progress} style={{
                                        width: `${(current_time / duration) * 100}%`,
                                    }} />
                                </div>
                                <div className={styles.current_time}>{Math.round(current_time)}</div>
                                <div className={styles.duration}>{Math.round(duration)}</div>
                            </div>
                            <i
                                className={classnames(styles.control, styles.volume_icon, {
                                    "fas fa-volume-off": !muted,
                                    "fas fa-volume-mute": muted,
                                })}
                                onClick={() => {
                                    this.ref_audio.current.muted = !this.ref_audio.current.muted;
                                    this.setState({
                                        muted: this.ref_audio.current.muted,
                                    });
                                }}
                            />
                            <div className={classnames(styles.bar_wrapper, styles.volume_bar_wrapper)}>
                                <div className={styles.bar} onClick={(e) =>{
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const { left } = rect;

                                    const x_diff = e.pageX - left;
                                    const per = x_diff / e.currentTarget.clientWidth;

                                    if (per < 0) per = 0;
                                    if (per > 1) per = 1;

                                    this.ref_audio.current.volume = per;

                                    this.setState({
                                        volume: per,
                                    });
                                }}>
                                    <div className={classnames(styles.progress, styles.volume_progress)} style={{
                                        width: `${volume * 100}%`,
                                    }} />
                                </div>
                            </div>
                        </div>
                    )}
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
