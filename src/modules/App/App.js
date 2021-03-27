import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../store/actions/postsAction';

import Header from '../Header';
import SideMenu from '../SideMenu';
import Posts from '../Posts';

import styles from './App.module.css';

class App extends Component {
    componentDidMount () {
        this.props.fetchPosts({
            title: 'best',
            url: 'best'
        });
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
};

export default connect(null, mapDispatchToProps)(App);
