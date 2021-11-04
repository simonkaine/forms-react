import React from 'react';
import PropTypes from 'prop-types';

// export function that will render a title, author & description.
// that will then be called in the my articleList component
// set up prop types for readability and dev testing

export default function ArticleDetails({ title, author}) {
    return (
        <figure>
            <figcaption>
                <h2>Article Title: {title}</h2>
                <h3>By: {author}</h3>
                <hr></hr>
            </figcaption>
        </figure>
    );
}

ArticleDetails.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};