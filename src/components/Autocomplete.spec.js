import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from "react-dom/test-utils";
import AutoComplete from './Autocomplete';

describe('<AutoComplete />', () => {
  jest.useFakeTimers();

  let container = null;
  beforeEach(() => {
    global.fetch = jest.fn();
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    // cleanup mock
    global.fetch.mockClear();
    delete global.fetch;
  });

  it('should render successful', () => {
    act(() => {
      render(<AutoComplete />, container);
    });
    const inputPlaceholder = container.querySelector('input').placeholder;
    expect(inputPlaceholder).toBe('Try Vietnam');
  });

  it('should fetch result only twice', async () => {
    const mockCountries = [
      {
        name: 'Italy',
        numericCode: '380'
      },
      {
        name: 'Mauritania',
        numericCode: '478'
      },
      {
        name: 'Poland',
        numericCode: '616'
      }
    ];

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockCountries)
      })
    );

    await act(async () => {
      render(<AutoComplete />, container);
    });

    let input = document.querySelector('input');


    await act(async () => {
      Simulate.click(input);
      input.value = 'a';
      Simulate.change(input);
      jest.advanceTimersByTime(200);
    });

    await act(async () => {
      input.value = 'b';
      Simulate.change(input);
      jest.advanceTimersByTime(600);
    });

    await act(async () => {
      input.value = 'hehe';
      Simulate.change(input);
      jest.advanceTimersByTime(600);
    });

    expect(global.fetch).toHaveBeenCalledTimes(2);

    expect(container.querySelectorAll('.result li')).toHaveLength(3);
  });
});
