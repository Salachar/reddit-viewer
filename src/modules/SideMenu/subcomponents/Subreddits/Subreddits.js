import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import {
    fetchPosts,
} from '../../../../store/actions/postsAction';

import styles from './Subreddits.module.css';
import side_menu_styles from '../../SideMenu.module.css';

import Subreddit from '../Subreddit';

class Subreddits extends Component {
    render() {
        const {
            subscribed,
            fetchPosts,
        } = this.props;

        const view_sub_classname = classnames(side_menu_styles.section_title, {
            [styles.view_subscribed]: subscribed.length,
        });

        return (
            <div className={side_menu_styles.section}>
                <div
                    className={view_sub_classname}
                    onClick={() => {
                        if (!subscribed.length) return;
                        fetchPosts({
                            title: 'Subscribed',
                            type: 'listing',
                            url: '/r/' + subscribed.map(s => s.name).join('+'),
                        });
                    }}
                >Subscribed:</div>
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

const mapDispatchToProps = {
    fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Subreddits);
