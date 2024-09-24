import React from 'react';
import { TextField, InputAdornment } from '@mui/material'; 
import styles from './Search.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Search = ({search}) => {
  return (
    <div className={styles.searchContainer}>
      <TextField
        className={styles.searchBar}
        variant="outlined"
        placeholder={search}
        InputProps={{
          className: styles.searchInput,
          endAdornment: (
            <InputAdornment position="end">
              <div className={styles.searchBarAddLineAtEnd}>
                <div className = {styles.searchIcon}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
              </div>
            </InputAdornment>
          ),
        }} 
      />
    </div>
  );
};

export default Search;
