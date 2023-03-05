const button = document.querySelector(".button");
button.addEventListener("click", capitalFirstLetter);
button.addEventListener("click", getMessage);

function capitalFirstLetter() {
  const enterName = document.querySelector(".input__text").value;
  const correctName =
    enterName.substr(0, 1).toUpperCase() + enterName.slice(1).toLowerCase();
  correctName.trim(correctName);
  const outName = (document.querySelector(".chat__output_name").innerHTML =
    correctName);
}

function getMessage() {
  let enterMsg = document.querySelector(".chat__message").value;
  enterMsg = enterMsg.replace(/viagra/gi, "***");
  enterMsg = enterMsg.replace(/XXX/gi, "***");
  let outMsg = (document.querySelector(".chat__output_msg").innerHTML =
    enterMsg);
  const enterLink = document.querySelector(".input__link").value;
  document.querySelector(".chat__output_img").src = enterLink;
}
