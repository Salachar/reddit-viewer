import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../store/actions/postsAction';
import { setSubreddits } from '../../store/actions/subredditAction';

import Header from '../Header';
import SideMenu from '../SideMenu';
import Posts from '../Posts';

import styles from './App.module.css';

const INITIAL_LISTING = {
    title: 'best',
    type: 'listing',
    url: 'best'
};

class App extends Component {
    componentDidMount () {
        let listing = INITIAL_LISTING;
        try {
            let previous_state = localStorage.getItem('saved_state');
            previous_state = JSON.parse(previous_state);
            listing = previous_state.current || INITIAL_LISTING;
        } catch (e) {
            console.log(e);
            listing = INITIAL_LISTING;
        }

        this.props.fetchPosts(listing);

        try {
            let previous_state = localStorage.getItem('saved_state') || null;
            previous_state = JSON.parse(previous_state);
            this.props.setSubreddits(previous_state.subreddits);
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <Header className={styles.header} />
                <Posts className={styles.articleList} />
                <SideMenu className={styles.sideMenu} />
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchPosts,
    setSubreddits,
};

export default connect(null, mapDispatchToProps)(App);
