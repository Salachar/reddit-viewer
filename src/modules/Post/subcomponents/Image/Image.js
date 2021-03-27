import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './Image.module.css';

class Image extends Component {
    constructor (props) {
        super(props);

        this.state = {
            is_media_max: false,
        };
    }

    render () {
        const {
            post,
        } = this.props;
        const {
            is_media_max,
        } = this.state;

        return (
            <img
                alt="Parse for text"
                className={classnames(styles.media, {
                    [styles.media_max]: is_media_max,
                })}
                src={post.media.image}
                onClick={() => {
                    this.setState({
                        is_media_max: !is_media_max,
                    });
                }}
            />
        )
    };
}

export default Image;
