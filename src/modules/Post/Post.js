import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { fetchPost } from '../../store/actions/postAction';
import { fetchPosts } from '../../store/actions/postsAction';

import Image from './subcomponents/Image';
import Text from './subcomponents/Text';
import Link from './subcomponents/Link';
import Video from './subcomponents/Video';

import Comments from '../Comments';

import styles from './Post.module.css';

const THUMBNAIL_ICON_MAP = {
    link: 'far fa-newspaper',
    text: 'far fa-comment-alt',
    image: 'far fa-file-image',
    video: 'far fa-file-video',
};

const ICON_MAP = {
    text: 'fas fa-align-left',
    image: 'far fa-image',
    video: 'fas fa-video',
    link: 'fas fa-external-link-alt',
    default: 'fa-question-circle',
};

class Post extends Component {
    constructor (props) {
        super(props);

        this.state = {
            is_media_expanded: false,
            is_comments_expanded: false,
        };

        this.onCommentsClick = this.onCommentsClick.bind(this);
    }

    onClick = () => {
        const {
            is_media_expanded,
            is_comments_expanded,
        } = this.state;

        this.setState({
            is_media_expanded: !is_media_expanded,
            is_comments_expanded: (is_media_expanded) ? false : is_comments_expanded,
        });
    }

    onCommentsClick () {
        const {
            post,
            fetchPost,
        } = this.props;
        const {
            is_comments_expanded,
        } = this.state;

        if (!is_comments_expanded) {
            fetchPost(post);
        }

        this.setState({
            is_comments_expanded: !is_comments_expanded,
        });
    }

    renderMedia (post) {
        const {
            is_media_expanded,
        } = this.state;

        if (!is_media_expanded) return null;

        console.log(post);

        let component = null;
        switch (post.type) {
            case 'video':
                component = <Video post={post} />;
                break;
            case 'image':
                component = <Image post={post} />;
                break;
            case 'text':
                component = <Text post={post} />;
                break;
            case 'link':
                component = <Link post={post} />;
                break;
        }

        return (
            <div className={classnames(styles.content_wrapper, {[styles.hide]: !is_media_expanded})}>
                {component}
            </div>
        );
    }

    renderComments (comments) {
        const {
            post
        } = this.props;
        const {
            is_media_expanded,
            is_comments_expanded
        } = this.state;

        if (is_media_expanded && !is_comments_expanded) {
            return (
                <div className={styles.comments_wrapper}>
                    <div
                        className={styles.load_comments}
                        onClick={() => {
                            this.setState({
                                is_comments_expanded: !is_comments_expanded,
                            });
                            this.props.fetchPost(this.props.post);
                        }}
                    >LOAD COMMENTS</div>
                </div>
            );
        }

        if (!comments || !comments.length) return null;
        return (
            <div className={classnames(styles.comments_wrapper, {[styles.hide]: !is_comments_expanded})}>
                <Comments comments={comments} post={post} />
            </div>
        );
    }

    renderIcon () {
        const {
            post,
        } = this.props;

        let fa_icon = ICON_MAP[post.type] || ICON_MAP.default;
        // Show no icon for empty text posts
        if (post.type === 'text' && post.empty) fa_icon = '';

        return <i onClick={this.onClick} className={classnames(styles.icon, fa_icon)}></i>;
    }

    renderThumbnail () {
        const {
            subreddit,
            post,
        } = this.props;

        let class_name = styles.thumbnail;
        if (post.thumbnail || post.media.image) {
            class_name = classnames(class_name, styles.thumbnail_image);
        }

        const icon = post.thumbnail || post.media.image || subreddit.icon
        if (icon) {
            return (
                <div
                    className={class_name}
                    style={{ backgroundImage: `url("${icon}")` }}
                />
            );
        }

        return <i className={classnames(styles.thumbnail_icon, THUMBNAIL_ICON_MAP[post.type])} />;
    }

    render () {
        const {
            is_media_expanded,
            is_comments_expanded,
        } = this.state;
        const {
            post,
            comments,
            fetchPosts,
        } = this.props;

        if (!post) return;

        const body_classname = classnames(styles.body, {
            [styles.body_empty]: post.empty,
        });

        return (
            <div className={styles.post}>
                <div className={styles.bar}>
                    <div className={styles.score}>{post.score_display}</div>
                    {this.renderThumbnail()}
                    <div className={body_classname}>
                        <div className={styles.title}>{post.title}</div>
                        {this.renderIcon()}
                        <div className={styles.submission}>
                            {`Submitted ${post.submitted_at} ago by ${post.author} to `}
                            <span className={styles.subreddit_link} onClick={() => {
                                fetchPosts({
                                    title: post.subreddit,
                                    type: 'subreddit',
                                    name: post.subreddit,
                                    url: `/r/${post.subreddit}`,
                                });
                            }}>{post.subreddit}</span>
                        </div>
                        <div className={styles.comments} onClick={this.onCommentsClick}>{post.num_comments} comments</div>
                    </div>
                </div>
                {this.renderMedia(post)}
                {this.renderComments(comments.byID[post.id])}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    };
};

const mapDispatchToProps = {
    fetchPost,
    fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
