import { useState } from "react";
import Weather from "./Weather";
import "./Weather.css";

function App() {

const [page, setPage] = useState("home");

return (

<div>

{page === "home" && (

<div className="home-container">

<h1>Welcome to Weather Dashboard</h1>

<p>Check weather of any city easily ☁️🌤️</p>

<button className="start-btn" onClick={() => setPage("weather")}>
Start
</button>

</div>

)}

{page === "weather" && (
<Weather goHome={() => setPage("home")} />
)}

</div>

);

}

export default App;