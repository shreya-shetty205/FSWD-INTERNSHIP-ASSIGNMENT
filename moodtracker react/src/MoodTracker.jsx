import React, { useState } from "react";
import "./Mood.css";

function MoodTracker({ goHome }){

const [mood,setMood] = useState("");

const moods = {
happy:{
emoji:"😊",
text:"You are feeling Happy!",
quote:"Happiness is a direction, not a place."
},
sad:{
emoji:"😢",
text:"You are feeling Sad",
quote:"Every storm runs out of rain."
},
angry:{
emoji:"😡",
text:"You are feeling Angry",
quote:"Take a deep breath and stay calm."
},
excited:{
emoji:"🤩",
text:"You are feeling Excited!",
quote:"The best is yet to come!"
}
};

const clearMood = () => {
setMood("");
};

return(

<div className="mood-container">

<h2>Mood Tracker</h2>

{/* Home Button */}

<button className="home-btn" onClick={goHome}>
Home
</button>

<div className="buttons">

<button onClick={()=>setMood("happy")}>😊 Happy</button>
<button onClick={()=>setMood("sad")}>😢 Sad</button>
<button onClick={()=>setMood("angry")}>😡 Angry</button>
<button onClick={()=>setMood("excited")}>🤩 Excited</button>

</div>

{mood && (

<div className="mood-display">

<h1>{moods[mood].emoji}</h1>

<p>{moods[mood].text}</p>

<h4 className="quote">"{moods[mood].quote}"</h4>

<button className="clear-btn" onClick={clearMood}>
Clear Mood
</button>

</div>

)}

</div>

);

}

export default MoodTracker;