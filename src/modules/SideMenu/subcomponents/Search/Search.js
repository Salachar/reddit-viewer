import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    searchSubreddits,
    clearSearch,
} from '../../../../store/actions/subredditAction';

import side_menu_styles from '../../SideMenu.module.css';

import styles from './Search.module.css';

import Subreddit from '../Subreddit';

class SearchSubreddits extends Component {
    constructor(props) {
        super(props);

        this.search_timer = null;
    }

    search = (e) => {
        const {
            searchSubreddits,
            clearSearch,
        } = this.props;

        const search_string = e.currentTarget.value;

        if (!search_string) {
            clearTimeout(this.search_timer);
            this.search_timer = null;
            clearSearch();
            return;
        }

        if (e.key.toLowerCase() !== 'enter') {
            clearTimeout(this.search_timer);
            this.search_timer = null;
            this.search_timer = setTimeout(() => {
                searchSubreddits(search_string);
            }, 300);
        } else {
            searchSubreddits(search_string);
        }
    }

    render() {
        const {
            search_list,
            subscribed_map,
        } = this.props;

        return (
            <div className={side_menu_styles.section}>
                <div className={side_menu_styles.section_title}>Search:</div>
                <input className={styles.search} spellCheck="false" onKeyUp={this.search} placeholder="subreddit name"/>

                {(search_list || []).map((subreddit) => {
                    return (
                        <Subreddit
                            key={`search_${subreddit.id}`}
                            checked={!!subscribed_map[subreddit.id]}
                            subreddit={subreddit}
                        />
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        search_list: state.subreddits.search_list,
        subscribed_map: state.subreddits.subscribed_map,
    }
};

const mapDispatchToProps = {
    searchSubreddits,
    clearSearch,
};

SearchSubreddits.defaultProps = {
    subreddits: [],
    subscribed_map: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSubreddits);
