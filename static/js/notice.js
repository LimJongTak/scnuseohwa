let currentPage = 1;
const itemsPerPage = 2; // 페이지당 표시할 공지사항 항목 개수
const items = document.querySelectorAll('.notice-item'); // 모든 공지사항 항목

function showPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    // 모든 항목을 숨김
    items.forEach(item => item.style.display = 'none');

    // 해당 페이지의 항목만 표시
    for (let i = startIndex; i < endIndex; i++) {
        if (items[i]) {
            items[i].style.display = 'flex';
        }
    }
}

function changePage(page) {
    currentPage = page;
    showPage(currentPage);
}

// 페이지 로드 시 첫 페이지 보여주기
document.addEventListener('DOMContentLoaded', () => {
    showPage(currentPage);
});