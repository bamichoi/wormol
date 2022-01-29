const footer = document.getElementById("footer");

let timer = null;

const hideFooter = () => {
  footer.style.visibility = "hidden";
  footer.style.opacity = 0;
  if (timer !== null) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    footer.style.visibility = "visible";
    footer.style.opacity = 1;
  }, 150);
};

/* window.onscroll = (e) => {
  console.log("detected scrolling");
}; */

window.addEventListener("scroll", hideFooter);
