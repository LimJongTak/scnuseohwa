document.addEventListener("DOMContentLoaded", function () {
    // 링크 항목 클릭 시 해당 섹션으로 부드럽게 스크롤
    const links = document.querySelectorAll('.link-item a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // 링크의 id를 가져옵니다.
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 추가 기능: 예를 들어, 다른 부가적인 기능을 추가할 수 있습니다.
    // 예시: 각 섹션에 진입할 때 애니메이션 효과 추가
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('section-hidden');
    });

    // 스크롤 시 해당 섹션에 진입할 때 애니메이션 적용
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.75) {
                section.classList.remove('section-hidden');
                section.classList.add('section-visible');
            }
        });
    });
});