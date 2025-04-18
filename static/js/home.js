document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    let autoSlideInterval;

    if (!prevBtn || !nextBtn || !carouselTrack || carouselItems.length === 0) {
        console.warn("캐러셀 요소가 없습니다. home.js 실행 중단");
        return;
    }

    function updateCarousel() {
        const itemWidth = carouselItems[0].offsetWidth;
        carouselTrack.style.transition = 'transform 0.3s ease';
        carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }

    prevBtn.addEventListener('click', showPrevSlide);
    nextBtn.addEventListener('click', showNextSlide);

    window.addEventListener('resize', updateCarousel);

    // ✅ 자동 슬라이드 기능
    function startAutoSlide() {
        autoSlideInterval = setInterval(showNextSlide, 4000); // 4초마다 자동 이동
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // 마우스 올리면 정지 / 벗어나면 재시작
    carouselTrack.addEventListener("mouseenter", stopAutoSlide);
    carouselTrack.addEventListener("mouseleave", startAutoSlide);

    // ✅ 터치(모바일 스와이프) 기능
    let startX = 0;
    let isDragging = false;

    carouselTrack.addEventListener("touchstart", function (e) {
        startX = e.touches[0].clientX;
        isDragging = true;
        stopAutoSlide();
    });

    carouselTrack.addEventListener("touchend", function (e) {
        if (!isDragging) return;
        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;

        if (Math.abs(diffX) > 50) { // 드래그 거리 조건
            if (diffX > 0) {
                showNextSlide(); // 왼쪽 → 다음
            } else {
                showPrevSlide(); // 오른쪽 → 이전
            }
        }

        isDragging = false;
        startAutoSlide();
    });

    updateCarousel();
    startAutoSlide(); // 시작 시 자동 슬라이드 작동
});