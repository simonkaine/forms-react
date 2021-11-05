import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch.jsx';
// import ArticleDetails from '../components/app/articles/articleDetails';


describe('Shows news articles', () => {
    it('Should display a list from news articles', async () => {
        // Loading test
        render(<NewsSearch />)
        screen.getByText('LOADING!!!...')

        // snapshot test all presentational components -> article list 'list', 'article' & search
        // 1. on screen find the html match for 'list' & expect list snapshot 
        const articlesList = await screen.findByRole('list', { name: 'list' }) 
        expect(articlesList).toMatchSnapshot();

        // 3. snapshot for search

        // behavior test - on changing search refetch articles
    })
})
