document.addEventListener("DOMContentLoaded", function () {
    // 탭 버튼 처리
    const day1Tab = document.getElementById("day1-tab");
    const day2Tab = document.getElementById("day2-tab");
    const revealTab = document.getElementById("reveal-tab");
    const day1Content = document.getElementById("day1-content");
    const day2Content = document.getElementById("day2-content");
    const revealContent = document.getElementById("reveal-content");

    day1Tab.addEventListener("click", () => {
        day1Tab.classList.add("active");
        day2Tab.classList.remove("active");
        revealTab.classList.remove("active");
        day1Content.classList.add("active");
        day2Content.classList.remove("active");
        revealContent.classList.remove("active");
    });

    day2Tab.addEventListener("click", () => {
        day2Tab.classList.add("active");
        day1Tab.classList.remove("active");
        revealTab.classList.remove("active");
        day2Content.classList.add("active");
        day1Content.classList.remove("active");
        revealContent.classList.remove("active");
    });

    revealTab.addEventListener("click", () => {
        revealTab.classList.add("active");
        day1Tab.classList.remove("active");
        day2Tab.classList.remove("active");
        revealContent.classList.add("active");
        day1Content.classList.remove("active");
        day2Content.classList.remove("active");
    });

    // 캐러셀 기능 (Day 1, 2 공통)
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach((carousel) => {
        const track = carousel.querySelector(".carousel-track");
        const items = carousel.querySelectorAll(".carousel-item");
        const prev = carousel.querySelector(".carousel-prev");
        const next = carousel.querySelector(".carousel-next");
        let index = 0;

        function updateCarousel() {
            const width = items[0].offsetWidth;
            track.style.transform = `translateX(-${index * width}px)`;
        }

        next.addEventListener("click", () => {
            index = (index + 1) % items.length;
            updateCarousel();
        });

        prev.addEventListener("click", () => {
            index = (index - 1 + items.length) % items.length;
            updateCarousel();
        });

        window.addEventListener("resize", updateCarousel);
        updateCarousel();
    });

    // 공개 날짜 처리
    const revealSections = document.querySelectorAll(".reveal-section");

    // 공개 날짜 설정 (예시: 1차 공개 2025-04-28, 2차 공개 2025-05-05, 3차 공개 2025-05-12)
    const revealDates = {
        "reveal1": new Date("2025-04-28T10:00:00"),
        "reveal2": new Date("2025-05-05T10:00:00"),
        "reveal3": new Date("2025-05-12T10:00:00")
    };

    // 1일 뒤 이미지 변경 날짜 설정
    const revealChangeDates = {
        "reveal1": new Date("2025-04-29T10:00:00"),
        "reveal2": new Date("2025-05-06T10:00:00"),
        "reveal3": new Date("2025-05-13T10:00:00")
    };

    function updateRevealSections() {
        const currentDate = new Date();
        console.log("Current Date: ", currentDate);  // 콘솔로 현재 시간 확인

        // 공개 날짜에 맞춰 공개 상태를 업데이트
        for (let key in revealDates) {
            const revealSection = document.getElementById(key);
            const revealDate = revealDates[key];
            const changeDate = revealChangeDates[key];
            const image = revealSection.querySelector("img");

            console.log(`${key} - Reveal Date: ${revealDate}, Change Date: ${changeDate}`);  // 각 날짜 확인

            if (currentDate >= revealDate) {
                revealSection.querySelector(".coming-soon").style.display = 'none';  // COMING SOON 숨기기
                revealSection.querySelector(".revealed").style.display = 'block';  // 공개 텍스트 표시
                image.style.display = 'block';  // 공개 이미지 표시

                // 1일 뒤 이미지 변경
                if (currentDate >= changeDate) {
                    // 이미지가 1일 뒤에 변경됨
                    if (key === "reveal1") {
                        image.src = "static/images/reveal4.jpg";  // 이미지 변경
                    } else if (key === "reveal2") {
                        image.src = "static/images/reveal5.jpg";  // 이미지 변경
                    } else if (key === "reveal3") {
                        image.src = "static/images/reveal6.jpg";  // 이미지 변경
                    }
                    console.log(`Image changed for ${key}: `, image.src);  // 이미지 경로 확인
                }
            } else {
                revealSection.querySelector(".coming-soon").style.display = 'block';  // COMING SOON 표시
                revealSection.querySelector(".revealed").style.display = 'none';  // 공개 텍스트 숨기기
                image.style.display = 'none';  // 이미지 숨기기
            }
        }
    }

    // 페이지 로드 시 공개 상태 업데이트
    updateRevealSections();

    // 매초마다 공개 상태를 업데이트
    setInterval(updateRevealSections, 1000);
});