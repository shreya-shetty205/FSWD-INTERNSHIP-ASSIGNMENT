import React, { useState } from "react";

function DynamicList({goHome}){

const [task,setTask] = useState("");
const [tasks,setTasks] = useState([]);

const addTask = () => {

if(task.trim()==="") return;

setTasks([...tasks,task]);
setTask("");

};

const deleteTask = (index) => {

const updatedTasks = tasks.filter((_,i)=>i!==index);
setTasks(updatedTasks);

};

return(

<div className="list-container">

<button className="home-btn" onClick={goHome}>
Home
</button>

<h2>Task Manager</h2>

{/* Task Count */}

<p className="task-count">
Total Tasks: {tasks.length}
</p>

<div className="input-section">

<input
type="text"
placeholder="Enter task"
value={task}
onChange={(e)=>setTask(e.target.value)}
/>

<button onClick={addTask}>
Add Task
</button>

</div>

<ul>

{tasks.map((item,index)=>(

<li key={index}>

{item}

<button
className="delete-btn"
onClick={()=>deleteTask(index)}
>
Delete
</button>

</li>

))}

</ul>

</div>

);

}

export default DynamicList;