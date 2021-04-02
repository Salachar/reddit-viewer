import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { fetchPosts } from '../../store/actions/postsAction';

import Post from '../Post';

import styles from './Posts.module.css';

class Posts extends Component {
    constructor (props) {
        super(props);

        this.onScroll = this.onScroll.bind(this);
    }

    onScroll (e) {
        const {
            posts,
            fetchPosts,
        } = this.props;
        const {
            list = [],
            subreddit = {},
        } = posts;

        const c = e.currentTarget;
        const padding = 0;
        if (Math.ceil(c.clientHeight + c.scrollTop + padding) >= Math.floor(c.scrollHeight)) {
            console.log('END');
            fetchPosts(subreddit, {
                count: list.length,
                after: list[list.length - 1].name,
            });
        }
    }

    render () {
        const {
            className,
            posts,
            subreddits_data,
            fetchPosts,
        } = this.props;
        const {
            list = [],
            subreddit = {},
        } = posts;

        // TODO : need detection for end of subreddit

        const subreddit_data = subreddits_data[subreddit.name] || {};

        return (
            <div className={classnames(styles.wrapper, className)} onScroll={this.onScroll}>
                {list.map((post) => {
                    if (!post || !post.id) return null;
                    return <Post key={post.id} subreddit={subreddit_data} post={post} />
                })}
                {list.length && <div className={styles.load_more} onClick={() => {
                    fetchPosts(subreddit, {
                        count: list.length,
                        after: list[list.length - 1].name,
                    });
                }}>LOAD MORE</div>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        subreddits_data: state.subreddits.data,
        posts: state.posts.current,
    }
};

const mapDispatchToProps = {
    fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
