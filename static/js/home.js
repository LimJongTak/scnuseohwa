document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const sliderImage = document.getElementById('slider-image');
    
    // 이미지 배열 (이미지 파일 경로)
    const images = [
        '{{ url_for("static", filename="images/reveal1.jpg") }}',
        '{{ url_for("static", filename="images/reveal2.jpg") }}',
        '{{ url_for("static", filename="images/reveal3.jpg") }}'
    ];

    let currentIndex = 0;

    // 이미지를 업데이트하는 함수
    function updateImage() {
        sliderImage.src = images[currentIndex];
    }

    // 이전 버튼 클릭 시
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    // 다음 버튼 클릭 시
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });
});