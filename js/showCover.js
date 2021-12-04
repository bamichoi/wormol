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

    const changeImg = () => setInterval( () => {
        changeImgIsRunning = true;
        coverImgs[pos].style.opacity = 0;
        console.log(coverImgs[pos], pos)
        pos = (pos + 1) % imgLen;
        coverImgs[pos].style.opacity = 1;
        console.log(coverImgs[pos], pos)
    }, 1500)

    id = changeImg();

    const handleMouseOut = () => {
        menu.style.opacity = 1;
        coverImgs[pos].style.opacity = 0;
        window.clearInterval(id)
    }

    title.addEventListener("mouseout", handleMouseOut);
    body.addEventListener("click", handleMouseOut)
    
}

const handleClick = () => {
    if ( changeImgIsRunning == true ){
        window.clearInterval(id);
        changeImgIsRunning = false;
    }
    else {
        handleMouseOver();
    }

}


title.addEventListener("mouseover", handleMouseOver);
title.addEventListener("click", handleClick)
