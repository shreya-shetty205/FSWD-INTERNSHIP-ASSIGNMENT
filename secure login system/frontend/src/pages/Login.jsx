import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password
      });

      alert(res.data.msg);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user)); // ✅ fix
        navigate("/profile");
      }

    } catch {
      alert("Error");
    }
  };

  return (
    <div className="login-bg">
      <div className="container">
        <h2>Login</h2>

        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;