import { renderHook, act } from '@testing-library/react-hooks'
import { useDebounce } from './debounce';

jest.useFakeTimers();

it('should debounce value', () => {
  const hook = renderHook((initialValue) => useDebounce(initialValue, 200),
    {initialProps: 1});
  hook.rerender(2);
  act( () => {
    jest.advanceTimersByTime(150);
  });
  expect(hook.result.current).toBe(1);
  act( () => {
    jest.advanceTimersByTime(150);
  });
  expect(hook.result.current).toBe(2);
});
