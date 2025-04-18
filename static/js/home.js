document.addEventListener('DOMContentLoaded', function () {
    const carouselTrack = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    const totalItems = items.length;

    // 각 이미지의 너비 계산
    const itemWidth = items[0].offsetWidth;

    // 슬라이드 업데이트 함수
    function updateCarousel() {
        carouselTrack.style.transition = 'transform 0.3s ease';
        carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    // 이전 버튼 클릭 시
    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;  // 인덱스 범위 조정
        updateCarousel();
    });

    // 다음 버튼 클릭 시
    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % totalItems;  // 인덱스 범위 조정
        updateCarousel();
    });
});