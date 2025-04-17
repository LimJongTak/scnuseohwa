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

// 카카오 지도 API 로딩 함수
function loadKakaoMapApi(callback) {
    const script = document.createElement('script');
    // 카카오 지도 API URL에 실제 'appkey' 값 넣기
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=54e16725efe48b96242beb40a16fad3f';
    script.onload = callback;  // 스크립트 로드 후 callback 실행
    script.onerror = function() {
        console.error("카카오 지도 API 로드 실패");
    };
    document.head.appendChild(script);
}

// 페이지 로드 시 초기화
window.addEventListener('load', function() {
    // 카카오 지도 API 로드 후 실행
    loadKakaoMapApi(function() {
        initializeMap();  // 지도 초기화
    });
});
