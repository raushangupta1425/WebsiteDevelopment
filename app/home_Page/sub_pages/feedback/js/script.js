//Give suggestion
let suggData = document.getElementById("feedback");
let emailId = sessionStorage.getItem("userID");
var textData = localStorage.getItem(emailId);
var objData = JSON.parse(textData);
function suggestion_btn(){
    objData.suggestion = btoa(suggData.value);
    localStorage.setItem(emailId,JSON.stringify(objData));
    document.write("Thanks for your suggestion. Your suggestion have been recorded.");
}

// Suggestion display in Best suggestion box
let userName = document.getElementById("userName");
window.onload = function (){
    var message = atob(objData.suggestion);
    document.getElementById("userName").innerHTML = atob(objData.name);
    document.getElementById("feedback-dispaly").innerHTML = message;
    return false;
}