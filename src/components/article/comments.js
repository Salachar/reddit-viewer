import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './comments.module.css';

class Comments extends Component {
    renderComments (comments) {
        if (!comments || !comments.length) return;
        return comments.map((comment) => {
            return (
                <div key={comment.key} className={`${styles.comment} ${comment.even ? styles.comment_even : styles.comment_odd}`}>
                    <div className={styles.author}>
                        <span>{comment.author}</span>
                        <span className={styles.score}>{comment.score} points</span>
                        {(comment.awards || []).map((award) => {
                            if (award.name.match(/gold|silver/)) {
                                return <div key={award.key} className={`${styles.award} ${styles[award.name]}`}>{award.count}</div>
                            }
                            return <div key={award.key} className={styles.award}>{award.name}</div>
                        })}
                    </div>
                    <div className={styles.body}>{comment.body}</div>
                    {((comment.replies || []).length > 0) &&
                        <div className={styles.comments}>{this.renderComments(comment.replies)}</div>
                    }
                </div>
            );
        });
    }

    render () {
        return (
            <div>
                {this.renderComments(this.props.comments)}
            </div>
        );
    }
}

export default connect(null, null)(Comments);