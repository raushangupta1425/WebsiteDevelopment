/* Start styling functionality */
let createAccount_btn = document.getElementById("register");
let login_box = document.getElementById("login");
let signup_box = document.getElementById("signup");
createAccount_btn.onclick = function (){
    login_box.style.display = "none";
    signup_box.style.display = "block";
}

let signin_btn = document.getElementById("signin");
signin_btn.onclick = function (){
    signup_box.style.display = "none";
    login_box.style.display = "block";
    message.innerHTML = "";
}
/*  End styling functionality */

/* Start password validation in signup page.*/
let newPassword = document.getElementById("newPassword");
var disp = document.getElementById("disp");
newPassword.onclick = function (){
    disp.innerHTML = "(minimum 8 digits password contains at least 1 capital letter, 1 small letter, 1 number and 1 special symbol = !@$_)";
    disp.style.fontSize ="15px";
    disp.style.color ="#e11010";
}
newPassword.oninput = function validPassword(){
    const capital = /[A-Z]/g;
    const lower = /[a-z]/g;
    const number = /[0-9]/g;
    const symbol = /[@_$!]/;
    var pass = newPassword.value;
    var result = pass.match(capital) && pass.match(lower) && pass.match(number) && pass.match(symbol) && pass.length >= 8 ? "Accepted" : "Not Accepted";
    disp.innerHTML = result;
    disp.style.fontSize ="15px";
    disp.style.color ="#ffffff";

    if(result == "Not Accepted"){
        reg_btn.disabled = true;
        reg_btn.style.background = "#ccc";
    }else{
        reg_btn.disabled = false;
        reg_btn.style.background = "linear-gradient(45deg, #000000, #14AEA8)";
    }
    
    setTimeout(function(){
        if(newPassword.value == ""){
            disp.innerHTML = "";
        }
    },10);
    validPassword();
}

let confirmPassword = document.getElementById("con_pass");
var show = document.getElementById("show");
confirmPassword.oninput = function check(){
    var result = newPassword.value == confirmPassword.value ? "Match" : "Doesn't match";
    show.innerHTML = result;
    show.style.color = "red";
    show.style.fontWeight = "bold";
    setTimeout(function(){
        if(confirmPassword.value == ""){
            show.innerHTML = "";
        }
    },10);
}
/* End password validation in signup page.*/

/* Start storeing signup data */
let signup_frm = document.getElementById("signup_frm");
var message = document.getElementById("message");
var checkEmail = document.getElementById("email");
var emailExist = document.getElementById("exist");
var reg_btn = document.getElementById("reg_btn");
checkEmail.onchange = function valid(){
    var fetchedData = localStorage.getItem(checkEmail.value);
    if(fetchedData != null ){
        emailExist.style.display = "block";
        emailExist.innerHTML = "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i> Email Id already exist..";
        emailExist.style.color = "red";
        checkEmail.style.border = "2px solid red";
        reg_btn.disabled = true;
        reg_btn.style.background = "#ccc";
        checkEmail.onclick = function (){
            checkEmail.value = "";
            emailExist.style.display = "none";
            checkEmail.style.border = "none";
            reg_btn.disabled = false;
            reg_btn.style.background = "linear-gradient(45deg, #000000, #14AEA8)";
            valid();
        }
    }
}
signup_frm.onsubmit = function (){
    if(newPassword.value == confirmPassword.value){
        var userData = {
            name: document.getElementById("name").value,
            dob: document.getElementById("dob").value,
            email: document.getElementById("email").value,
            mobileNumber: document.getElementById("ph").value,
            userName: document.getElementById("userName").value,
            password: document.getElementById("newPassword").value,
        }
    }else{
        window.alert("Password doesn't match ! Please signup again with same password and confirm password.");
        return false;
    }
    
    var text_data = JSON.stringify(userData);
    localStorage.setItem(userData.email,text_data);
    message.innerHTML = "You Registered Successfully ! Now you can signin.";
    message.style.color = "green";
    setTimeout(function(){
        signup_frm.reset();
        show.innerHTML = "";
        disp.innerHTML = "";
    },100);
    return false;
}
/* End storeing signup data */

/* Start login Authentication with database. */
let login_frm = document.getElementById("login_frm");
login_frm.onsubmit = function (){
    var loginId = document.getElementById("loginId").value;
    var loginPassword = document.getElementById("loginPassword").value;
    var text_data = localStorage.getItem(loginId);
    var obj_data = JSON.parse(text_data);
    if(localStorage.getItem(loginId) != null){
        if(loginPassword == obj_data.password){
            window.alert("Welcome back "+obj_data.name+" !");
            window.location.assign("../index.html");
        }else{
            window.alert("Wrong Password");
        }
    }else{
        window.alert("Data not found");
    }
}
/* End login Authentication with database. */
