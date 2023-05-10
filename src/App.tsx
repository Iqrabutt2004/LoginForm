import React, { useState, useEffect } from "react";
import "./App.css";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");
    const savedFirstName = localStorage.getItem("firstName");
    const savedLastName = localStorage.getItem("lastName");

    if (savedName) {
      setName(savedName);
    }

    if (savedEmail) {
      setEmail(savedEmail);
    }

    if (savedFirstName) {
      setFirstName(savedFirstName);
    }

    if (savedLastName) {
      setLastName(savedLastName);
    }
  }, []);

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  if (updated) {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
  }
  setUpdated(false);
};

const handleUpdate = () => {
  setUpdated(true);
};


  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setUpdated(false);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setUpdated(false);
  };

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
    setUpdated(false);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
    setUpdated(false);
  };

  return (
    <form className="form-design" onSubmit={handleSubmit}>
      <div className="name-field">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="name-input"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="name-field">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="name-field">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div className="name-field">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <button className="submit-btn" type="submit">
        Submit
      </button>
      <button className="submit-btn" type="button" onClick={handleUpdate}>
        Update
      </button>
      {updated && <p>The information has been updated.</p>}
      {/*  conditional rendering */}
    </form>
  );
};

function App() {
  return <LoginPage />;
}

export default App;
