// 페이지 로드 시 초기화
window.addEventListener('load', function() {

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
        // 현재 이미지 숨기기
        carouselItems[currentIndex].style.display = 'none'; 
        // 인덱스 변경 (첫 번째 이미지로 돌아가면 마지막 이미지로 변경)
        currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1; 
        // 새 이미지 보이기
        carouselItems[currentIndex].style.display = 'block';
    });

    // 다음 버튼 클릭 시 이미지 전환
    carouselNext.addEventListener('click', function() {
        // 현재 이미지 숨기기
        carouselItems[currentIndex].style.display = 'none'; 
        // 인덱스 변경 (마지막 이미지에서 돌아가면 첫 번째 이미지로 변경)
        currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1; 
        // 새 이미지 보이기
        carouselItems[currentIndex].style.display = 'block';
    });
});