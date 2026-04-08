import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>

      {/* TOP BAR */}
      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "20px",
        backgroundColor: "black"
      }}>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/signup")}>Signup</button>
      </div>

      {/* CENTER TEXT */}
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        Welcome to Secure Login System
      </h1>

    </div>
  );
}

export default Home;