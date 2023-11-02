let user_icon = document.getElementById("user_icon");
let profile_box = document.getElementById("profile_box");
let updateBox = document.getElementById("update_box");
let box_menu = document.getElementById("box_menu");
let body_area = document.querySelector("body");

user_icon.onclick = function (){
    profile_box.style.display = "block";
}
body_area.ondblclick = function (){
    profile_box.style.display = "none";
    updateBox.style.display = "none";
}

let user_email_id = sessionStorage.getItem("userID");
let text_data = localStorage.getItem(user_email_id);
let obj_data = JSON.parse(text_data);

if(sessionStorage.getItem(user_email_id) != null){
    window.location.replace("../LoginCode/login.html");
}else{
    let wlc_msg = document.getElementById("wlc_msg");
    wlc_msg.innerHTML = "Welcome back "+atob(obj_data.name)+" !";
    setTimeout(function (){
        wlc_msg.style.display = "none";
    },3000);

    let pic_insert = document.getElementById("pic_insert");
    pic_insert.onchange = function (){
        let reader = new FileReader();
        reader.readAsDataURL(pic_insert.files[0]);
        reader.onload = function (){
            let filename = reader.result;
            let profile_pic_area = document.getElementById("profile_pic");
            profile_pic_area.style.backgroundImage = "url("+filename+")";
            profile_pic_area.style.backgroundSize = "cover";
            profile_pic_area.style.backgroundPosition = "center";
            let profile_icon = document.getElementById("profile_icon");
            let upload_icon = document.getElementById("upload_icon");
            profile_icon.style.display = "none";
            upload_icon.style.display = "none";
            obj_data.profilePic = filename;
            localStorage.setItem(user_email_id,JSON.stringify(obj_data));
            location.reload();
        }
    }
}

window.onload = function (){
    let fileName = obj_data.profilePic;
    let profile_pic_area = document.getElementById("profile_pic");
    let icon_photo = document.getElementById("icon_photo");

    profile_pic_area.style.backgroundImage = "url("+fileName+")";
    profile_pic_area.style.backgroundSize = "cover";
    profile_pic_area.style.backgroundPosition = "center";
    icon_photo.style.backgroundImage = "url("+fileName+")";
    icon_photo.style.backgroundSize = "cover";
    icon_photo.style.backgroundPosition = "center";

    let profile_icon = document.getElementById("profile_icon");
    let upload_icon = document.getElementById("upload_icon");
    if(obj_data.profilePic == null){
        profile_icon.style.display = "block";
        upload_icon.style.display = "block";            
        user_icon.style.display = "block";       
        pic_insert.style.display = "block";       
    }else{
        profile_icon.style.display = "none";
        upload_icon.style.display = "none";
        user_icon.style.display = "none";
        pic_insert.style.display = "none";
    }
    icon_photo.onclick = function(){
        profile_box.style.display = "block";
    }
}

let disp_name = document.getElementById("disp_name");
let disp_userName = document.getElementById("disp_userName");
let disp_email = document.getElementById("disp_email");
let disp_ph = document.getElementById("disp_ph");
let disp_dob = document.getElementById("disp_dob");

disp_name.innerHTML += atob(obj_data.name);
disp_userName.innerHTML += atob(obj_data.userName);
disp_email.innerHTML += atob(obj_data.email);
disp_ph.innerHTML += atob(obj_data.mobileNumber);
disp_dob.innerHTML += atob(obj_data.dob);

let sign_out = document.getElementById("sign_out");
sign_out.onclick = function (){
    document.cookie = "name ="+user_email_id+";max-age=0; path=/";
    location.reload(0);
    window.location.replace("../index.html");
}

let editBtn = document.getElementById("edit_btn");
editBtn.onclick = function (){
    updateBox.style.display = "block";
}

// Update user information
let updatedName = document.getElementById("updatedName");
let updatedUsername = document.getElementById("updatedUsername");
let updatedMob = document.getElementById("updatedMob");
let updatedDOB = document.getElementById("updatedDOB");
let updateForm = document.getElementById("updateForm");

