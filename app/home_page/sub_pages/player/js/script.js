// Player scripting here.
let video_src = document.getElementById("video_src");
let dis_name = document.getElementById("dis_name");
let link = sessionStorage.getItem("link");
let yt_btn_link = sessionStorage.getItem("youtube");
let v_name = sessionStorage.getItem("name");
let youtube_link_btn = document.getElementById("youtube_link");
let description_btn = document.getElementById("description");
let arrow = document.getElementById("down_arrow");

video_src.src = link;
dis_name.innerHTML = v_name;
// video_src.setAttribute("src",link); 

youtube_link_btn.onclick = function (){
    document.location.href = yt_btn_link;
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