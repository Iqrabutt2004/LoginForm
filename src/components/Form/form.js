import React, { useState, useEffect } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact:"",
  });
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));

    if (storedFormData) {
      setFormData(storedFormData);
    }

    const storedTableData = JSON.parse(localStorage.getItem("tableData"));
    if (storedTableData) {
      setTableData(storedTableData);
    }
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.removeItem("tableData");
    setTableData([]);
    setTableData([formData]);

    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("tableData", JSON.stringify([formData]));

    setFormData({
      name: "",
      email: "",
      password: "",
      contact: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="contact"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.password}</td>
              <td>{data.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Form;
