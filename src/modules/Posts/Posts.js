import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { fetchPosts } from '../../store/actions/postsAction';

import Post from '../Post';

import styles from './Posts.module.css';

class Posts extends Component {
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
        console.log(subreddit_data);
        console.log(posts);

        return (
            <div className={classnames(styles.wrapper, className)}>
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
