import { useState } from "react";

function SignupForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const checkPasswordStrength = (password) => {
    if (password.length < 6) {
      return "Weak";
    }

    if (
      password.match(/[A-Z]/) &&
      password.match(/[0-9]/) &&
      password.length >= 8
    ) {
      return "Strong";
    }

    return "Medium";
  };

  const handleSignup = () => {

    if (!validateEmail(email)) {
      setMessage("Invalid Email Address");
      return;
    }

    const strength = checkPasswordStrength(password);

    if (strength === "Weak") {
      setMessage("Password is too weak");
      return;
    }

    setMessage("Signup Successful!");
  };

  return (
    <div className="form">

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {password && (
        <p>Password Strength: {checkPasswordStrength(password)}</p>
      )}

      <button onClick={handleSignup}>Signup</button>

      <p className="message">{message}</p>

    </div>
  );
}

export default SignupForm;