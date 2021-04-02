import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './Gallery.module.css';

class Gallery extends Component {
    constructor (props) {
        super(props);

        this.state = {
            is_media_max: false,
            selected_image: null,
        };
    }

    renderSelectedImage () {
        const {
            is_media_max,
            selected_image,
        } = this.state;

        if (!selected_image) return null;

        let source = selected_image.source;
        if (!is_media_max) {
            // Find the image with the biggest height still
            // smaller than the window
            selected_image.resolutions.forEach((res) => {
                if (res.height <= window.innerHeight) {
                    source = res.source;
                }
            });
        }

        return (
            <img
                alt="Main"
                className={classnames(styles.selected_image, {
                    [styles.full_size]: is_media_max,
                })}
                src={source}
                onClick={() => {
                    this.setState({
                        is_media_max: !is_media_max,
                    });
                }}
            />
        );
    }

    render () {
        const {
            post,
        } = this.props;
        const {
            selected_image,
        } = this.state;

        return (
            <div className={styles.wrapper}>
                <div className={styles.thumbnails}>
                    {post.media.images.map((image, index) => {
                        console.log(selected_image);
                        const class_name = classnames(styles.thumbnail, {
                            [styles.selected]: image.id === (selected_image || {}).id,
                        });
                        return (
                            <img
                                alt={`Thumnbnail ${index}`}
                                key={`image_key_${image.id}`}
                                className={class_name}
                                src={image.thumbnail.source}
                                onClick={() => {
                                    this.setState({
                                        is_media_max: false,
                                        selected_image: image,
                                    });
                                }}
                            />
                        );
                    })}
                </div>
                {this.renderSelectedImage()}
            </div>
        );
    };
}

export default Gallery;
