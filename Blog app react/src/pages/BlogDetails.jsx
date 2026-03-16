import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();

  return (
    <div className="blog-details">
      <h1>Blog Details</h1>
      <p>You are reading blog number {id}</p>
    </div>
  );
}

export default BlogDetails;