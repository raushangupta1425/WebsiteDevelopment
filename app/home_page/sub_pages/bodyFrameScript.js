
//header profile box coding.
$(document).ready(function(){
    $("#icon_photo,#icon_photo_2").click(function(){
        $("#profile_box").toggle(500);
    });
});

//header update box coding.
$(document).ready(function(){
    $("#edit_btn").click(function(){
        $("#update_box").toggle(500);
    });
});

let user_email_id = sessionStorage.getItem("userID");
let text_data = localStorage.getItem(user_email_id);
let obj_data = JSON.parse(text_data);

if(sessionStorage.getItem(user_email_id) != null){
    window.location.replace("../../../loginCode/login.html");
}else{
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
            profile_icon.style.display = "none";
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
    let icon_photo_2 = document.getElementById("icon_photo_2");

    profile_pic_area.style.backgroundImage = "url("+fileName+")";
    profile_pic_area.style.backgroundSize = "cover";
    profile_pic_area.style.backgroundPosition = "center";
    icon_photo.style.backgroundImage = "url("+fileName+")";
    icon_photo.style.backgroundSize = "cover";
    icon_photo.style.backgroundPosition = "center";
    icon_photo_2.style.backgroundImage = "url("+fileName+")";
    icon_photo_2.style.backgroundSize = "cover";
    icon_photo_2.style.backgroundPosition = "center";

    let user_icon = document.getElementById("user_icon");
    let user_icon_2 = document.getElementById("user_icon_2");
    let profile_icon = document.getElementById("profile_icon");
    if(obj_data.profilePic == null){
        profile_icon.style.display = "block";   
        user_icon.style.display = "block";       
        user_icon_2.style.display = "block";       
        pic_insert.style.display = "block";       
    }else{
        profile_icon.style.display = "none";
        user_icon.style.display = "none";
        user_icon_2.style.display = "none";
        pic_insert.style.display = "none";
    }
}

let myName = document.getElementById("myName");
let myNameMob = document.getElementById("myNameMob");
let disp_userName = document.getElementById("disp_userName");
let disp_email = document.getElementById("disp_email");
let disp_ph = document.getElementById("disp_ph");
let disp_dob = document.getElementById("disp_dob");

let birthDate = atob(obj_data.dob).split("-");

myName.innerHTML = atob(obj_data.name);
myNameMob.innerHTML = atob(obj_data.name);
disp_userName.innerHTML = atob(obj_data.userName);
disp_email.innerHTML = atob(obj_data.email);
disp_ph.innerHTML = atob(obj_data.mobileNumber);
disp_dob.innerHTML = birthDate[2]+"/"+birthDate[1]+"/"+birthDate[0];

let sign_out = document.getElementById("sign_out");
sign_out.onclick = function (){
    document.cookie = "name ="+user_email_id+";max-age=0; path=/";
    location.reload(0);
    window.location.replace("../../../../index.html");
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
let update_msg = document.getElementById("update_msg");
let changePasswordBtn = document.getElementById("changePassword_btn");
let updatePasswordBtn = document.getElementById("updatePassword_btn");
let changePassword = document.getElementById("changePassword");
let oldPassword = document.getElementById("oldPassword");
let oldPasswordInput = document.getElementById("oldPasswordInput");
let passwordCheckBtn = document.getElementById("passwordCheckBtn");
let newPasswordInput = document.getElementById("newPasswordInput");
let hr_line = document.getElementById("hr_line");
changePasswordBtn.onclick = function (){
    hr_line.style.visibility = "visible";
    oldPassword.style.display = "block";
    passwordCheckBtn.style.display = "block";
    changePasswordBtn.style.display = "none";
    oldPasswordInput.value = "";
};
passwordCheckBtn.onclick = function (){
    if(oldPasswordInput.value == atob(obj_data.password)){
        oldPassword.style.display = "none";
        changePassword.style.display = "block";
        passwordCheckBtn.style.display = "none";
        updatePasswordBtn.style.display = "block";
        newPasswordInput.value = "";
    }else{
        update_msg.style.display = "block";
        update_msg.style.color = "red";
        update_msg.innerHTML = "Wrong Password";
        setTimeout(() => {
            update_msg.style.display = "none";
        }, 2000);
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
            update_msg.style.display = "block";
            update_msg.style.color = "green";
            update_msg.innerHTML = "Password updated successfully  <i class='fa fa-check' aria-hidden='true'></i>";
            setTimeout(function(){
                update_msg.style.display = "none";
            },3000);
            updatePasswordBtn.style.display = "none";
            changePasswordBtn.style.display = "block";
            oldPassword.style.display = "none";
            hr_line.style.visibility = "hidden";
            changePassword.style.display = "none";
            passwordCheckBtn.style.display = "none";
            updateBox.style.display = "none";
            oldPasswordInput.value = "";
            newPasswordInput.value = "";
        }else{
            update_msg.style.display = "block";
            update_msg.style.color = "red";
            update_msg.innerHTML = "Minimum password length 8, contains at least 1 capital letter, 1 small letter, 1 number and 1 special symbol (!@$_)";
            newPasswordInput.value = "";
        }
    }    
}

// search coding here. pending
let filter = document.getElementById('filter');
let rows = document.getElementById('all');
filter.oninput = function (){
    alert()
    Search();
    function Search() {
        for (var i = 0; i < rows.length; i++) {
            // alert(rows.length)
            // if (rows[i].classList.contains(filter.value)) {
            //     rows[i].style.visibility = 'visible';
            // }
            // else {
            //     rows[i].style.visibility = 'collapse';
            // }
        }
    }
}

//footer coding
$(document).ready(function(){
    $("#quick_links").click(function(){
        $("#quick_items").toggle(500,function(){
            if($("#arrow_q").attr("class")=="fa fa-sort-desc fs-4 me-4 text-white position-absolute top-0 end-0 d-lg-none"){
                $("#arrow_q").attr("class","fa fa-sort-asc fs-4 me-4 text-white position-absolute top-50 end-0 d-lg-none");
                $("#quick_items").attr("class","text-white list-unstyled ps-4 d-lg-block");
            }
            else{
                $("#arrow_q").attr("class","fa fa-sort-desc fs-4 me-4 text-white position-absolute top-0 end-0 d-lg-none");
                $("#quick_items").attr("class","text-white list-unstyled ps-4 d-none d-lg-block");
            }
        });
    });
    $("#tutorial").click(function(){
        $("#tutorial_items").toggle(500,function(){
            if($("#arrow_t").attr("class")=="fa fa-sort-desc fs-4 me-4 text-white position-absolute top-0 end-0 d-lg-none"){
                $("#arrow_t").attr("class","fa fa-sort-asc fs-4 me-4 text-white position-absolute top-50 end-0 d-lg-none");
                $("#tutorial_items").attr("class","text-white list-unstyled ps-4 d-lg-block");
            }
            else{
                $("#arrow_t").attr("class","fa fa-sort-desc fs-4 me-4 text-white position-absolute top-0 end-0 d-lg-none");
                $("#tutorial_items").attr("class","text-white list-unstyled ps-4 d-none d-lg-block");
            }
        });
    });
});