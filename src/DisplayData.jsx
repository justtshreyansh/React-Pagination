import React from "react";
import "./DisplayData.css";

const DisplayData = ({ data = [] }) => {
  return (
    <div className="table-container">
      <h2>User Data</h2>
      <div className="table-wrapper">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                  No data found
                </td>
              </tr>
            ) : (
              data.map((ele, index) => (
                <tr key={index}>
                  <td>{ele.id}</td>
                  <td>{ele.firstName + " " + ele.lastName}</td>
                  <td>{ele.email}</td>
                  <td>{ele.age}</td>
                  <td>{ele.role || "N/A"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayData;
