import React from 'react';
import { render } from '@testing-library/react';
import Contact from '../../pages/Contact';

describe('About page', () => {
  it('should be able to reaceived a state', () => {
    const { getByText } = render(<Contact />);
    const linkElement = getByText('Análise de Portifólio do Github');
    expect(linkElement).toBeInTheDocument();
  });
});
