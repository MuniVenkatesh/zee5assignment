import React, { useState } from 'react';

const Search = ({onSearch, albums}) => {
  const [value, setValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const onChange = (e) => {
    setShowSuggestions(true);
    setValue(e.target.value);
  }
  const onClick = (e) => {
    setShowSuggestions(false);
    onSearch(e);
  }
  return (
    <div className="search">
      <input
        value={value}
        onChange={onChange}
        className="search-input"
      />
      {
         showSuggestions && value && (
          <ul className='suggestions' onClick={onClick}>
            {
                (
                    albums.map((album)=>{
                        return album.title.includes(value) ? (
                            (
                                <li value={album.id} key={album.id} className="search-input search-suggestion">
                                    {
                                      album.title 
                                    }
                                </li>
                            )
                        ): null
                    })
                )
            }
          </ul>
         )
      }
    </div>
  );
}

export default Search;
