// Contents scripting here.

let all_videos = document.getElementsByClassName("video");

for(let i=0; i<all_videos.length; i++){
        all_videos[i].addEventListener('click',function (){
                let link = this.getAttribute("link");
                let yt_btn_link = this.getAttribute("href");
                let v_name = this.getAttribute("alt");
                document.location.href = "../player/player.html";
                sessionStorage.setItem("youtube",yt_btn_link);
                sessionStorage.setItem("link",link);
                sessionStorage.setItem("name",v_name);
        })
}

// let all_videos_links = document.getElementsByClassName("video");
for(let i=0; i<all_videos.length; i++){
        localStorage.setItem(all_videos[i].getAttribute("alt")+" Video",all_videos[i].getAttribute("link"));
        // localStorage.setItem(all_videos[i].getAttribute("alt")+" Image",all_videos[i].getAttribute("src"));
}

