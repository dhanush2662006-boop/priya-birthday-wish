const modal = document.getElementById("letterModal");
const openButton = document.getElementById("openLetter");
const closeButton = document.getElementById("closeLetter");
const backdrop = document.getElementById("closeBackdrop");

function openLetter() {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  closeButton.focus();
}
function closeLetter() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  openButton.focus();
}
openButton.addEventListener("click", openLetter);
closeButton.addEventListener("click", closeLetter);
backdrop.addEventListener("click", closeLetter);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("show")) closeLetter();
});

// Gentle floating sparkles; no external image files are required.
const sparkleLayer = document.querySelector(".sparkles");
const symbols = ["✦", "✧", "♡", "·"];
for (let i = 0; i < 24; i++) {
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  sparkle.textContent = symbols[i % symbols.length];
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.animationDuration = `${12 + Math.random() * 15}s`;
  sparkle.style.animationDelay = `${Math.random() * -24}s`;
  sparkle.style.fontSize = `${9 + Math.random() * 13}px`;
  sparkleLayer.appendChild(sparkle);
}
