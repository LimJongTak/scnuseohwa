// footer.js

// 스크롤 이벤트 리스너를 추가하여 스크롤에 따른 푸터 표시/숨기기 구현
window.addEventListener('scroll', function() {
    const footer = document.querySelector('.footer-container');

    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        // 페이지 하단에 도달하면 푸터 보이기
        footer.style.bottom = "0";
    } else {
        // 페이지 상단으로 스크롤하면 푸터 숨기기
        footer.style.bottom = "-60px"; // 푸터가 화면에서 완전히 사라질 만큼 설정
    }
});
