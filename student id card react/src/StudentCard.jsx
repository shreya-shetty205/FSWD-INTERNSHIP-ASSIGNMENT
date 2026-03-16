import React from "react";

function StudentCard(props) {
  const cardStyle = {
    width: "250px",
    border: "2px solid #333",
    borderRadius: "10px",
    padding: "15px",
    margin: "15px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    backgroundColor: "#f4f4f4"
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px"
  };

  const nameStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333"
  };

  return (
    <div style={cardStyle}>
      <img src={props.image} alt="Profile" style={imageStyle} />
      <div style={nameStyle}>{props.name}</div>
      <p>Course: {props.course}</p>
      <p>Year: {props.year}</p>
    </div>
  );
}

export default StudentCard;