document.addEventListener('DOMContentLoaded', function () {
    const carouselTrack = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    const totalItems = items.length;

    // 각 이미지의 너비 계산
    const itemWidth = items[0].offsetWidth;

    function updateCarousel() {
        // 슬라이드를 이동시키기 위해 carousel-track을 이동
        carouselTrack.style.transition = 'transform 0.3s ease';
        carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    // 이전 이미지로 이동
    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;  // 인덱스 범위 조정
        updateCarousel();
    });

    // 다음 이미지로 이동
    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % totalItems;  // 인덱스 범위 조정
        updateCarousel();
    });
});