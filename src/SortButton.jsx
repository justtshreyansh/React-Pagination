import React from "react";
import "./SortButton.css";

const SortButton = ({
  data,
  setData,
  email,
  name,
  age,
  setName,
  setAge,
  setEmail,
}) => {
  function sortByAge() {
    let sortedArray = [];
    if (age) {
      sortedArray = data.sort((a, b) => a.age - b.age);
    } else {
      sortedArray = data.sort((a, b) => b.age - a.age);
    }
    setAge(!age);
    setData([...sortedArray]);
  }

  function sortByName() {
    let sortedArray = [];
    if (name) {
      sortedArray = data.sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );
    } else {
      sortedArray = data.sort((a, b) =>
        b.firstName.localeCompare(a.firstName)
      );
    }
    setName(!name);
    setData([...sortedArray]);
  }

  function sortByEmail() {
    let sortedArray = [];
    if (email) {
      sortedArray = data.sort((a, b) => a.email.localeCompare(b.email));
    } else {
      sortedArray = data.sort((a, b) => b.email.localeCompare(a.email));
    }
    setEmail(!email);
    setData([...sortedArray]);
  }

  return (
    <div className="sort-button-wrapper">
      
      <div className="sort-button-container">
        <button className="sort-btn" onClick={sortByEmail}>
          {email ? "Sort Email ↑" : "Sort Email ↓"}
        </button>
        <button className="sort-btn" onClick={sortByName}>
          {name ? "Sort Name ↑" : "Sort Name ↓"}
        </button>
        <button className="sort-btn" onClick={sortByAge}>
          {age ? "Sort Age ↑" : "Sort Age ↓"}
        </button>
      </div>
    </div>
  );
};

export default SortButton;
