document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;

    
    document.getElementById("nameErr").innerHTML = "";
    document.getElementById("emailErr").innerHTML = "";
    document.getElementById("passErr").innerHTML = "";
    document.getElementById("cpassErr").innerHTML = "";
    document.getElementById("result").innerHTML = "";

    let valid = true;

    
    if(name === ""){
        document.getElementById("nameErr").innerHTML = "Name cannot be empty";
        valid = false;
    }

    
    if(!email.includes("@")){
        document.getElementById("emailErr").innerHTML = "Email must contain @";
        valid = false;
    }

    
    if(pass.length < 6){
        document.getElementById("passErr").innerHTML = "Password must be 6+ characters";
        valid = false;
    }

    if(pass !== cpass){
        document.getElementById("cpassErr").innerHTML = "Passwords do not match";
        valid = false;
    }

  
    if(valid){
        
        document.body.style.background = "#d4f8d4";

       
        let newDiv = document.createElement("div");
        newDiv.className = "success";
        newDiv.innerHTML = "Registration Successful!";
        document.getElementById("result").appendChild(newDiv);

        
        document.getElementById("btn").innerHTML = "Submitted";
    }
});
