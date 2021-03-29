import React, { Component } from 'react';
import { connect } from 'react-redux';

import side_menu_styles from '../../SideMenu.module.css';

import Subreddit from '../Subreddit';

class Subreddits extends Component {
    render() {
        return (
            <div className={side_menu_styles.section}>
                <div className={side_menu_styles.section_title}>Subscribed:</div>
                {(this.props.subscribed || []).map((subreddit) => {
                    return <Subreddit key={`subbed_${subreddit.id}`} checked={true} subreddit={subreddit} />;
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        subscribed: state.subreddits.subscribed
    };
};

export default connect(mapStateToProps, null)(Subreddits);
