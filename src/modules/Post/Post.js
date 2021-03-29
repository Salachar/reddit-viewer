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

class Post extends Component {
    constructor (props) {
        super(props);

        this.state = {
            is_media_expanded: false,
            is_media_max: false,
            is_comments_expanded: false,
        };
    }

    onClick = () => {
        const {
            is_media_expanded
        } = this.state;

        this.setState({
            is_media_expanded: !is_media_expanded,
        });
    }

    renderMedia (post) {
        const {
            is_media_expanded,
        } = this.state;

        if (!is_media_expanded) return null;

        switch (post.type) {
            case 'video': return <Video post={post} />;
            case 'image': return <Image post={post} />;
            case 'text': return <Text post={post} />;
            case 'link': return <Link post={post} />;
            default: return null;
        }
    }

    renderComments (comments) {
        const {
            is_media_expanded,
            is_comments_expanded
        } = this.state;

        if (!is_media_expanded) return null;

        if (!is_comments_expanded) {
            return (
                <div
                    className={styles.load_comments}
                    onClick={() => {
                        this.setState({
                            is_comments_expanded: !is_comments_expanded,
                        });
                        this.props.fetchPost(this.props.post);
                    }}
                >LOAD COMMENTS</div>
            );
        }

        if (!comments || !comments.length) return null;
        return <Comments comments={comments} />
    }

    renderIcon () {
        const {
            post,
        } = this.props;

        let fa_icon = 'fa-question-circle';
        switch (post.type) {
            case 'text':
                if (post.empty) {
                    fa_icon = '';
                } else {
                    fa_icon = 'fas fa-align-left';
                }
                break;
            case 'image':
                fa_icon = 'far fa-image';
                break;
            case 'video':
                fa_icon = 'fas fa-video';
                break;
            case 'link':
                fa_icon = 'fas fa-external-link-alt';
                break;
            default:
                break;
        }

        return <i onClick={this.onClick} className={classnames(styles.icon, fa_icon)}></i>;
    }

    render () {
        const data = this.props.post;
        if (!data) return;

        const {
            is_media_expanded,
            is_comments_expanded,
        } = this.state;
        const {
            subreddit,
            post,
            comments,
            fetchPost,
            fetchPosts,
        } = this.props;
        // const {
        //     subreddit,
        // } = data;

        const body_classname = classnames(styles.body, {
            [styles.body_empty]: post.empty,
        });

        console.log(subreddit);

        return (
            <div className={styles.post}>
                <div className={styles.bar}>
                    <div className={styles.score}>{data.score_display}</div>
                    <div className={styles.thumbnail} style={{ backgroundImage: `url("${data.thumbnail || data.media.image || subreddit.icon}")` }}></div>
                    <div className={body_classname}>
                        <div className={styles.title}>{data.title}</div>
                        {this.renderIcon()}
                        <div className={styles.submission}>
                            {`Submitted ${data.submitted_at} ago by ${data.author} to `}
                            <span className={styles.subreddit_link} onClick={() => {
                                fetchPosts({
                                    title: data.subreddit,
                                    type: 'subreddit',
                                    name: data.subreddit,
                                    url: `/r/${data.subreddit}`,
                                });
                            }}>{data.subreddit}</span>
                        </div>
                        <div className={styles.comments} onClick={() => {
                            fetchPost(post);
                            this.setState({
                                is_media_expanded: true,
                                is_comments_expanded: true,
                            });
                        }}>{data.num_comments} comments</div>
                    </div>
                </div>
                <div className={classnames(styles.content_wrapper, {[styles.hide]: !is_media_expanded})}>
                    {this.renderMedia(data)}
                </div>
                <div className={classnames(styles.comments_wrapper, {[styles.hide]: !is_comments_expanded})}>
                    {this.renderComments(comments.byID[data.id])}
                </div>
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
