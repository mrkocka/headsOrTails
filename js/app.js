let button = document.getElementById("js-button");

button.addEventListener("click", loade);

function loade() {
  document.getElementById("js-no").style.display = "none";
  document.getElementById("js-yes").style.display = "none";
  document.getElementById("js-loade").style.display = "block";
  setTimeout(delet, 1500);

  function delet() {
    document.getElementById("js-loade").style.display = "none";

    setTimeout(fate, 300);
  }

  function fate() {
    let random = Math.floor(Math.random() * 2);
    console.log(random);

    if (random === 0) {
      document.getElementById("js-no").style.display = "block";
      console.log("NO");
    }

    if (random === 1) {
      document.getElementById("js-yes").style.display = "block";
      console.log("YES");
    }
  }
}
