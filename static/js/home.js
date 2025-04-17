// 페이지 로드 시 초기화
window.addEventListener('load', function() {

    // 캐러셀 이미지 전환
    const carouselPrev = document.querySelector('.carousel-prev');
    const carouselNext = document.querySelector('.carousel-next');
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    const itemWidth = carouselItems[0].offsetWidth;
    const totalItems = carouselItems.length;

    // 모든 이미지가 수평으로 배치되도록 처리
    carouselTrack.style.display = 'flex';
    carouselTrack.style.transition = 'transform 0.5s ease';

    // 한 개씩만 보여주기 위해 초기 이미지 설정
    carouselItems.forEach(item => item.style.flex = '0 0 100%');
    carouselItems[currentIndex].style.display = 'block';

    function updateCarousel() {
        carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    // 이전 버튼 클릭 시 이미지 전환
    carouselPrev.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    // 다음 버튼 클릭 시 이미지 전환
    carouselNext.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });
});