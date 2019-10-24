import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchArticle } from '../actions/articleAction';

import styles from './listing.module.css';

class Listing extends Component {
    onCommentClick = () => {
        this.props.fetchArticle(this.props.listing);
    }

    render() {
        const data = this.props.listing;
        if (!data) return;
        return (
            <div onClick={this.onCommentClick} className={styles.article}>
                <div className={styles.score}>{data.score.display}</div>
                <div className={styles.thumbnail} style={{ backgroundImage: `url("${data.media.thumbnail}")` }}></div>
                <div className={styles.body}>
                    <div className={styles.title}>{data.title}</div>
                    <div className={styles.submission}>{`Submitted ${data.submmited} ago by ${data.author} to ${data.subreddit}`}</div>
                    <div className={styles.comments}>{data.comments.amount} comments</div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchArticle: (listing) => {
        dispatch(fetchArticle(listing));
    }
});

export default connect(null, mapDispatchToProps)(Listing);