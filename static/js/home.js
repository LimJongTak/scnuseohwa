document.addEventListener('DOMContentLoaded', function () {
    // 캐러셀 관련 변수
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const carouselTrack = document.querySelector('.carousel-track');
    const images = [
        "{{ url_for('static', filename='images/mcyou.jpg') }}", 
        "{{ url_for('static', filename='images/mcgang.jpg') }}", 
        "{{ url_for('static', filename='images/mcsin.jpg') }}"
    ];
    let currentIndex = 0;

    // 캐러셀 업데이트 함수
    function updateCarousel() {
        carouselTrack.style.transition = 'transform 0.3s ease';
        carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // 이전 이미지
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateCarousel();
    });

    // 다음 이미지
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
});