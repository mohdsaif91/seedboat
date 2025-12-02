import React from "react";
import ReactSelect from "react-select";

export default function SearchableDropdown({
  value,
  onChange,
  options = [],
  placeholder,
}) {
  const customStyles = {
    control: (base) => ({
      ...base,
      fontWeight: "600",
      fontFamily: "Poppins, sans-serif",
      borderRadius: "8px",
      background: "#f5f5f5",
      height: "70px",
      padding: "0 24px",
      backgroundImage:
        "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAMAAACtdX32AAAAdVBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhMdQaAAAAJ3RSTlMAAAECAwQGBwsOFBwkJTg5RUZ4eYCHkJefpaytrsXGy8zW3+Do8vNn0bsyAAAAYElEQVR42tXROwJDQAAA0Ymw1p9kiT+L5P5HVEi3qJn2lcPjtIuzUIJ/rhIGy762N3XaThqMN1ZPALsZPEzG1x8LrFL77DHBnEMxBewz0fJ6LyFHTPL7xhwzWYrJ9z22AqmQBV757MHfAAAAAElFTkSuQmCC)",
      backgroundPosition: "right 16px center",
      backgroundRepeat: "no-repeat",
      border: "none",
      boxShadow: "none",
      cursor: "pointer",
      width: "100%",
      "&:hover": {
        border: "none",
      },
    }),

    valueContainer: (base) => ({
      ...base,
      padding: 0,
      marginLeft: 0,
      fontFamily: "Poppins, sans-serif",
    }),

    singleValue: (base) => ({
      ...base,
      marginLeft: 0,
      color: "#000",
      fontFamily: "Poppins, sans-serif",
    }),

    placeholder: (base) => ({
      ...base,
      marginLeft: 0,
      color: "#666",
      fontFamily: "Poppins, sans-serif",
    }),

    indicatorsContainer: () => ({
      display: "none",
    }),

    menu: (base) => ({
      ...base,
      borderRadius: "8px",
      overflow: "hidden",
      fontFamily: "Poppins, sans-serif",
    }),

    option: (base, state) => ({
      ...base,
      fontFamily: "Poppins, sans-serif",
      background: state.isFocused ? "#eee" : "#fff",
      color: "#000",
      cursor: "pointer",
    }),
  };

  return (
    <ReactSelect
      styles={customStyles}
      options={options}
      isSearchable={true}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
