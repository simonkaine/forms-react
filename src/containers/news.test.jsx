import React from 'react';
import NewsSearch from './newsSearch';
import { render, screen } from '@testing-library/react';

describe('Shows news articles', () => {
    it('Should display a list from news articles', () => {
        // Loading test
        render(<NewsSearch />)
        screen.getByText('LOADING!!!...')

        // snapshot test all presentational components -> article list 'ul'

        // behavior test - on changing search refetch articles

    })
})
