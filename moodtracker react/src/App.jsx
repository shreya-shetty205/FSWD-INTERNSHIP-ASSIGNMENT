import React, { useState } from "react";
import MoodTracker from "./MoodTracker";
import "./Mood.css";

function App() {

const [page, setPage] = useState("home");

return (

<div>

{page === "home" && (

<div className="home-container">

<h1>Welcome to Mood Tracker</h1>

<p>Track your mood and stay positive 🌈</p>

<button onClick={()=>setPage("tracker")}>
Start Tracking
</button>

</div>

)}

{page === "tracker" && <MoodTracker goHome={()=>setPage("home")} />}

</div>

);

}

export default App;