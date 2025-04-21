let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let track = document.querySelector('.carousel-track');
let items = document.querySelectorAll('.carousel-item');
let interval;

// 버튼 클릭 시 슬라이드 전환
next.addEventListener('click', function() {
    track.appendChild(items[0]); // 마지막 아이템을 첫 번째로 이동
    updateActiveClass();
    clearInterval(interval);
    startAutoSlide();
});

prev.addEventListener('click', function() {
    track.prepend(items[items.length - 1]); // 첫 번째 아이템을 마지막으로 이동
    updateActiveClass();
    clearInterval(interval);
    startAutoSlide();
});

// 4초마다 자동으로 이미지 슬라이드 전환
function startAutoSlide() {
    interval = setInterval(function() {
        track.appendChild(items[0]);
        updateActiveClass();
    }, 4000);
}

// 자동 슬라이드 전환 시작
startAutoSlide();

// 활성화된 클래스 추가 (애니메이션 효과 적용)
function updateActiveClass() {
    items = document.querySelectorAll('.carousel-item'); 
    items.forEach(item => item.classList.remove('active'));
    items[0].classList.add('active');
}