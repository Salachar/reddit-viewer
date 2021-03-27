import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Search from './subcomponents/Search';
import Subreddits from './subcomponents/Subreddits';

import styles from './SideMenu.module.css';

class Sidemenu extends Component {
    render() {
        const {
            className
        } = this.props;

        return (
            <div className={classnames(styles.sidemenu, className)}>
                <div className={styles.title}>Subreddits</div>
                <Subreddits subscribed={this.props.subscribed} />
                <Search />
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