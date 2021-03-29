import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import {
    fetchSubreddit,
    fetchPosts,
    clearSubredditSearchError,
} from '../../store/actions/postsAction';

import styles from './Header.module.css';

class Header extends Component {
    searchCollection = (e) => {
        const {
            subscribed,
            fetchPosts,
        } = this.props;

        fetchPosts({
            title: 'Subscribed',
            type: 'listing',
            url: '/r/' + subscribed.map(s => s.name).join('+'),
        });
    }

    onClick = (e) => {
        this.props.fetchPosts({
            title: e.currentTarget.dataset.listing,
            type: 'listing',
            url: e.currentTarget.dataset.listing
        });
    }

    onSearch = (e) => {
        const {
            clearSubredditSearchError,
            fetchSubreddit,
        } = this.props;
        clearSubredditSearchError();

        if (e.key.toLowerCase() !== 'enter') return;
        const search_string = e.currentTarget.value;
        fetchSubreddit({
            title: e.currentTarget.value,
            type: 'subreddit',
            url: '/r/' + search_string,
        });
    }

    render() {
        const {
            className,
            posts = {},
            subreddits_data,
            subreddit_search_error,
        } = this.props;
        const {
            title,
            subreddit = {},
        } = posts;

        const subreddit_data = subreddits_data[subreddit.name] || {};

        return (
            <header className={classnames(styles.listings, className)}>
                <div className={styles.main_links}>
                    <span onClick={this.onClick} data-listing="best" className={styles.listing}>Best</span>
                    <span onClick={this.onClick} data-listing="top" className={styles.listing}>Top</span>
                    <span onClick={this.onClick} data-listing="new" className={styles.listing}>New</span>
                    <span onClick={this.onClick} data-listing="hot" className={styles.listing}>Hot</span>
                    <span onClick={this.searchCollection} data-listing="subscribed" className={styles.listing}>Subscribed</span>
                    <span className={styles.search_label}>/r/</span>
                    <input className={styles.search} spellCheck="false" onKeyDown={this.onSearch} placeholder="subreddit"/>
                    {subreddit_search_error && <span className={styles.subreddit_search_error}>SUBREDDIT NOT FOUND</span>}
                </div>
                <div className={styles.subreddit_current}>
                    {subreddit_data.icon && <img className={styles.subreddit_icon} src={subreddit_data.icon} alt="Subreddit Icon" />}
                    <span className={styles.subreddit_title}>{title || ''}</span>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        subreddits_data: state.subreddits.data,
        subscribed: state.subreddits.subscribed || [],
        subreddit_search_error: state.subreddits.subreddit_search_error || false,
        posts: state.posts.current,
    };
};

const mapDispatchToProps = {
    fetchPosts,
    fetchSubreddit,
    clearSubredditSearchError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
