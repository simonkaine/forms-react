import React from 'react';
import PropTypes from 'prop-types';

// export function that will render a title, author & description.
// that will then be called in the my articleList component
// set up prop types for readability and dev testing

export default function ArticleDetails({ title, author}) {
    return (
        <figure>
            <figcaption>
                {title} by {author}
            </figcaption>
        </figure>
    );
}

ArticleDetails.PropTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};