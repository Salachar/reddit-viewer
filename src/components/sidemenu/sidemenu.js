import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './sidemenu.module.css';

import Subreddits from './subreddits';
import SearchSubreddits from './searchsubreddits';

class Sidemenu extends Component {
    render() {
        return (
            <div className={styles.sidemenu}>
                <div className={styles.title}>Subreddits</div>
                <Subreddits subscribed={this.props.subscribed} />
                <SearchSubreddits />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        subscribed: state.subreddits.subscribed
    };
};

export default connect(mapStateToProps, null)(Sidemenu);