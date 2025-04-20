document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const carouselTrack = document.querySelector('.carousel-track');
    let currentIndex = 0;
    
    // 이미지 경로는 HTML 템플릿에서 이미 동적으로 삽입된 상태로 처리합니다.
    const images = [
        document.querySelector("#reveal1").src,
        document.querySelector("#reveal2").src,
        document.querySelector("#reveal3").src
    ];
    
    let autoSlideInterval;

    // 이미지 업데이트 함수
    function updateCarousel() {
        const imgElement = document.createElement('img');
        imgElement.src = images[currentIndex];
        imgElement.alt = `Image ${currentIndex + 1}`;
        imgElement.classList.add('carousel-item-img');
        
        // 기존 이미지를 제거하고 새 이미지 삽입
        carouselTrack.innerHTML = ''; // 기존 내용 지우기
        const newItem = document.createElement('div');
        newItem.classList.add('carousel-item');
        newItem.appendChild(imgElement);
        carouselTrack.appendChild(newItem);
    }

    // 다음 이미지로 이동
    function showNextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    // 이전 이미지로 이동
    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    }

    prevBtn.addEventListener('click', showPrevSlide);
    nextBtn.addEventListener('click', showNextSlide);

    // 자동 슬라이드
    function startAutoSlide() {
        autoSlideInterval = setInterval(showNextSlide, 4000); // 4초마다 자동 이동
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // 마우스를 올리면 자동 슬라이드 멈추기
    carouselTrack.addEventListener("mouseenter", stopAutoSlide);
    carouselTrack.addEventListener("mouseleave", startAutoSlide);

    updateCarousel();
    startAutoSlide(); // 시작 시 자동 슬라이드 작동
});