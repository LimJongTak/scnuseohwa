// 카카오 지도 API 초기화
function initializeMap() {
    // 카카오 지도 API가 로드된 후에만 실행되도록 보장
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

// 캐러셀 기능 구현
function initializeCarousel() {
    let carouselIndex = 0;
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    // 캐러셀 다음 버튼 클릭 시
    nextBtn.addEventListener('click', function() {
        carouselIndex = (carouselIndex + 1) % totalItems;
        track.style.transform = `translateX(${(-carouselIndex * 100)}%)`;
    });

    // 캐러셀 이전 버튼 클릭 시
    prevBtn.addEventListener('click', function() {
        carouselIndex = (carouselIndex - 1 + totalItems) % totalItems;
        track.style.transform = `translateX(${(-carouselIndex * 100)}%)`;
    });
}

// 페이지 로드 시 초기화
window.addEventListener('load', function() {
    initializeMap();
    initializeCarousel();
});
