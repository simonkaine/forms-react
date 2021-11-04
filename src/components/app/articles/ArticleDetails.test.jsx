import React from 'react';
import { render } from '@testing-library/react';
import ArticleDetails from './articleDetails';

const testArticle = {
    author: "Ryan Lawyer", 
    title: "What does Zillow’s exit tell us about the health of the iBuying market?"
};

describe('Tests for single article', () => {
    it('Should render single article snapshot', () => {
        const { asFragment } = render(<ArticleDetails title={testArticle.title} author={testArticle.author}/>);
        expect(asFragment()).toMatchSnapshot();
    })
});

