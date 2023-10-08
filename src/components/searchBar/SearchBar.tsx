import React, { createRef, useEffect } from 'react';
import './SearchBar.scss';

function SearchBar(props: any) {
  const { keyword, saveSearch } = props;
  const inputRef: React.RefObject<HTMLInputElement> = createRef();

  const submitted = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (inputRef.current) {
        saveSearch(inputRef.current.value);
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = keyword;
    }
  }, [keyword, inputRef])


  return (
    <div className="search-bar-container">
      <form onSubmit={submitted}>
        <input 
          placeholder='keyword' 
          type='text'
          name='keyword'
          ref={inputRef}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar;