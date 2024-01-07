// Player scripting here.
let video_src = document.getElementById("video_src");
let link = sessionStorage.getItem("link");
let youtube_link_btn = document.getElementById("youtube_link");
let description_btn = document.getElementById("description");
let arrow = document.getElementById("down_arrow");

video_src.src = link;
// video_src.setAttribute("src",link); 

youtube_link_btn.onclick = function (){
    document.location.href = link;
}

$(document).ready(function (){
    $("#description_box").click(function (){
        $("#description").toggle(500,function(){
            if($("#down_arrow").attr("class") == "fa fa-chevron-down"){
                $("#down_arrow").attr("class","fa fa-chevron-up");
            }else{
                $("#down_arrow").attr("class","fa fa-chevron-down");
            }
        });
    });
});