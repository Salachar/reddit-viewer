import React, { Component } from 'react';

import styles from './Link.module.css';

class Link extends Component {
    render () {
        const {
            post,
        } = this.props;

        return (
            <div className={styles.content}>
                <a className={styles.link} href={post.url} target="_blank" rel="noopener noreferrer">Go To Article</a>
                <a className={styles.link_address} href={post.url} target="_blank" rel="noopener noreferrer">{post.url}</a>
            </div>
        );
    };
}

export default Link;
