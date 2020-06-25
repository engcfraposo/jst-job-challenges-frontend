import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Stats from '../../pages/Stats';

describe('Stats page', () => {
  it('Render test', () => {
    const { getByText } = render(<Stats />);
    const linkElement = getByText('Análise de Portifólio do Github');
    expect(linkElement).toBeInTheDocument();
  });
  it('Get element in the Select', () => {
    const { getByAltText, getByTestId } = render(<Stats />);
    fireEvent.click(getByAltText('search'));
    expect(getByTestId('repository-option'));
  });
});
