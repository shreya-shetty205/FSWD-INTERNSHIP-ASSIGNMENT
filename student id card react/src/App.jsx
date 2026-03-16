import React from "react";
import StudentCard from "./StudentCard";

function App() {
  const appStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "30px"
  };

  return (
    <div style={appStyle}>
      <StudentCard
        name="Shreya S"
        course="BCA"
        year="3rd Year"
        image="https://randomuser.me/api/portraits/women/1.jpg"
      />

      <StudentCard
        name="Rahul Kumar"
        course="B.Tech"
        year="2nd Year"
        image="https://randomuser.me/api/portraits/men/2.jpg"
      />

      <StudentCard
        name="Anjali Sharma"
        course="B.Sc"
        year="1st Year"
        image="https://randomuser.me/api/portraits/women/3.jpg"
      />
    </div>
  );
}

export default App;