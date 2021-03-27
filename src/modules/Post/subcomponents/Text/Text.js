import React, { Component } from 'react';
import { unescapeHTML } from '../../../../lib/utils';

import styles from './Text.module.css';

class Text extends Component {
    render () {
        const {
            post,
        } = this.props;

        return (
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: unescapeHTML(post.content.body_html) }}
            />
        );
    };
}

export default Text;
