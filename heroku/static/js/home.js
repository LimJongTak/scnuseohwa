document.addEventListener("DOMContentLoaded", function () {
    const next = document.querySelector('.carousel-next');
    const prev = document.querySelector('.carousel-prev');
    const track = document.querySelector('.carousel-track');
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
    next.addEventListener('click', function () {
        moveSlide('next');
    });

    prev.addEventListener('click', function () {
        moveSlide('prev');
    });

    // 활성화된 클래스 추가 (애니메이션 효과 적용)
    function updateActiveClass() {
        items = document.querySelectorAll('.carousel-item'); // 슬라이드 아이템 재선택
        items.forEach(item => item.classList.remove('active')); // 기존 active 클래스 제거
        items[0].classList.add('active'); // 첫 번째 아이템에 active 클래스 추가
    }

    // 4초마다 자동으로 이미지 슬라이드 전환
    setInterval(function () {
        moveSlide('next');
    }, 4000);

    // 지정된 시간에 맞춰 이미지 슬라이드를 변경
    const revealDates = {
        "reveal1": new Date("2025-04-22T00:00:00"),
        "reveal2": new Date("2025-05-05T10:00:00"),
        "reveal3": new Date("2025-05-12T10:00:00"),
        "reveal4": new Date("2025-05-19T10:00:00"),
        "reveal5": new Date("2025-05-26T10:00:00"),
        "reveal6": new Date("2025-06-02T10:00:00")
    };

    const revealChangeDates = {
        "reveal1": new Date("2025-04-22T02:31:00"),
        "reveal2": new Date("2025-05-06T10:00:00"),
        "reveal3": new Date("2025-05-13T10:00:00"),
        "reveal4": new Date("2025-05-20T10:00:00"),
        "reveal5": new Date("2025-05-27T10:00:00"),
        "reveal6": new Date("2025-06-03T10:00:00")
    };

    // 현재 시간을 기준으로 이미지 변경
    function updateRevealSections() {
        const currentDate = new Date();
        console.log("Current Date: ", currentDate);  // 콘솔로 현재 시간 확인

        for (let key in revealDates) {
            const revealDate = revealDates[key];
            const changeDate = revealChangeDates[key];
            const revealSection = document.getElementById(key); // 각 reveal 섹션 선택
            const image = revealSection.querySelector("img"); // 해당 섹션 내 이미지 선택

            console.log(`${key} - Reveal Date: ${revealDate}, Change Date: ${changeDate}`);  // 각 날짜 확인

            if (currentDate >= revealDate) {
                if (currentDate >= changeDate) {
                    // 1일 뒤에 이미지 변경
                    if (key === "reveal1") {
                        image.src = "static/images/reveal4.jpg";  // 이미지 변경
                    } else if (key === "reveal2") {
                        image.src = "static/images/reveal5.jpg";  // 이미지 변경
                    } else if (key === "reveal3") {
                        image.src = "static/images/reveal6.jpg";  // 이미지 변경
                    } else if (key === "reveal4") {
                        image.src = "static/images/reveal7.jpg";  // 이미지 변경
                    } else if (key === "reveal5") {
                        image.src = "static/images/reveal8.jpg";  // 이미지 변경
                    } else if (key === "reveal6") {
                        image.src = "static/images/reveal9.jpg";  // 이미지 변경
                    }
                    console.log(`Image changed for ${key}: `, image.src);  // 이미지 경로 확인
                }
            }
        }
    }

    // 페이지 로드 시 공개 상태 업데이트
    updateRevealSections();

    // 매초마다 공개 상태를 업데이트
    setInterval(updateRevealSections, 1000);

    // 터치 이벤트로 슬라이드 전환
    let startX = 0;
    let endX = 0;

    track.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
    }, false);

    track.addEventListener('touchend', function (e) {
        endX = e.changedTouches[0].clientX;

        if (startX > endX + 50) {  // 오른쪽으로 스와이프
            moveSlide('next');
        } else if (startX < endX - 50) {  // 왼쪽으로 스와이프
            moveSlide('prev');
        }
    }, false);
});