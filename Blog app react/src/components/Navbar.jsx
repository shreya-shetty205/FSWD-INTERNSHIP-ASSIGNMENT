import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyBlogs</h2>

      <div className="nav-links">
        <NavLink to="/" className="link">
          Home
        </NavLink>

        <NavLink to="/blogs" className="link">
          Blogs
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;