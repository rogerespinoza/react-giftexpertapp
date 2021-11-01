import React, { useState } from "react";
import Proptypes from "prop-types";

export default function AddCategory({ setCategories }) {
  const [inputValue, setInputValue] = useState("Ingrese busqueda");

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // setCategories(e)
    // console.log(e);
    setCategories(categ => [inputValue, ...categ]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: Proptypes.func.isRequired,
};
