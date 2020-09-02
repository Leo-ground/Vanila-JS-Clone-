const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

/*
function handleClick() {
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
  } else {
    title.className = "";   <---- if I create one more class in title.heml, can not react btn
  }
}
*/

/*
function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }                                               <---------too long
}
*/

function handleClick() {
  title.classList.toggle(CLICKED_CLASS); //<------toggle if exist classs remove or not add
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
