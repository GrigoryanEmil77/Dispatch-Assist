function toggleNav() {
  let nav = document.getElementById("navbarNav");
  nav.classList.toggle("show");
}

window.onscroll = function () {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("fixed-navbar");
  } else {
    navbar.classList.remove("fixed-navbar");
  }
};

const parentContainer = document.querySelector(".read-more-container");
parentContainer.addEventListener("click", (event) => {
  const current = event.target;
  const isReadMoreBtn = current.className.includes("read-more");
  if (!isReadMoreBtn) return;
  const currentText = event.target.parentNode.querySelector(".read-more-text");
  currentText.classList.toggle("read-more-text--show");
  current.textContent = current.textContent.includes("Read More")
    ? "Read Less..."
    : "Read More";
});

function toggleReadMore(id) {
  let reviewText = document.getElementById(id);
  let btn = reviewText.nextElementSibling;

  if (reviewText.classList.contains("expanded")) {
    reviewText.classList.remove("expanded");
    reviewText.innerHTML = reviewText.getAttribute("data-short-text");
    btn.textContent = "Read More";
  } else {
    reviewText.classList.add("expanded");
    reviewText.setAttribute("data-short-text", reviewText.innerHTML);
    btn.textContent = "Read Less";
  }
}
