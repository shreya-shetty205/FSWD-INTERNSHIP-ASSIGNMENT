import { useState } from "react";
import axios from "axios";
import "../App.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const handleClear = () => {
    setName("");
    setEmail("");
    setPassword("");
    setImage(null);
  };

  const handleSignup = async () => {

    if (!name || !email || !password) {
      alert("All fields required");
      return;
    }

    if (!image) {
      alert("Please upload image");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        formData
      );

      alert(res.data.msg);

      if (res.data.msg === "Signup successful") {
        handleClear(); // ✅ clear form
      }

    } catch {
      alert("Error");
    }
  };

  return (
    <div className="signup-bg">
      <div className="container">
        <h2>Signup</h2>

        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />

        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
}

export default Signup;