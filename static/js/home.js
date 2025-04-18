document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".artist-slide-track");
    const slides = document.querySelectorAll(".artist-slide");
    const prevBtn = document.querySelector(".artist-prev");
    const nextBtn = document.querySelector(".artist-next");
  
    let currentIndex = 0;
    const totalSlides = slides.length;
  
    function updateSlidePosition() {
      const slideWidth = slides[0].offsetWidth;
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlidePosition();
    });
  
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlidePosition();
    });
  
    // 자동 슬라이드 (선택 사항)
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlidePosition();
    }, 3000);
  });
  