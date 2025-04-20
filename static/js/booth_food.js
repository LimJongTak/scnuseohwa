document.addEventListener("DOMContentLoaded", function () {
    const boothData = {
        blue: [
            { id: "blue1", name: "게임부스", description: "재미있는 게임을 즐길 수 있는 부스입니다." },
            { id: "blue2", name: "체험존", description: "다양한 체험을 할 수 있어요." }
        ],
        green: [
            { id: "green1", name: "친환경 부스", description: "지속 가능한 활동을 소개합니다." }
        ],
        orange: [
            { id: "orange1", name: "푸드존", description: "맛있는 먹거리가 가득한 부스입니다." }
        ],
        foodtruck1: [
            { id: "food1", name: "핫도그 푸드트럭", description: "따끈한 핫도그가 기다리고 있어요." }
        ],
        foodtruck2: [
            { id: "food2", name: "디저트 트럭", description: "달콤한 디저트가 가득해요." }
        ]
    };

    window.showBoothCards = function (key) {
        const container = document.getElementById("booth-cards");
        container.innerHTML = ""; // 기존 내용 초기화

        // key가 boothData에 존재하는지 확인
        if (boothData[key]) {
            boothData[key].forEach((booth) => {
                const card = document.createElement("div");
                card.className = "booth-card";
                card.setAttribute("data-booth-id", booth.id);
                
                // 부스 클릭 시 해당 부스 정보 페이지로 이동하도록 링크 추가
                card.innerHTML = `
                    <h3>${booth.name}</h3>
                    <p>${booth.description}</p>
                `;
                
                card.addEventListener("click", () => {
                    // 부스 카드 클릭 시, 부스 상세 정보 페이지로 이동
                    window.location.href = `/booth/${booth.id}`; // 부스의 고유 ID를 포함한 URL로 이동
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