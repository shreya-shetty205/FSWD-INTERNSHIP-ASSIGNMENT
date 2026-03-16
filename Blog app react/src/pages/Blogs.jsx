import { Link } from "react-router-dom";

const blogs = [
  { id: 1, title: "React Basics", desc: "Learn fundamentals of React." },
  { id: 2, title: "React Router", desc: "Learn routing in React." },
  { id: 3, title: "React Hooks", desc: "Understanding hooks." },
  { id: 4, title: "State Management", desc: "Managing state effectively." },
  { id: 5, title: "Component Design", desc: "Reusable components." },
  { id: 6, title: "React Performance", desc: "Optimize React apps." }
];

function Blogs() {
  return (
    <div className="blog-section">
      <h1 className="heading">Latest Blogs</h1>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.desc}</p>

            <Link to={`/blog/${blog.id}`} className="read-btn">
              Read Blog
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;