function turnOverlayOn(childElm) {
  const overlay = document.getElementById("overlay");
  overlay.appendChild(childElm.cloneNode(true));
  overlay.style.display = "flex";
}

function turnOverlayOff() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
  overlay.innerHTML = "";
}
