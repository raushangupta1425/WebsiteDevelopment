var codeArea = document.getElementById("code");
var btn_1 = document.getElementById("btn-1");
var btn_2 = document.getElementById("btn-2");
var result = document.getElementById("result");
var searchBox = document.getElementById("search-box");

btn_1.onclick = function run_code(){
    var code = codeArea.value;
    result.innerHTML = code;
    codeArea.style.display = "none";
    result.style.display = "block";
    result.setAttribute("class","animate__animated animate__slideInRight");
}
btn_2.onclick = function back(){
    result.style.display = "none";
    codeArea.style.display = "block";
    codeArea.setAttribute("class","animate__animated animate__slideInLeft");
}

searchBox.oninput = function search(){
    var search_data = searchBox.value;
    var code = codeArea.value;
    code.match(search_data) /*? highlight data : "Data not found";*/
}
