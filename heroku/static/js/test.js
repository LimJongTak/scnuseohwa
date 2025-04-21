let next = document.querySelector('.carousel-next');
let prev = document.querySelector('.carousel-prev');

// 자동 슬라이드 전환 설정 (4초마다)
setInterval(function() {
    let items = document.querySelectorAll('.carousel-item');
    let firstItem = items[0];
    document.querySelector('.carousel-track').appendChild(firstItem);
}, 4000); // 4초마다 전환

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.carousel-item');
    let firstItem = items[0];
    document.querySelector('.carousel-track').appendChild(firstItem);  // 마지막 아이템을 첫 번째로 이동
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.carousel-item');
    let lastItem = items[items.length - 1];
    document.querySelector('.carousel-track').prepend(lastItem); // 첫 번째 아이템을 마지막으로 이동
});