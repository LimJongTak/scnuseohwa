let next = document.querySelector('.carousel-next');
let prev = document.querySelector('.carousel-prev');
let track = document.querySelector('.carousel-track');
let items = document.querySelectorAll('.carousel-item');

// 버튼 클릭 시 슬라이드 전환
next.addEventListener('click', function() {
    track.appendChild(items[0]);  // 마지막 아이템을 첫 번째로 이동
    updateActiveClass();
});

prev.addEventListener('click', function() {
    track.prepend(items[items.length - 1]);  // 첫 번째 아이템을 마지막으로 이동
    updateActiveClass();
});

// 4초마다 자동으로 이미지 슬라이드 전환
setInterval(function() {
    track.appendChild(items[0]);  // 마지막 아이템을 첫 번째로 이동
    updateActiveClass();
}, 4000);

// 활성화된 클래스 추가 (애니메이션 효과 적용)
function updateActiveClass() {
    items = document.querySelectorAll('.carousel-item'); // 슬라이드 아이템 재선택
    items.forEach(item => item.classList.remove('active')); // 기존 active 클래스 제거
    items[0].classList.add('active'); // 첫 번째 아이템에 active 클래스 추가
}