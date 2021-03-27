import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Post from '../Post';

import styles from './Posts.module.css';

class Posts extends Component {
    render () {
        const {
            className,
            posts,
        } = this.props;

        console.log(posts);

        return (
            <div className={classnames(styles.wrapper, className)}>
                {((posts || {}).list || []).map((post) => {
                    if (!post || !post.id) return null;
                    return <Post key={post.id} post={post} />
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
};

export default connect(mapStateToProps, null)(Posts);
