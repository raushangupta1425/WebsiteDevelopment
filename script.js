// New user registration
function user_register(){
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
    
    window.alert("Are you sure you fill correct details?");
    if(password.value == confirmPassword.value){
        window.alert("You are Registered Successfully!");
    }else{
        window.alert("Your password does not match.");
        return;
    }
}

//Give suggestion
function suggestion_btn(){
    document.write("Thanks for your suggestion. Your suggestion have been recorded.");
}

// Suggestion display in Best suggestion box
function suggestion(){
    var message = document.getElementById("feedback").value;
    document.getElementById("feedback-dispaly").innerHTML = message;
    return false;
}

//Password validation in signup page.
var password = document.getElementById("password");
var dispaly = document.getElementById("show");
password.onclick = function valid(){
    dispaly.innerHTML = "(minimum 8 digits password contains at least 1 capital letter, 1 small letter, 1 number and 1 special symbol = !@$_)";
    dispaly.style.fontSize ="15px";
    dispaly.style.color ="#e11010";
}
password.oninput = function valid(){
    const capital = /[A-Z]/g;
    const lower = /[a-z]/g;
    const number = /[0-9]/g;
    const symbol = /[@_$!]/;
    var pass = password.value;
    var result = pass.match(capital) && pass.match(lower) && pass.match(number) && pass.match(symbol) && pass.length >= 8 ? "Accepted" : "Not Accepted";
    dispaly.innerHTML = result;
    dispaly.style.fontSize ="15px";
    dispaly.style.color ="green";
    // dispaly.setAttribute("color","red");
}

var confirmPassword = document.getElementById("confirmPassword");
confirmPassword.oninput = function check(){
    var result = password.value == confirmPassword.value ? "Match" : "Doesn't match";
    var dispaly = document.getElementById("match");
    dispaly.innerHTML = result;
    dispaly.style.fontSize ="15px";
    dispaly.style.color ="green";
}

// signup page coding
var show_required = document.getElementsByClassName("show_required");
show_required.onclick = function apply(){
    window.alert("hgm");
    show_required.style.border = "2px solid red";
}
