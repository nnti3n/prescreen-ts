import React, { useState, useEffect } from 'react';
import { searchCountries } from '../api/request';
import { useDebounce } from '../api/debounce';
import { SearchImg } from '../img/search';
import { ThemeContext } from './ThemeProvider';

const inputRef = React.createRef();

function AutoComplete() {
  const { dark } = React.useContext(ThemeContext);

  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    document.addEventListener("click", handleOuterClick);
  }, []);

  // set debounce to 500ms
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  async function fetchCountry() {
    if (debouncedSearchTerm) {
      const countries = await searchCountries(debouncedSearchTerm);
      setResults(countries);
    } else {
      setResults([]);
    }
  }

  useEffect(() => {
      fetchCountry();
    }, [debouncedSearchTerm]
  );

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  const handleOuterClick = e => {
    if (inputRef.current !== null && !inputRef.current.contains(e.target)) {
      setShowResult(false);
    }
  };

  function handleClick() {
    setShowResult(true);
  }

  function handleSelect(r) {
    if (r.numericCode !== -1) {
      setSelectedCountry(r.name)
    }
    setShowResult(false);
  }

  return (
    <div
      ref={inputRef}
      className={`autocomplete ${dark ? 'dark' : ''}`}
    >
      <div className="container">
        <div className="table">
          <div className="table-cell">
            <div className="icon">
              {SearchImg}
            </div>
            <div className="input">
              <input
                autoComplete="off"
                type="text"
                placeholder="Try Vietnam"
                onChange={handleSearch}
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>

      {
        showResult && results.length > 0 && <div className="result">
          <ul>
            {results.map(result => (
              <li key={result.numericCode} onClick={() => handleSelect(result)}>
                {result.name}
              </li>
            ))}
          </ul>
        </div>
      }
      {
        selectedCountry && <div className="selected-city">{selectedCountry}</div>
      }
    </div>
  )
}

export default AutoComplete;
