document.addEventListener("DOMContentLoaded", function() {
    const showMoreBtn = document.getElementById("showMoreBtn");
    const slides = document.querySelectorAll("#teamSlides .team-slide");
    let expanded = false;
  
    showMoreBtn.addEventListener("click", function() {
      if (!expanded) {
        slides.forEach(slide => slide.style.display = "block");
        showMoreBtn.textContent = "Show Less";
        expanded = true;
      } else {
        slides.forEach((slide, index) => {
          slide.style.display = index < 4 ? "block" : "none";
        });
        showMoreBtn.textContent = "Show More";
        expanded = false;
      }
    });
  });
  