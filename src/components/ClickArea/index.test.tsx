import React from 'react';
import { render } from '@testing-library/react';
import { ClickArea } from './ClickArea';

describe('ClickArea', () => {
  it('정상 rendering', () => {
    const result = render(<ClickArea />);

    expect(result.getByText('ClickArea')).toBeInTheDocument();
  });
});
