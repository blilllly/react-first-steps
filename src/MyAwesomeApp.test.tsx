import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp', () => {
  test('should render firstName and lastName', () => {
    const { container } = render(<MyAwesomeApp />);
    // screen.debug();

    const h1 = container.querySelector('h1');
    const h2 = container.querySelector('h2');

    // expect(h1?.innerHTML).toContain('Billy');
    expect(h1?.innerHTML).toBe('Billy');
    expect(h2?.innerHTML).toBe('Alvear');
  });

  test('should render firstName and lastName - screen', () => {
    render(<MyAwesomeApp />);
    // screen.debug();

    // const h1 = screen.getByRole('heading', {
    //   level: 1,
    // });
    const h1 = screen.getByTestId('first-name-title');
    expect(h1.innerHTML).toContain('Billy');
  });

  test('should match snapshot', () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });

  test('should match snapshot - screen', () => {
    render(<MyAwesomeApp />);
    expect(screen.getByTestId('div-app')).toMatchSnapshot();
  });
});
