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
        const itemWidth = carouselItems[0].offsetWidth; // 각 이미지의 너비를 가져옵니다.
        carouselTrack.style.transition = 'transform 0.3s ease'; // 슬라이드 이동 애니메이션 적용
        carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`; // 트랙을 이동시킵니다.
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length; // 마지막 슬라이드 다음에는 첫 번째 슬라이드로 돌아가도록
        updateCarousel();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length; // 첫 번째 슬라이드 이전에는 마지막 슬라이드로 돌아가도록
        updateCarousel();
    }

    prevBtn.addEventListener('click', showPrevSlide); // 이전 버튼 클릭 시
    nextBtn.addEventListener('click', showNextSlide); // 다음 버튼 클릭 시

    window.addEventListener('resize', updateCarousel); // 화면 크기 변경 시 캐러셀 업데이트

    // ✅ 자동 슬라이드 기능
    function startAutoSlide() {
        autoSlideInterval = setInterval(showNextSlide, 4000); // 4초마다 자동으로 슬라이드
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval); // 자동 슬라이드 중지
    }

    // 마우스 올리면 자동 슬라이드 정지 / 벗어나면 자동 슬라이드 재시작
    carouselTrack.addEventListener("mouseenter", stopAutoSlide);
    carouselTrack.addEventListener("mouseleave", startAutoSlide);

    // ✅ 터치(모바일 스와이프) 기능
    let startX = 0;
    let isDragging = false;

    carouselTrack.addEventListener("touchstart", function (e) {
        startX = e.touches[0].clientX; // 터치 시작 위치
        isDragging = true;
        stopAutoSlide();
    });

    carouselTrack.addEventListener("touchend", function (e) {
        if (!isDragging) return;
        const endX = e.changedTouches[0].clientX; // 터치 끝 위치
        const diffX = startX - endX;

        if (Math.abs(diffX) > 50) { // 드래그 거리 조건
            if (diffX > 0) {
                showNextSlide(); // 왼쪽 → 다음 슬라이드
            } else {
                showPrevSlide(); // 오른쪽 → 이전 슬라이드
            }
        }

        isDragging = false;
        startAutoSlide();
    });

    updateCarousel(); // 페이지 로딩 시 캐러셀 업데이트
    startAutoSlide(); // 자동 슬라이드 시작
});