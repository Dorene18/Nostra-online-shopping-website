function closeBanner() {
  document.querySelector(".top-banner").style.display = "none";
}
function stayHere() {
  alert("You're already on the Home page!");
}
const slides = document.querySelectorAll(".carousel img");
    let current = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
          slide.classList.add("active");
        }
      });
    }

    function nextSlide() {
      current = (current + 1) % slides.length;
      showSlide(current);
    }

    function prevSlide() {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    }

document.getElementById("mostWantedBtn").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("mostWanted").classList.add("active");
});

document.getElementById("closePanel").addEventListener("click", function () {
  document.getElementById("mostWanted").classList.remove("active");
});

