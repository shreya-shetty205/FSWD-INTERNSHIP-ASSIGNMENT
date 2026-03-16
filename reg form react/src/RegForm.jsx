import React, { useState } from "react";

function RegForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (age < 18) {
      setMessage("❌ Age must be 18 or above");
      setIsError(true);
    } else {
      setMessage("✅ Registration Successful!");
      setIsError(false);
    }
  };

  const containerStyle = {
    width: "300px",
    margin: "60px auto",
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  };

  return (
    <div style={containerStyle}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {message && (
        <p style={{ color: isError ? "red" : "green", marginTop: "15px" }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default RegForm;