const toTopButton = document.querySelector(".to-top");
const nav = document.getElementById("nav");

// Add scroll event listener
window.addEventListener("scroll", () => {
  // Check how far the user has scrolled (adjust 200px as needed)
  if (window.scrollY > 200) {
    toTopButton.classList.add("show");
    nav.classList.remove("show");
  } else {
    toTopButton.classList.remove("show");
    nav.classList.add("show");
  }
});
