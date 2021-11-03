import React from 'react';
import NewsSearch from './newsSearch';
import { render, screen } from '@testing-library/react';

describe('Shows news articles', () => {
    it('Should display a list from news articles', () => {
        render(<NewsSearch />)
        screen.getByText('LOADING!!!...')
    })
})
