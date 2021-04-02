import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { fetchPosts } from '../../../../store/actions/postsAction';
import { subscribeSubreddit } from '../../../../store/actions/subredditAction';

import styles from './Subreddit.module.css';

class Subreddit extends Component {
    onClick = (e) => {
        this.props.fetchPosts(this.props.subreddit);
    }

    onSubscribe = (e) => {
        const checked = e.currentTarget.checked;
        this.props.subscribeSubreddit(this.props.subreddit, checked ? 'add' : 'remove');
    }

    onCheckboxClick (checked) {
        this.props.subscribeSubreddit(this.props.subreddit, checked ? 'add' : 'remove');
    }

    render() {
        const {
            checked,
            subreddit,
        } = this.props;

        return (
            <div className={styles.subreddit}>
                {/* <input
                    type="checkbox"
                    checked={this.props.checked}
                    onChange={this.onSubscribe}
                    className={styles.checkbox}
                /> */}
                <div
                    className={classnames(styles.checkbox, {
                        [styles.checked]: checked,
                    })}
                    onClick={() => {
                        this.onCheckboxClick(!checked);
                    }}
                />
                <span onClick={this.onClick} className={styles.title}>{subreddit.display_name}</span>
                <span className={styles.subscribers}>{subreddit.subscribers.display}</span>
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchPosts,
    subscribeSubreddit,
};

export default connect(null, mapDispatchToProps)(Subreddit);
