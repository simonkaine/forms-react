import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

describe('Tests for search input', () => {
    it('Should test for search', () => {
        const search = 'discuss'
        const { asFragment } = render(<Search search={search}/>);
        expect(asFragment()).toMatchSnapshot();
    })
});
