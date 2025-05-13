document.addEventListener("DOMContentLoaded", function () {
    const boothData = {
        blue: [
            { id: "blue_1", name: "운영 부스", number: "1번", description: "운영 부스입니다." },
            { id: "blue_2", name: "운영 부스", number: "2번", description: "운영 부스입니다." },
            { id: "blue_3", name: "3번 부스", number: "3번", description: "3번 부스입니다." },
            { id: "blue_4", name: "4번 부스", number: "4번", description: "4번 부스입니다." },
            { id: "blue_5", name: "5번 부스", number: "5번", description: "5번 부스입니다." },
            { id: "blue_6", name: "6번 부스", number: "6번", description: "6번 부스입니다." },
            { id: "blue_7", name: "7번 부스", number: "7번", description: "7번 부스입니다." },
            { id: "blue_8", name: "8번 부스", number: "8번", description: "8번 부스입니다." },
            { id: "blue_9", name: "9번 부스", number: "9번", description: "9번 부스입니다." },
            { id: "blue_10", name: "10번 부스", number: "10번", description: "10번 부스입니다." },
        ],
        green: [
            { id: "green_11", name: "11번 부스", number: "11번", description: "11번 부스입니다." },
            { id: "green_12", name: "12번 부스", number: "12번", description: "12번 부스입니다." },
            { id: "green_13", name: "13번 부스", number: "13번", description: "13번 부스입니다." },
            { id: "green_14", name: "14번 부스", number: "14번", description: "14번 부스입니다." },
            { id: "green_15", name: "15번 부스", number: "15번", description: "15번 부스입니다." },
            { id: "green_16", name: "16번 부스", number: "16번", description: "16번 부스입니다." },
            { id: "green_17", name: "17번 부스", number: "17번", description: "17번 부스입니다." },
            { id: "green_18", name: "18번 부스", number: "18번", description: "18번 부스입니다." },
            { id: "green_19", name: "19번 부스", number: "19번", description: "19번 부스입니다." },
            { id: "green_20", name: "20번 부스", number: "20번", description: "20번 부스입니다." },
            { id: "green_21", name: "21번 부스", number: "21번", description: "21번 부스입니다." },

        ],
        foodtruck1: [
            { id: "food_1", name: "푸드트럭 1", number: "22번", description: "추후 안내해 드리겠습니다." },
            { id: "food_2", name: "푸드트럭 2", number: "23번", description: "추후 안내해 드리겠습니다." },
            { id: "food_3", name: "푸드트럭 3", number: "24번", description: "추후 안내해 드리겠습니다." },
            { id: "food_4", name: "푸드트럭 4", number: "25번", description: "추후 안내해 드리겠습니다." },
            { id: "food_5", name: "푸드트럭 5", number: "26번", description: "추후 안내해 드리겠습니다." },
            { id: "food_6", name: "푸드트럭 6", number: "27번", description: "추후 안내해 드리겠습니다." },
            { id: "food_7", name: "푸드트럭 7", number: "28번", description: "추후 안내해 드리겠습니다." },
            { id: "food_8", name: "푸드트럭 8", number: "29번", description: "추후 안내해 드리겠습니다." },
            { id: "food_9", name: "푸드트럭 9", number: "30번", description: "추후 안내해 드리겠습니다." },
            { id: "food_10", name: "푸드트럭 10", number: "31번", description: "추후 안내해 드리겠습니다." }
        ],
        foodtruck2: [
            { id: "food_11", name: "푸드트럭 11", number: "32번", description: "추후 안내해 드리겠습니다." },
            { id: "food_12", name: "푸드트럭 12", number: "33번", description: "추후 안내해 드리겠습니다." },
            { id: "food_13", name: "푸드트럭 13", number: "34번", description: "추후 안내해 드리겠습니다." },
            { id: "food_14", name: "푸드트럭 14", number: "35번", description: "추후 안내해 드리겠습니다." },
            { id: "food_15", name: "푸드트럭 15", number: "36번", description: "추후 안내해 드리겠습니다." }
        ]
    };

    window.showBoothCards = function (key) {
        const container = document.getElementById("booth-cards");
        container.innerHTML = ""; // 기존 내용 초기화

        if (boothData[key]) {
            boothData[key].forEach((booth) => {
                const card = document.createElement("div");
                card.className = "booth-card";
                card.setAttribute("data-booth-id", booth.id);

                // 부스 클릭 시 해당 부스 정보 페이지로 이동하도록 링크 추가
                card.innerHTML = `
                    <h3>${booth.name} (${booth.number})</h3> <!-- 부스 번호 추가 -->
                    <p>${booth.description}</p>
                `;
                
                card.addEventListener("click", () => {
                    // 부스 카드 클릭 시, 부스 상세 정보 페이지로 이동
                    window.location.href = `/booth_info/${booth.id}`; // 부스의 고유 ID를 포함한 URL로 이동
                });
                
                container.appendChild(card);
            });
        } else {
            console.error("Invalid booth category: " + key);
        }
    };

    window.toggleButtons = function (type) {
        const daeun = document.getElementById("daeun-buttons");
        const food = document.getElementById("foodtruck-buttons");

        // 버튼 활성화 상태 관리
        document.querySelectorAll(".tab-button").forEach(btn => {
            btn.classList.remove("active"); // 모든 탭 버튼에서 active 제거
        });
        document.querySelectorAll(".booth-section-button").forEach(btn => {
            btn.classList.remove("active"); // 모든 부스 버튼에서 active 제거
        });

        // 탭 버튼 활성화
        document.getElementById(`${type}-tab`).classList.add("active");

        // 각 탭 버튼 클릭 시, 해당 부스 종류를 보이게 함
        if (type === "daeun") {
            daeun.style.display = "block";
            food.style.display = "none";
            showBoothCards("blue"); // 대운동장 부스
            document.getElementById("booth-blue").classList.add("active"); // 부스(파랑) 버튼 활성화
        } else if (type === "foodtruck") {
            daeun.style.display = "none";
            food.style.display = "block";
            showBoothCards("foodtruck1"); // 푸드트럭 1존
            document.getElementById("foodtruck-1").classList.add("active"); // 푸드트럭(1존) 버튼 활성화
        }
    };

    // 부스(파랑), 부스(초록), 부스(주황), 푸드트럭(1존), 푸드트럭(2존) 버튼 클릭 시 active 클래스 관리
    document.querySelectorAll(".booth-section-button").forEach(button => {
        button.addEventListener("click", function () {
            // 모든 버튼에서 active 클래스를 제거
            document.querySelectorAll(".booth-section-button").forEach(btn => btn.classList.remove("active"));

            // 클릭된 버튼에 active 클래스를 추가
            this.classList.add("active");
        });
    });

    // 초기 표시
    showBoothCards("blue"); // 기본적으로 "blue" 부스를 표시
    document.getElementById("daeun-tab").classList.add("active"); // 대운동장 탭 활성화
    document.getElementById("booth-blue").classList.add("active"); // 부스(파랑) 버튼 활성화
});