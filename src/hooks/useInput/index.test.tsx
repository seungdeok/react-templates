import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useInput } from './useInput';

const INPUT_TEST_ID = 'input';
const BUTTON_TEST_ID = 'reset';
const MSG_TEST_ID = 'msg';
const INITIAL_VALUE = '';
const UPDATED_VALUE = 'UPDATE TEXT';
const ERROR_MSG = 'Too long';

function TestComponent() {
  const validateTest = (value: string) => {
    if (value.length > 5) {
      return { success: false, msg: ERROR_MSG };
    }
    return { success: true };
  };

  const [text, errorMsg, onChange, onBlur, reset] = useInput(
    INITIAL_VALUE,
    validateTest,
  );

  return (
    <div>
      <input
        data-testid={INPUT_TEST_ID}
        value={text}
        onBlur={onBlur}
        onChange={onChange}
      />
      {errorMsg && <p data-testid={MSG_TEST_ID}>{errorMsg}</p>}
      <button data-testid={BUTTON_TEST_ID} type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

describe('useInput', () => {
  it('초기값 정상 반환 확인', () => {
    const { getByTestId } = render(<TestComponent />);
    const input = getByTestId(INPUT_TEST_ID) as HTMLInputElement;
    expect(input.value).toBe(INITIAL_VALUE);
  });

  it('onChange 정상 동작 확인', () => {
    const { getByTestId } = render(<TestComponent />);
    const input = getByTestId(INPUT_TEST_ID) as HTMLInputElement;
    fireEvent.change(input, { target: { value: UPDATED_VALUE } });
    expect(input.value).toBe(UPDATED_VALUE);
  });

  it('onBlur 정상 동작 확인', () => {
    const { getByTestId } = render(<TestComponent />);
    const input = getByTestId(INPUT_TEST_ID) as HTMLInputElement;

    fireEvent.change(input, { target: { value: UPDATED_VALUE } });
    fireEvent.blur(input, {});

    const p = getByTestId(MSG_TEST_ID) as HTMLInputElement;
    expect(p.textContent).toBe(ERROR_MSG);
  });

  it('reset 정상 동작 확인', () => {
    const { getByTestId } = render(<TestComponent />);
    const input = getByTestId(INPUT_TEST_ID) as HTMLInputElement;
    const resetBtn = getByTestId(BUTTON_TEST_ID);
    fireEvent.change(input, { target: { value: UPDATED_VALUE } });
    expect(input.value).toBe(UPDATED_VALUE);
    fireEvent.click(resetBtn);
    expect(input.value).toBe(INITIAL_VALUE);
  });
});
