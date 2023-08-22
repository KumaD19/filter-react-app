import React, { useState } from "react";

import "./styles.css"
const Header = ({ onSubmit }) => {
const [inputValue, setInputValue] = useState("");

const handleinputChange = (e) => {

  setInputValue(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault();

  onSubmit(inputValue);
}

  return (
    <header>
      <nav>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter search"  value={inputValue} name="search" onChange={handleinputChange}  />
          <button type="submit">Search</button>
        </form>
      </nav>
    </header>
  );
};

export default Header;