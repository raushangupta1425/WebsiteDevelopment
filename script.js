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