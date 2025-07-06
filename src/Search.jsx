import React from "react";
import "./Search.css";

const Search = ({ originalData, setData }) => {
  function handleSearch(e) {
    const query = e.target.value.toLowerCase();

    if (!query) {
      setData(originalData); // reset to full data if search is empty
      return;
    }

    const filtered = originalData.filter((item) => {
      const fullName = (item.firstName + " " + item.lastName).toLowerCase();
      const email = item.email.toLowerCase();
      const role = item.role ? item.role.toLowerCase() : "";
      return (
        fullName.includes(query) ||
        email.includes(query) ||
        role.includes(query)
      );
    });

    setData(filtered);
  }

  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search by name, email, or role"
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
};

export default Search;
