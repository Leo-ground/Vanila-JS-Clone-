const title = document.querySelector("#title");

/*
function handleResize() {
  console.log("I have been resized");
}

window.addEventListener("resize", handleResize);  <---when I resize, ation
window.addEventListener("resize", handleResize()); <-----automatically action
*/

function handleclick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleclick);
