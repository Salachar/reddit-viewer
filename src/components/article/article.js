import React, { Component } from 'react';
import { connect } from 'react-redux';

import { dismissArticle } from '../../actions/articleAction';

import Comments from './comments';

import styles from './article.module.css';

class Article extends Component {
    onExitClick = (ref, e) => {
        if (e.target.classList.value.match(/background/)) {
            this.props.dismissArticle();
        }
    }

    renderMedia (article) {
        switch (article.type) {
            case 'video':
                break;
            case 'image':
                return (
                    <img alt="Parse for text" className={styles.media} src={article.media.image} />
                )
            case 'text':
                break;
            case 'link':
                return (
                    <div className={styles.content}>
                        <a className={styles.link} href={article.url} target="_blank" rel="noopener noreferrer">Go To Article</a>
                        <a className={styles.link_address} href={article.url} target="_blank" rel="noopener noreferrer">{article.url}</a>
                    </div>
                );
            default:
                return null;
        }
    }

    renderBody (article) {
        return (
            <div className={styles.body}>
                <div className={styles.title}>{article.title}</div>
                <div className={styles.author}>{article.author}</div>
                {this.renderMedia(article)}
            </div>
        );
    }

    render () {
        const article = this.props.data;
        if (!article) return;
        return (
            <div onClick={this.onExitClick.bind(this, 'showDetails')} className={styles.background}>
                <div className={styles.article}>
                    {this.renderBody(article.data)}
                    <Comments key={`comments_${article.key}`} comments={article.comments} />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    dismissArticle: () => dismissArticle()
};

export default connect(null, mapDispatchToProps)(Article);