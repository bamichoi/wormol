const footer = document.getElementById("footer");

let timer = null;

const hideFooter = () => {
  footer.style.bottom = "-2rem";
  if (timer !== null) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    footer.style.bottom = "0.6rem";
  }, 150);
};

/* window.onscroll = (e) => {
  console.log("detected scrolling");
}; */

window.addEventListener("scroll", hideFooter);
