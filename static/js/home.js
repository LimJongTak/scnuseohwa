// 페이지 로드 시 초기화
window.addEventListener('load', function() {
    // 카카오 지도 API 로드 후 실행
    loadKakaoMapApi(function() {
        initializeMap();  // 지도 초기화
    });

    // 캐러셀 이미지 전환
    const carouselPrev = document.querySelector('.carousel-prev');
    const carouselNext = document.querySelector('.carousel-next');
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    // 한 개씩만 보여주기 위해 모든 이미지 숨기기
    carouselItems.forEach(item => item.style.display = 'none');
    carouselItems[currentIndex].style.display = 'block';

    // 이전 버튼 클릭 시 이미지 전환
    carouselPrev.addEventListener('click', function() {
        carouselItems[currentIndex].style.display = 'none'; // 현재 이미지 숨기기
        currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1; // 인덱스 변경
        carouselItems[currentIndex].style.display = 'block'; // 새 이미지 보이기
    });

    // 다음 버튼 클릭 시 이미지 전환
    carouselNext.addEventListener('click', function() {
        carouselItems[currentIndex].style.display = 'none'; // 현재 이미지 숨기기
        currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1; // 인덱스 변경
        carouselItems[currentIndex].style.display = 'block'; // 새 이미지 보이기
    });
});