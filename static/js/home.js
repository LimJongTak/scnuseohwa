// 카카오 지도 API 초기화
function initializeMap() {
    if (typeof kakao === 'undefined') {
        console.error('카카오 지도 API가 로드되지 않았습니다.');
        return;
    }

    const mapContainer = document.getElementById('map'); // 지도를 표시할 div
    const mapOption = {
        center: new kakao.maps.LatLng(34.9694, 127.4808), // 지도의 중심 좌표
        level: 3 // 확대 레벨
    };

    const map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성
    const markerPosition = new kakao.maps.LatLng(34.9694, 127.4808); // 마커 위치 설정
    const marker = new kakao.maps.Marker({ position: markerPosition }); // 마커 생성
    marker.setMap(map); // 마커를 지도에 표시
}


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