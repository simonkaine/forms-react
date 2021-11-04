import React from 'react';
import NewsSearch from './NewsSearch';
import { render, screen } from '@testing-library/react';

const testArticle = {
    author: "Ryan Lawyer", 
    title: "What does Zillow’s exit tell us about the health of the iBuying market?"
};

describe('Shows news articles', () => {
    it('Should display a list from news articles', async () => {
        // Loading test
        render(<NewsSearch />)
        screen.getByText('LOADING!!!...')

        // snapshot test all presentational components -> article list 'list', 'article' & search
        // 1. on screen find the html match for 'list' & expect list snapshot 
        const articlesList = await screen.findByRole('list', { name: 'list' }) 
        expect(articlesList).toMatchSnapshot();

        // behavior test - on changing search refetch articles

    })
})
