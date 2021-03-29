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
            fetchPosts,
        } = this.props;
        const {
            list = [],
            subreddit = {},
        } = posts;

        // TODO : need detection for end of subreddit

        return (
            <div className={classnames(styles.wrapper, className)}>
                {list.map((post) => {
                    if (!post || !post.id) return null;
                    return <Post key={post.id} post={post} />
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
        posts: state.posts.current,
    }
};

const mapDispatchToProps = {
    fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
