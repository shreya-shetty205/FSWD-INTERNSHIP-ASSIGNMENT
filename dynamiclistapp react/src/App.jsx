import { useState } from "react";
import DynamicList from "./DynamicList";
import "./List.css";

function App(){

const [page,setPage] = useState("home");

return(

<div>

{page === "home" && (

<div className="home-container">

<h1>Dynamic Task List App</h1>

<p>Manage your daily tasks easily</p>

<button className="start-btn" onClick={()=>setPage("tasks")}>
Start
</button>

</div>

)}

{page === "tasks" && (
<DynamicList goHome={()=>setPage("home")} />
)}

</div>

);

}

export default App;