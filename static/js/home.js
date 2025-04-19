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

    // 캐러셀 이동을 업데이트하는 함수
    function updateCarousel() {
        const itemWidth = carouselItems[0].offsetWidth;  // 각 슬라이드의 너비를 가져옵니다.
        carouselTrack.style.transition = 'transform 0.3s ease'; // 슬라이드 전환 효과
        carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`; // 트랙 이동
    }

    // 다음 슬라이드로 이동
    function showNextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length; // 마지막 슬라이드에서 첫 번째로 돌아갑니다.
        updateCarousel();
    }

    // 이전 슬라이드로 이동
    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length; // 첫 번째 슬라이드에서 마지막으로 돌아갑니다.
        updateCarousel();
    }

    // 이전/다음 버튼에 이벤트 추가
    prevBtn.addEventListener('click', showPrevSlide);
    nextBtn.addEventListener('click', showNextSlide);

    // 창 크기 변경 시 캐러셀 업데이트
    window.addEventListener('resize', updateCarousel);

    // 자동 슬라이드 기능 시작
    function startAutoSlide() {
        autoSlideInterval = setInterval(showNextSlide, 4000); // 4초마다 자동으로 이동
    }

    // 자동 슬라이드 중지
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // 마우스 올리면 자동 슬라이드 중지, 마우스 벗어나면 재시작
    carouselTrack.addEventListener("mouseenter", stopAutoSlide);
    carouselTrack.addEventListener("mouseleave", startAutoSlide);

    // 터치(모바일 스와이프) 기능
    let startX = 0;
    let isDragging = false;

    // 터치 시작 시
    carouselTrack.addEventListener("touchstart", function (e) {
        startX = e.touches[0].clientX;
        isDragging = true;
        stopAutoSlide();  // 드래그 시작 시 자동 슬라이드 중지
    });

    // 터치 끝날 때
    carouselTrack.addEventListener("touchend", function (e) {
        if (!isDragging) return;
        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;

        // 충분히 드래그했을 때만 슬라이드 변경
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                showNextSlide(); // 왼쪽으로 스와이프: 다음 슬라이드
            } else {
                showPrevSlide(); // 오른쪽으로 스와이프: 이전 슬라이드
            }
        }

        isDragging = false;
        startAutoSlide(); // 드래그 후 자동 슬라이드 재시작
    });

    // 초기 캐러셀 업데이트
    updateCarousel();
    startAutoSlide(); // 자동 슬라이드 시작

});