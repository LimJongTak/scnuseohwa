let next = document.querySelector('.carousel-next');
let prev = document.querySelector('.carousel-prev');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.carousel-item');
    document.querySelector('.carousel-track').appendChild(items[0]);  // 마지막 아이템을 첫 번째로 이동
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.carousel-item');
    document.querySelector('.carousel-track').prepend(items[items.length - 1]); // 첫 번째 아이템을 마지막으로 이동
});