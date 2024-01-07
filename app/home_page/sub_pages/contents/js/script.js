// Contents scripting here.

let all_videos = document.getElementsByClassName("video");

for(let i=0; i<all_videos.length; i++){
        all_videos[i].addEventListener('click',function (){
                let link = this.getAttribute("link");
                document.location.href = "../player/player.html";
                sessionStorage.setItem("link",link);
        })
    }
// }