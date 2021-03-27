import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { fetchPosts } from '../../store/actions/postsAction';

import styles from './Header.module.css';

class Header extends Component {
    searchCollection = (e) => {
        const {
            subscribed,
            fetchPosts,
        } = this.props;

        fetchPosts({
            title: 'Subscribed',
            url: '/r/' + subscribed.map(s => s.name).join('+'),
        });
    }

    onClick = (e) => {
        this.props.fetchPosts({
            title: e.currentTarget.dataset.listing,
            url: e.currentTarget.dataset.listing
        });
    }

    onSearch = (e) => {
        if (e.key.toLowerCase() !== 'enter') return;
        const search_string = e.currentTarget.value;
        this.props.fetchPosts({
            title: search_string,
            url: '/r/' + search_string,
        });
    }

    render() {
        const {
            className,
            posts = {},
        } = this.props;

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
                </div>
                <div className={styles.selected}>{posts.title || ''}</div>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        subscribed: state.subreddits.subscribed || [],
        posts: state.posts || {},
    };
};

const mapDispatchToProps = {
    fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
