import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import configureStore from './store/store';

import './index.css';

import App from './modules/App';

const store = configureStore();
store.subscribe((e) => {
    const current_state = store.getState();
    const {
        posts = {},
        subreddits = {},
    } = current_state;
    const {
        current = {},
    } = posts;
    const {
        subscribed = [],
        subscribed_map = {}
    } = subreddits;

    const serializedState = JSON.stringify({
        current: current.subreddit || null,
        subreddits: {
            subscribed,
            subscribed_map,
        },
    });
    localStorage.setItem('saved_state', serializedState);
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
// serviceWorker.register();
