import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchForSubreddits } from '../../../../store/actions/searchAction';

import side_menu_styles from '../../SideMenu.module.css';

import styles from './Search.module.css';

import Subreddit from '../Subreddit';

class SearchSubreddits extends Component {
    search = (e) => {
        if (e.key.toLowerCase() !== 'enter') return;
        const search_string = e.currentTarget.value;
        this.props.searchForSubreddits(search_string);
    }

    render() {
        return (
            <div className={side_menu_styles.section}>
                <div className={side_menu_styles.section_title}>Search:</div>
                <input className={styles.search} spellCheck="false" onKeyDown={this.search} placeholder="subreddit name"/>
                {(this.props.subreddits || []).map((subreddit) => {
                    return <Subreddit key={`search_${subreddit.key}`} checked={!!this.props.subscribed_map[subreddit.key]} subreddit={subreddit} />;
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        subreddits: state.search.subreddits,
        subscribed_map: state.subreddits.subscribed_map
    }
};

const mapDispatchToProps = {
    searchForSubreddits: (search_string) => searchForSubreddits(search_string)
};

SearchSubreddits.defaultProps = {
    subreddits: [],
    subscribed_map: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSubreddits);