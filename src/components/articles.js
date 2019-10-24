import React from 'react';
import { connect } from 'react-redux';

import styles from './articles.module.css';

import Listing from './listing';

const Articles = ({articles}) => {
    return (
        <div className={styles.articles}>
            <div className={styles.subheader}>

            </div>
            <div className={styles.list}>
                {((articles || {}).listings || []).map((listing) => {
                    if (!listing || !listing.key) return null;
                    return <Listing key={listing.key} listing={listing} />
                })}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles.articles
    }
};

export default connect(mapStateToProps, null)(Articles);
