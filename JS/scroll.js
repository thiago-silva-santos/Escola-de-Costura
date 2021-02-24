
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1500) {
    toTop.classList.add("active");
    toTop.addEventListener('click', () => window.scrollTo({
        top: 0,
        behavior: 'smooth',
      }))
  } else {
    toTop.classList.remove("active");
  }
})

