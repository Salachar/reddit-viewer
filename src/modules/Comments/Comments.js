import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import styles from './Comments.module.css';

class Comments extends Component {
    renderComments (comments) {
        if (!comments || !comments.length) return;
        const { post } = this.props;

        return comments.map((comment) => {
            return (
                <div key={comment.key} className={`${styles.comment} ${comment.even ? styles.comment_even : styles.comment_odd}`}>
                    <div className={styles.author_info}>
                        <span className={classnames(styles.author, {
                            [styles.author_is_op]: post.author === comment.author,
                        })}>{comment.author}</span>
                        <span className={styles.score}>{comment.score} points</span>
                        {(comment.awards || []).map((award) => {
                            if (award.name.match(/gold|silver/)) {
                                return <div key={award.key} className={`${styles.award} ${styles[award.name]}`}>{award.count}</div>
                            }
                            return <div key={award.key} className={styles.award}>{award.name}</div>
                        })}
                    </div>
                    <div
                        className={styles.body}
                        dangerouslySetInnerHTML={{ __html: comment.body }}
                    />
                    {((comment.replies || []).length > 0) &&
                        <div className={styles.comments}>{this.renderComments(comment.replies)}</div>
                    }
                </div>
            );
        });
    }

    render () {
        return (
            <div className={styles.wrapper}>
                {this.renderComments(this.props.comments)}
            </div>
        );
    }
}

export default connect(null, null)(Comments);
