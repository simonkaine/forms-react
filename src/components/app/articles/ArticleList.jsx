import React from 'react';
import PropTypes from 'prop-types';
import ArticleDetails from './articleDetails';

// import ArticleDetails & propTypes
// export a function that is ArticleList and takes in articles
// I need to map over them for title and author data
// set up prop types for readability and dev testing

export default function ArticleList({ articles }) {
    const articleList = articles.map(({ title, author }) => (
        <li key={`${title} by ${author}`}>
            <ArticleDetails title={title} author={author} />
        </li>
    ));
    return <ul aria-label="list">{articleList}</ul>;
}

ArticleList.PropTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        })
    )
}
