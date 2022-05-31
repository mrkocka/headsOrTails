let button = document.getElementById("button");

button.addEventListener("click", load);

function load() {
  document.getElementById("no").classList.remove("visit");
  document.getElementById("yes").classList.remove("visit");
  document.getElementById("load").classList.toggle("visit");
  setTimeout(clear, 1500);
}
function clear() {
  document.getElementById("load").classList.toggle("visit");
  setTimeout(fate, 300);
}

function fate() {
  let random = Math.floor(Math.random() * 2);

  if (random === 0) {
    document.getElementById("no").classList.toggle("visit");
  }

  if (random === 1) {
    document.getElementById("yes").classList.toggle("visit");
  }
}
