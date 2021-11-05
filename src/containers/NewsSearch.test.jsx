import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

        // behavior tests - on changing search refetch articles >>>
        const Input = await screen.findByLabelText('Search');
        userEvent.type(Input, 'discuss');

        const submitBtn = await screen.findByRole('button', {
            name: 'button',
          });
          userEvent.click(submitBtn);

        // wait for those results ^^^
        return waitFor(() => {
            const article = screen.getAllByText('discuss', {
            exact: false, 
        });
        expect(article).toHaveLength(1);
    });
  });
});