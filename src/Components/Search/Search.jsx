import React, { useState } from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../../src/assets/Search icon.svg";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Search = ({ placeholder, data }) => {
  const [val, setVal] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    console.log(e.target.value);
    setVal(e.target.value);

    const res = data.filter((item) => item.title.includes(e.target.value));
  };

  const clickHandler = () => {};

  return (
    <>
      {/* <form className={styles.wrapper} onSubmit={onSubmit}>
        <input
          className={styles.search}
          // palceholder="Search a album of your choice"
          placeholder={placeholder}
          required
          value={val}
          onChange={changeHandler}
        />
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>
      {val ? <></> : null} */}

      <div className={styles.wrapper}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={data.map((option) => option.title)}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              className={styles.search}
              label={placeholder}
              InputProps={{ ...params.InputProps, type: "search" }}
              onChange={changeHandler}
            />
          )}
        />
        <button
          className={styles.searchButton}
          type="submit"
          onClick={clickHandler}>
          <SearchIcon />
        </button>
      </div>
    </>
  );
};

const top100Films = [];

// <Autocomplete
// disablePortal
// id="combo-box-demo"
// options={top100Films}
// sx={{ width: 300 }}
// renderInput={(params) => <TextField {...params} label="Movie" />}
// />

export default Search;
