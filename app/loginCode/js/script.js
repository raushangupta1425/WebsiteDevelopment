// Secure URL
// history.pushState("null","null","hii wel");

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
let disp = document.getElementById("disp");
newPassword.onclick = function (){
    disp.innerHTML = "(minimum 8 digits password contains at least 1 capital letter, 1 small letter, 1 number and 1 special symbol = !@$_)";
    disp.style.fontSize ="15px";
    disp.style.color ="#e11010";
}
newPassword.oninput = function (){
    const capital = /[A-Z]/g;
    const lower = /[a-z]/g;
    const number = /[0-9]/g;
    const symbol = /[@_$!]/;
    let pass = newPassword.value;
    let result = pass.match(capital) && pass.match(lower) && pass.match(number) && pass.match(symbol) && pass.length >= 8 ? "Accepted" : "Not Accepted";
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
}

let confirmPassword = document.getElementById("con_pass");
let show = document.getElementById("show");
confirmPassword.oninput = function check(){
    let result = newPassword.value == confirmPassword.value ? "Match" : "Doesn't match";
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

//New user registration
/* Start storeing signup data */
let signup_frm = document.getElementById("signup_frm");
let message = document.getElementById("message");
let checkEmail = document.getElementById("email");
let emailExist = document.getElementById("exist");
let reg_btn = document.getElementById("reg_btn");
checkEmail.onchange = function (){
    let fetchedData = localStorage.getItem(btoa(checkEmail.value));
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
        }
    }
}
signup_frm.onsubmit = function (){
    if(newPassword.value == confirmPassword.value){
        var userData = {
            name: btoa(document.getElementById("name").value),
            dob: btoa(document.getElementById("dob").value),
            email: btoa(document.getElementById("email").value),
            mobileNumber: btoa(document.getElementById("ph").value),
            userName: btoa(document.getElementById("userName").value),
            password: btoa(document.getElementById("newPassword").value),
        }
    }else{
        let error_msg = document.getElementById("error_msg");
        error_msg.style.display = "block";
        error_msg.innerHTML = "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i> Password doesn't match !";
        error_msg.style.color = "red";
        confirmPassword.style.border = "2px solid red";
        confirmPassword.onclick = function (){
            confirmPassword.value = "";
            confirmPassword.style.border = "none";
            error_msg.style.display = "none";
        }
        return false;
    }
    
    let text_data = JSON.stringify(userData);
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
    let loginId = btoa(document.getElementById("loginId").value);
    let loginPassword = btoa(document.getElementById("loginPassword").value);
    let text_data = localStorage.getItem(loginId);
    let obj_data = JSON.parse(text_data);
    if(localStorage.getItem(loginId) != null){
        if(loginPassword == obj_data.password){
            sessionStorage.setItem("userID",loginId);
            window.location.replace("../../home_page/homepage.html");
        }else{
            let wrong_pass = document.getElementById("wrong_pass");
            wrong_pass.innerHTML = "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i> Wrong Password!";
            wrong_pass.style.color = "red";
            loginPassword.style.border = "2px solid red";
            loginPassword.onclick = function (){
                loginPassword = "";
                loginPassword.style.border = "none";
                wrong_pass.style.display = "none";
            }
            return false;
        }
    }else{
        let err = document.getElementById("exist");
        err.innerHTML = "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i> Email id not registered!";
        err.style.color = "red";
        loginId.style.border = "2px solid red";
        loginId.onclick = function (){
            loginId = "";
            loginId.style.border = "none";
            err.style.display = "none";
        }
        return false;
    }
    return false;
}
/* End login Authentication with database. */
