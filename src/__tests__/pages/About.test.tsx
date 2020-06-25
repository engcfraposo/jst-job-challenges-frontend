import React from 'react';
import { render } from '@testing-library/react';
import About from '../../pages/About';

describe('About page', () => {
  it('should be able to reaceived a state', () => {
    const { getByText } = render(<About />);
    const linkElement = getByText('Análise de Portifólio do Github');
    expect(linkElement).toBeInTheDocument();
  });
});
