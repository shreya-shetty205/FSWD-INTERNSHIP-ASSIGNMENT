import "../App.css";

function Profile() {
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  if (!user) {
    return (
      <div className="container">
        <h2>No user data</h2>
        <p>Please login first</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Profile</h2>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      {user.image && (
        <img
          src={`http://localhost:5000/uploads/${user.image}`}
          width="150"
          alt="profile"
        />
      )}
    </div>
  );
}

export default Profile;