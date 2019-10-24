import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from '../../actions/articlesAction';
import { subscribeSubreddit } from '../../actions/subredditAction';

import styles from './subreddit.module.css';

class Subreddit extends Component {
    onClick = (e) => {
        this.props.fetchArticles(this.props.subreddit);
    }

    onSubscribe = (e) => {
        const checked = e.currentTarget.checked;
        this.props.subscribeSubreddit(this.props.subreddit, checked ? 'add' : 'remove');
    }

    render() {
        return (
            <div className={styles.subreddit}>
                <input type="checkbox" checked={this.props.checked} onChange={this.onSubscribe} className={styles.checkbox}></input>
                <span onClick={this.onClick} className={styles.title}>{this.props.subreddit.name}</span>
                <span className={styles.subscribers}>{this.props.subreddit.subscribers.display}</span>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchArticles: (subreddit) => dispatch(fetchArticles(subreddit)),
    subscribeSubreddit: (subreddit, task) => dispatch(subscribeSubreddit(subreddit, task))
});

export default connect(null, mapDispatchToProps)(Subreddit);