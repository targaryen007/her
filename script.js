function createHeart(){
const heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";
heart.style.animationDuration=
(5+Math.random()*5)+"s";

document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);
}

setInterval(createHeart,500);