let update_pic_insert = document.getElementById("update_pic_insert");
update_pic_insert.onchange = function (){
    let reader = new FileReader();
    reader.readAsDataURL(update_pic_insert.files[0]);
    reader.onload = function (){
        let filename = reader.result;
        let profile_pic_area = document.getElementById("update_pic");
        profile_pic_area.style.backgroundImage = "url("+filename+")";
        profile_pic_area.style.backgroundSize = "cover";
        profile_pic_area.style.backgroundPosition = "center";
        let profile_icon = document.getElementById("update_profile_icon");
        let upload_icon = document.getElementById("update_upload_icon");
        profile_icon.style.display = "none";
        upload_icon.style.display = "none";
        obj_data.profilePic = filename;
        localStorage.setItem(user_email_id,JSON.stringify(obj_data));
    }
}
updateForm.onsubmit = function (){
    if(updatedName.value != ""){
        obj_data.name = btoa(updatedName.value);
        localStorage.setItem(user_email_id,JSON.stringify(obj_data));
    }
    if(updatedUsername.value != ""){
        obj_data.userName = btoa(updatedUsername.value);
        localStorage.setItem(user_email_id,JSON.stringify(obj_data));
    }
    if(updatedMob.value != ""){
        obj_data.mobileNumber = btoa(updatedMob.value);
        localStorage.setItem(user_email_id,JSON.stringify(obj_data));
    }
    if(updatedDOB.value != ""){
        obj_data.dob = btoa(updatedDOB.value);
        localStorage.setItem(user_email_id,JSON.stringify(obj_data));
    }
}
    
// Change Password
let changePasswordBtn = document.getElementById("changePassword_btn");
let updatePasswordBtn = document.getElementById("updatePassword_btn");
let changePassword = document.getElementById("changePassword");
let oldPassword = document.getElementById("oldPassword");
let oldPasswordInput = document.getElementById("oldPasswordInput");
let passwordCheckBtn = document.getElementById("passwordCheckBtn");
let newPasswordInput = document.getElementById("newPasswordInput");
let hr_line = document.getElementById("hr_line");
changePasswordBtn.onclick = function (){
    oldPassword.style.visibility = "visible";
    hr_line.style.visibility = "visible";
    passwordCheckBtn.style.display = "block";
    changePasswordBtn.style.display = "none";
}
passwordCheckBtn.onclick = function (){
    if(oldPasswordInput.value == atob(obj_data.password)){
        oldPassword.style.display = "none";
        changePassword.style.display = "block";
        updatePasswordBtn.style.display = "block";
    }else{
        alert("wrong Password");
        oldPasswordInput.value = "";
    }
}
updatePasswordBtn.onclick = function (){
    if(newPasswordInput.value != ""){
        const capital = /[A-Z]/g;
        const lower = /[a-z]/g;
        const number = /[0-9]/g;
        const symbol = /[@_$!]/;
        let pass = newPasswordInput.value;
        let result = pass.match(capital) && pass.match(lower) && pass.match(number) && pass.match(symbol) && pass.length >= 8 ? "Accepted" : "Not Accepted";
        if(result == "Accepted"){
            obj_data.password = btoa(newPasswordInput.value);
            localStorage.setItem(user_email_id,JSON.stringify(obj_data));
            updatePasswordBtn.style.display = "none";
            changePasswordBtn.style.display = "block";
            oldPassword.style.display = "block";
            oldPassword.style.visibility = "hidden";
            changePassword.style.display = "none";
            passwordCheckBtn.style.display = "none";
            updateBox.style.display = "none";
            oldPasswordInput.value = "";
            newPasswordInput.value = "";
        }else{
            alert("(minimum 8 digits password contains at least 1 capital letter, 1 small letter, 1 number and 1 special symbol = !@$_)");
            newPasswordInput.value = "";
        }
    }    
}