window.onload = function () {
    const day1Tab = document.getElementById("day1-tab");
    const day2Tab = document.getElementById("day2-tab");
    const demoTab = document.getElementById("demo-tab");
    const day1Content = document.getElementById("day1");
    const day2Content = document.getElementById("day2");
    const demoContent = document.getElementById("demo");

    // 초기 설정: day1이 활성화 상태로 시작
    day1Tab.classList.add("active");
    day1Content.style.display = "block";
    day2Content.style.display = "none";
    demoContent.style.display = "none";

    // 1DAY 클릭 시
    day1Tab.addEventListener("click", function () {
        day1Tab.classList.add("active");
        day2Tab.classList.remove("active");
        demoTab.classList.remove("active");
        day1Content.style.display = "block";
        day2Content.style.display = "none";
        demoContent.style.display = "none";
    });

    // 2DAY 클릭 시
    day2Tab.addEventListener("click", function () {
        day2Tab.classList.add("active");
        day1Tab.classList.remove("active");
        demoTab.classList.remove("active");
        day2Content.style.display = "block";
        day1Content.style.display = "none";
        demoContent.style.display = "none";
    });

    // DEMO 클릭 시
    demoTab.addEventListener("click", function () {
        demoTab.classList.add("active");
        day1Tab.classList.remove("active");
        day2Tab.classList.remove("active");
        demoContent.style.display = "block";
        day1Content.style.display = "none";
        day2Content.style.display = "none";
    });

    // 현재 시간에 맞는 일정 강조
    function highlightCurrentEvent() {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        // 1day 일정
        const itemsDay1 = [
            { start: new Date("2025-05-28 10:00"), end: new Date("2025-05-28 19:00"), id: "item-1" },
            { start: new Date("2025-05-28 16:00"), end: new Date("2025-05-28 17:00"), id: "item-2" },
            { start: new Date("2025-05-28 18:00"), end: new Date("2025-05-28 19:00"), id: "item-3" },
            { start: new Date("2025-05-28 19:00"), end: new Date("2025-05-28 19:30"), id: "item-4" },
            { start: new Date("2025-05-28 19:30"), end: new Date("2025-05-28 20:30"), id: "item-5" },
            { start: new Date("2025-05-28 20:30"), end: new Date("2025-05-28 21:00"), id: "item-6" },
            { start: new Date("2025-05-28 21:00"), end: new Date("2025-05-28 21:30"), id: "item-7" },
            { start: new Date("2025-05-28 21:30"), end: new Date("2025-05-28 22:00"), id: "item-8" }
        ];

        // 2day 일정
        const itemsDay2 = [
            { start: new Date("2025-05-29 10:00"), end: new Date("2025-05-29 19:00"), id: "item-9" },
            { start: new Date("2025-05-29 18:00"), end: new Date("2025-05-29 19:00"), id: "item-10" },
            { start: new Date("2025-05-29 19:00"), end: new Date("2025-05-29 19:30"), id: "item-11" },
            { start: new Date("2025-05-29 19:30"), end: new Date("2025-05-29 20:00"), id: "item-12" },
            { start: new Date("2025-05-29 20:00"), end: new Date("2025-05-29 20:30"), id: "item-13" },
            { start: new Date("2025-05-29 20:30"), end: new Date("2025-05-29 21:00"), id: "item-14" },
            { start: new Date("2025-05-29 21:00"), end: new Date("2025-05-29 21:30"), id: "item-15" },
            { start: new Date("2025-05-29 22:00"), end: new Date("2025-05-29 22:10"), id: "item-16" }
        ];

        // DEMO 일정
        const itemsDemo = [
            { start: new Date("2025-04-16 13:00"), end: new Date("2025-04-16 23:59"), id: "demo-item-2" } // 데모 일정2
        ];

        // 시간대 비교 및 active 추가
        function checkTime(items) {
            items.forEach(item => {
                const currentTime = now.getTime();

                const itemElement = document.getElementById(item.id);
                const itemText = itemElement.querySelector(".schedule-detail");

                // 일정이 진행 중인지 확인
                if (currentTime >= item.start.getTime() && currentTime <= item.end.getTime()) {
                    itemElement.classList.add("active");
                    itemElement.classList.add("highlight"); // 활성화된 항목에 highlight 클래스 추가

                    // "진행 중" 텍스트 추가
                    if (!itemText.innerHTML.includes("진행 중")) {
                        itemText.innerHTML += "<span class='current-event'> 진행 중</span>";
                    }
                } else {
                    itemElement.classList.remove("active");
                    itemElement.classList.remove("highlight"); // highlight 클래스 제거

                    // "진행 중" 텍스트 제거
                    if (itemText.innerHTML.includes("진행 중")) {
                        itemText.innerHTML = itemText.innerHTML.replace("<span class='current-event'> 진행 중</span>", "");
                    }
                }
            });
        }

        checkTime(itemsDay1);
        checkTime(itemsDay2);
        checkTime(itemsDemo); // 데모 일정에 대해서도 체크
    }

    // 처음 페이지 로드 시 진행 중인 일정 강조
    highlightCurrentEvent();

    // 1분마다 업데이트
    setInterval(highlightCurrentEvent, 60000); // 1분마다 확인
};
