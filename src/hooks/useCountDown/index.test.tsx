import React, { useState } from 'react';
import { render, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useCountDown } from './useCountDown';

const TEXT_TEST_ID = 'count';
const BUTTON1_TEST_ID = 'start';
const BUTTON2_TEST_ID = 'stop';
const BUTTON3_TEST_ID = 'reset';

function TestComponent() {
  const [count, setCount] = useState(10);
  const handleCountDown = () => {
    setCount(20);
  };

  const [seconds, start, stop, reset] = useCountDown(count, handleCountDown);

  return (
    <div>
      <div data-testid={TEXT_TEST_ID}>{seconds}</div>
      <button
        data-testid={BUTTON1_TEST_ID}
        type="button"
        onClick={() => start()}
      >
        START
      </button>
      <button
        data-testid={BUTTON2_TEST_ID}
        type="button"
        onClick={() => stop()}
      >
        STOP
      </button>
      <button
        data-testid={BUTTON3_TEST_ID}
        type="button"
        onClick={() => reset()}
      >
        RESET
      </button>
    </div>
  );
}

describe('useCountDown', () => {
  test('setinterval 정상 동작 테스트', async () => {
    jest.useFakeTimers();
    const { getByTestId } = render(<TestComponent />);

    expect(getByTestId(TEXT_TEST_ID).textContent).toBe('10');

    await act(() => {
      userEvent.click(getByTestId(BUTTON1_TEST_ID));
    });

    await act(() => {
      jest.advanceTimersByTime(2000);
    });

    await waitFor(() => {
      expect(getByTestId(TEXT_TEST_ID).textContent).toBe('8');
    });
  });

  test('stop 정상 동작 테스트', async () => {
    jest.useFakeTimers();
    const { getByTestId } = render(<TestComponent />);

    expect(getByTestId(TEXT_TEST_ID).textContent).toBe('10');

    await act(() => {
      userEvent.click(getByTestId(BUTTON1_TEST_ID));
      jest.advanceTimersByTime(2000);
    });

    await act(() => {
      userEvent.click(getByTestId(BUTTON2_TEST_ID));
      jest.advanceTimersByTime(2000);
    });

    await waitFor(() => {
      expect(getByTestId(TEXT_TEST_ID).textContent).toBe('8');
    });
  });
});
