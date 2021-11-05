import React from 'react';
import { render } from '@testing-library/react';
import ArticleList from './articleList.jsx';

const testArticle = [{
    author: "Ryan Lawyer", 
    title: "What does Zillow’s exit tell us about the health of the iBuying market?"
}, 
{
    author: "Connie Loizos", 
    title: "An accelerator and fund says it's giving away its voting rights to scientist founders: \"They lose control\""
}];

describe('Tests for articles array', () => {
    it('Should render articles array', () => {
        const { asFragment } = render(<ArticleList articles={testArticle}/>);
        expect(asFragment()).toMatchSnapshot();
    })
});