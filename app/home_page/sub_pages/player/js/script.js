// Player scripting here.
let video_src = document.getElementById("video_src");
let dis_name = document.getElementById("dis_name");
let link = sessionStorage.getItem("link");
let yt_btn_link = sessionStorage.getItem("youtube");
let v_name = sessionStorage.getItem("name");
let youtube_link_btn = document.getElementById("youtube_link");
let listsContainer = document.getElementById("listsContainer");

video_src.src = link;
dis_name.innerHTML = v_name;

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

// Create a lists of videos
const keys = Object.keys(localStorage);
let count=localStorage.length;
let k=0
for(let i=0;i<count;i++){
    if(keys[i].match("Video")=="Video"){
        createTag(i);
        k=k+1
    }
}

function createTag(i){
    const divTag=document.createElement("DIV");
    divTag.setAttribute("class","playlists")
    divTag.setAttribute("link",localStorage.getItem(localStorage.key(i)))
    const imgTag=document.createElement("IMG");
    imgTag.src="../../../all_files/logo/play-btn.png";
    const div=document.createElement("DIV");
    const h3Tag=document.createElement("H3");
    h3Tag.innerHTML=keys[i];
    const pTag=document.createElement("p");
    pTag.innerHTML="Video "+(k+1);

    //append tags
    listsContainer.appendChild(divTag);
    divTag.appendChild(imgTag);
    divTag.appendChild(div);
    div.appendChild(h3Tag);
    div.appendChild(pTag);
}
let lists=document.getElementsByClassName("playlists")
// video_src.setAttribute("src",link); 

for(let i=0; i<lists.length; i++){
    lists[i].addEventListener('click',function (){
        video_src.src = lists[i].getAttribute("link");
        dis_name.innerHTML = keys[i];
    })
}
