import React, { useState } from "react";
import "./Form.css";

function Form() {

const [formData, setFormData] = useState({
name:"",
email:"",
password:"",
phone:""
});

const [errors,setErrors] = useState({});

const handleChange = (e)=>{
setFormData({
...formData,
[e.target.name]:e.target.value
});
};

const validateForm = ()=>{

let newErrors={};

let emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordPattern=/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/;

if(formData.name.trim()===""){
newErrors.name="Name is required";
}

if(!emailPattern.test(formData.email)){
newErrors.email="Enter valid email";
}

if(!passwordPattern.test(formData.password)){
newErrors.password="Password must contain uppercase, number and special character";
}

if(formData.phone.length!==10 || isNaN(formData.phone)){
newErrors.phone="Enter valid phone number";
}

return newErrors;
};

const handleSubmit=(e)=>{
e.preventDefault();

const validationErrors=validateForm();

if(Object.keys(validationErrors).length===0){
alert("Registration Successful");
setFormData({
name:"",
email:"",
password:"",
phone:""
});
setErrors({});
}
else{
setErrors(validationErrors);
}

};

return(

<div className="form-box">

<h2>Mini Shop Registration</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Enter your name"
value={formData.name}
onChange={handleChange}
/>
<p>{errors.name}</p>

<input
type="text"
name="email"
placeholder="Enter your email"
value={formData.email}
onChange={handleChange}
/>
<p>{errors.email}</p>

<input
type="password"
name="password"
placeholder="Create password"
value={formData.password}
onChange={handleChange}
/>
<p>{errors.password}</p>

<input
type="text"
name="phone"
placeholder="Enter phone number"
value={formData.phone}
onChange={handleChange}
/>
<p>{errors.phone}</p>

<button type="submit">Register</button>

</form>

</div>

);
}

export default Form;