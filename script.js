const button = document.getElementById("submit-button");
const picSrc = document.getElementById("image-input");
const topTextInput = document.getElementById("top-text");
const bottomTextInput = document.getElementById("bottom-text");
const memeHolder = document.getElementById("meme-holder");

//submit button- adds div and elements to create meme on page
button.onclick = function() {
  let div = document.createElement("div");
  let append = memeHolder.appendChild(div);
  append.innerHTML = `<div class="meme">
    <button class="delete-button"> X </button>
      <h2 class="top-line meme-text">${topTextInput.value}</h2>
      <img class="pic" src="${picSrc.value}">
      <h2 class="bottom-line meme-text">${bottomTextInput.value}</h2>
  </div>`;
  topTextInput.value = "";
  bottomTextInput.value = "";
  picSrc.value = "";
};

//delete-button: if whats clicked on is delete button then delete the meme
document.addEventListener(
  "click",
  function(e) {
    e = e || window.event;
    let target = e.target || e.srcElement;
    if (target.className === "delete-button") {
      target.parentNode.remove();
    }
  },
  false
);
