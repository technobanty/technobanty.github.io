
// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.height = "100%";
  document.getElementById("myOverlay").style.height = "100%";
}

function w3_close() {
  document.getElementById("mySidebar").style.height = "none";
  document.getElementById("myOverlay").style.height = "none";
}
