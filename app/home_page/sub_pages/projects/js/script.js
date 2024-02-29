
// Like and dislike coding here.
let feedback = document.getElementsByClassName("feedback");
let count;
for(let i=0;i<feedback.length;i++){
    feedback[i].addEventListener('click',function(){
        this.setAttribute('style','color: #14AEA8');
        count = this.innerHTML;
        this.innerHTML = parseInt(count) + 1;
    });
}