let next = document.querySelector('.carousel-next');
let prev = document.querySelector('.carousel-prev');
let track = document.querySelector('.carousel-track');
let items = document.querySelectorAll('.carousel-item');

// 슬라이드 전환 함수
function moveSlide(direction) {
    if (direction === 'next') {
        track.appendChild(items[0]);  // 마지막 아이템을 첫 번째로 이동
    } else {
        track.prepend(items[items.length - 1]);  // 첫 번째 아이템을 마지막으로 이동
    }
    updateActiveClass();
}

// 버튼 클릭 시 슬라이드 전환
next.addEventListener('click', function() {
    moveSlide('next');
});

prev.addEventListener('click', function() {
    moveSlide('prev');
});

// 4초마다 자동으로 이미지 슬라이드 전환
setInterval(function() {
    moveSlide('next');
}, 4000);

// 활성화된 클래스 추가 (애니메이션 효과 적용)
function updateActiveClass() {
    items = document.querySelectorAll('.carousel-item'); // 슬라이드 아이템 재선택
    items.forEach(item => item.classList.remove('active')); // 기존 active 클래스 제거
    items[0].classList.add('active'); // 첫 번째 아이템에 active 클래스 추가
}

// 터치 이벤트로 슬라이드 전환
let startX = 0;
let endX = 0;

track.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
}, false);

track.addEventListener('touchend', function(e) {
    endX = e.changedTouches[0].clientX;

    if (startX > endX + 50) {  // 오른쪽으로 스와이프
        moveSlide('next');
    } else if (startX < endX - 50) {  // 왼쪽으로 스와이프
        moveSlide('prev');
    }
}, false);