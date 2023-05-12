import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });

  const [tableData, setTableData] = useState([]);

useEffect(() => {
  const storedFormData = JSON.parse(localStorage.getItem("formData"));
//  executed after the component has rendered for the first time and after every update

  if (storedFormData) { 
    setFormData(storedFormData);
  }
  const storedTableData = JSON.parse(localStorage.getItem("tableData"));

  if (storedTableData) {
    setTableData(storedTableData);
  }
  setFormData({
    name: "",
    email: "",
    password: "",
    contact: "",
  });
}, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdate = () => {
    const updatedTableData = [...tableData]; //spread operator allows you to create a new array with all the elements of an existing array.
    updatedTableData[tableData.length - 1] = formData;
    localStorage.setItem("tableData", JSON.stringify(updatedTableData));
    setTableData(updatedTableData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTableData = [...tableData, formData];
    localStorage.setItem("tableData", JSON.stringify(newTableData));
    setTableData(newTableData);
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  return (
    <>
      <form
        className="d-flex flex-column justify-content-center align-items-center"
        onSubmit={handleSubmit}
      >
        <label className="d-flex text-font" htmlFor="name">
          Name
        </label>
        <input
          className="input-fields"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label className="d-flex text-font" htmlFor="email">
          Email
        </label>
        <input
          className="input-fields"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label className="d-flex text-font" htmlFor="password">
          Password
        </label>
        <input
          className="input-fields"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label className="d-flex text-font" htmlFor="contact">
          Contact
        </label>
        <input
          className="input-fields"
          type="contact"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
        <button className=" my-3 btn-padding" type="submit">
          Submit
        </button>
        <button className="btn-padding" type="button" onClick={handleUpdate}>
          Update
        </button>
      </form>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 && (
            <tr>
              <td>{tableData[tableData.length - 1].name}</td>
              <td>{tableData[tableData.length - 1].email}</td>
              <td>{tableData[tableData.length - 1].password}</td>
              <td>{tableData[tableData.length - 1].contact}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Form;
