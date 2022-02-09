const inputRange = document.querySelectorAll("input[type='range']");
const img = document.querySelector("img");
const none = document.getElementById("none");
const numbers = document.getElementsByClassName("numbers");
const dsX = document.getElementById("ds-x");
const dsY = document.getElementById("ds-y");
const dsBlur = document.getElementById("ds-blur");
const dsColor = document.getElementById("ds-color");

function showCSSText() {
  document.getElementById("cssText").innerText = `#img {
              ${img.style.cssText}
         }`;
}

showCSSText();

for (const number of numbers) {
  number.addEventListener("change", () => {
    img.style.filter = `drop-shadow(${dsX.value}px ${dsY.value}px ${dsBlur.value}px ${dsColor.value})`;
    showCSSText();
  });
}


none.addEventListener("click", function () {
  if (none.checked) {
    img.style.filter = "none";
  }
  showCSSText();
});

for (const changedInputItem of inputRange) {
  changedInputItem.addEventListener("change", () => {
    if (
      changedInputItem.id === "brightness" ||
      changedInputItem.id === "grayscale" ||
      changedInputItem.id === "contrast" ||
      changedInputItem.id === "saturate" ||
      changedInputItem.id === "opacity" ||
      changedInputItem.id === "invert" ||
      changedInputItem.id === "sepia"
    ) {
      img.style.filter = `${changedInputItem.id}(${changedInputItem.value}%)`;
    } else if (changedInputItem.id === "blur") {
      img.style.filter = `${changedInputItem.id}(${changedInputItem.value}px)`;
    } else if (changedInputItem.id === "hue-rotate") {
      img.style.filter = `${changedInputItem.id}(${changedInputItem.value}deg)`;
    }

    showCSSText();
  });
}
