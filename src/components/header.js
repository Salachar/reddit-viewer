import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from '../actions/articlesAction';

import styles from './header.module.css';

class Header extends Component {
    searchCollection = (e) => {
        let listing = '/r/';
        this.props.subscribed.forEach((sub, index) => {
            listing += sub.name;
            if (index < this.props.subscribed.length - 1) {
                listing += '+';
            }
        });
        this.props.fetchArticles({
            title: 'My Subreddits',
            url: listing
        });
    }

    onClick = (e) => {
        this.props.fetchArticles({
            title: e.currentTarget.dataset.listing,
            url: e.currentTarget.dataset.listing
        });
    }

    render() {
        return (
            <header className={styles.listings}>
                <span onClick={this.onClick} data-listing="best" className={styles.listing}>Best</span>
                <span onClick={this.onClick} data-listing="top" className={styles.listing}>Top</span>
                <span onClick={this.onClick} data-listing="new" className={styles.listing}>New</span>
                <span onClick={this.onClick} data-listing="hot" className={styles.listing}>Hot</span>
                <span onClick={this.searchCollection} data-listing="hot" className={styles.listing}>My Subreddits</span>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        subscribed: state.subreddits.subscribed
    };
};

const mapDispatchToProps = {
    fetchArticles: (listing) => (fetchArticles(listing))
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);