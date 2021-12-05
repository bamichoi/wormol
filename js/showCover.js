const title = document.querySelector(".nav__title");
const coverImgs = document.getElementsByClassName("cover_img");
const coverImg = document.querySelector(".cover_img");
const imgLen = coverImgs.length;
const menu = document.querySelector(".nav__menu");
const body = document.querySelector("body");


let pos = 0;
let changeImgIsRunning = false;
let id = null;

const handleMouseOver = (e) => {
    title.removeEventListener("touchend", handleMouseOver);
    console.log(e.type);
    coverImgs[pos].style.opacity = 1;
    menu.style.opacity = 0;

    if (changeImgIsRunning == false) {
        changeImgIsRunning = true;
        const changeImg = () => setInterval( () => {
            coverImgs[pos].style.opacity = 0;
            pos = (pos + 1) % imgLen;
            coverImgs[pos].style.opacity = 1;
        }, 1500)
        id = changeImg();
    }

    const handleMouseOut = (e) => {
        console.log(e.type);
        if (changeImgIsRunning == true) {
            menu.style.opacity = 1;
            coverImgs[pos].style.opacity = 0;
            changeImgIsRunning = false
            clearInterval(id)
            title.addEventListener("touchend", handleMouseOver);
        }
    }
    title.addEventListener("mouseout", handleMouseOut);
    title.addEventListener("touchend", handleMouseOut);
}

const handleClick = (e) => {
    console.log(e.type);
    if ( changeImgIsRunning == true ){
        clearInterval(id);
        changeImgIsRunning = false;
    }
    else {
        handleMouseOver();
    }

}


title.addEventListener("mouseover", handleMouseOver);
title.addEventListener("touchend", handleMouseOver);
