document.addEventListener("DOMContentLoaded", function () {
    // 탭 버튼 처리
    const day1Tab = document.getElementById("day1-tab");
    const day2Tab = document.getElementById("day2-tab");
    const revealTab = document.getElementById("reveal-tab");
    const day1Content = document.getElementById("day1-content");
    const day2Content = document.getElementById("day2-content");
    const revealContent = document.getElementById("reveal-content");
  
    day1Tab.addEventListener("click", () => {
      day1Tab.classList.add("active");
      day2Tab.classList.remove("active");
      revealTab.classList.remove("active");
      day1Content.classList.add("active");
      day2Content.classList.remove("active");
      revealContent.classList.remove("active");
    });
  
    day2Tab.addEventListener("click", () => {
      day2Tab.classList.add("active");
      day1Tab.classList.remove("active");
      revealTab.classList.remove("active");
      day2Content.classList.add("active");
      day1Content.classList.remove("active");
      revealContent.classList.remove("active");
    });
  
    revealTab.addEventListener("click", () => {
      revealTab.classList.add("active");
      day1Tab.classList.remove("active");
      day2Tab.classList.remove("active");
      revealContent.classList.add("active");
      day1Content.classList.remove("active");
      day2Content.classList.remove("active");
    });
  
    // 캐러셀 기능 (Day 1, 2 공통)
    const carousels = document.querySelectorAll(".carousel");
  
    carousels.forEach((carousel) => {
      const track = carousel.querySelector(".carousel-track");
      const items = carousel.querySelectorAll(".carousel-item");
      const prev = carousel.querySelector(".carousel-prev");
      const next = carousel.querySelector(".carousel-next");
      let index = 0;
  
      function updateCarousel() {
        const width = items[0].offsetWidth;
        track.style.transform = `translateX(-${index * width}px)`;
      }
  
      next.addEventListener("click", () => {
        index = (index + 1) % items.length;
        updateCarousel();
      });
  
      prev.addEventListener("click", () => {
        index = (index - 1 + items.length) % items.length;
        updateCarousel();
      });
  
      window.addEventListener("resize", updateCarousel);
      updateCarousel();
    });
  });
  