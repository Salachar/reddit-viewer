import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from './actions/articlesAction';

import styles from './app.module.css';

import Header from './components/header';
import Articles from './components/articles';
import Sidemenu from './components/sidemenu/sidemenu';
import Article from './components/article/article';

class App extends Component {
    componentDidMount () {
        this.props.fetchArticles({
            title: 'best',
            url: 'best'
        });
    }

    renderArticle () {
        if (!this.props.article) return;
        return <Article data={this.props.article} />;
    }

    render() {
        return (
            <div className="app">
                <Header />
                <div className={styles.main_container}>
                    <Articles />
                    <Sidemenu />
                </div>
                {this.renderArticle()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        article: state.article.article
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchArticles: (listing) => dispatch(fetchArticles(listing))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);