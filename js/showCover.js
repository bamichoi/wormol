const title = document.querySelector(".nav__title");
const coverImgs = document.getElementsByClassName("cover_img");
const coverImg = document.querySelector(".cover_img");
const imgLen = coverImgs.length;
const menu = document.querySelector(".nav__menu");
const body = document.querySelector("body");


let pos = 0;
let changeImgIsRunning = false;
let id = null;

const handleMouseOver = () => {
    coverImgs[pos].style.opacity = 1;
    menu.style.opacity = 0;

    clearInterval();
    if (changeImgIsRunning == false) {
        changeImgIsRunning = true;
        const changeImg = () => setInterval( () => {
            coverImgs[pos].style.opacity = 0;
            pos = (pos + 1) % imgLen;
            coverImgs[pos].style.opacity = 1;
        }, 1500)
    
        id = changeImg();
    }
    
    const handleMouseOut = () => {
        if (changeImgIsRunning == true) {
            menu.style.opacity = 1;
            coverImgs[pos].style.opacity = 0;
            changeImgIsRunning = false
            clearInterval(id)
            location.reload();
        }
        
    }

    title.addEventListener("mouseout", handleMouseOut);
    body.addEventListener("touchstart", handleMouseOut)
    
}

const handleClick = () => {
    if ( changeImgIsRunning == true ){
        clearInterval(id);
        changeImgIsRunning = false;
    }
    else {
        handleMouseOver();
    }

}


title.addEventListener("mouseover", handleMouseOver);
title.ontouchstart = handleMouseOver
//title.addEventListener("click", handleClick)