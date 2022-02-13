const enBtn = document.querySelector(".en_button");
const itBtn = document.querySelector(".it_button");
const itText = document.querySelector(".ita");
const enText = document.querySelector(".en");

let currentLang = "it";

const toggleLang = (e) => {
  const { value } = e.target;
  if (currentLang == value) {
    return;
  } else {
    if (currentLang == "it") {
      itText.style.display = "none";
      itBtn.style.color = "black";
      enText.style.display = "flex";
      enBtn.style.color = "white";
      currentLang = "en";
    } else {
      enText.style.display = "none";
      enBtn.style.color = "black";
      itText.style.display = "flex";
      itBtn.style.color = "white";
      currentLang = "it";
    }
  }
};

enBtn.addEventListener("click", toggleLang);
itBtn.addEventListener("click", toggleLang);
