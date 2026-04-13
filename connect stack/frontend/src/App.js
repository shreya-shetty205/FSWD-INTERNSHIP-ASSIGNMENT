import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((res) => res.json())
      .then((result) => setData(result.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Connect the Stack</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;