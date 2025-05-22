document.addEventListener("DOMContentLoaded", function () {
    const boothData = {
        blue: [
    { id: "blue_1", name: "운영 부스", number: "1번", description: "운영 부스입니다." },
    { id: "blue_2", name: "운영 부스", number: "2번", description: "운영 부스입니다." },
    { id: "blue_3", name: "또굿집", number: "3번", description: "축제준비위원회" },
    { id: "blue_4", name: "과일을 찾아라!", number: "4번", description: "총학생회(서화)" },
    { id: "blue_5", name: "슬리퍼 발로 차", number: "5번", description: "총동아리연합회(결)" },
    { id: "blue_6", name: "탁구공 던지기 게임", number: "6번", description: "그린스마트팜스쿨학생회(화랑)" },
    { id: "blue_7", name: "소원을 말해봐", number: "7번", description: "우주항공첨단소재스쿨학생회(SO:ONE)" },
    { id: "blue_8", name: "2025년 마약류 중독 및 오남용 예방 캠페인", number: "8번", description: "약학대학 학생회(도파민)" },
    { id: "blue_9", name: "월하랑 놀자", number: "9번", description: "애니메이션문화콘텐츠스쿨" },
    { id: "blue_10", name: "GTEP 사업단", number: "10번", description: "GTEP 사업단" }
],
green: [
    { id: "green_11", name: "양말목 티코스터&음료 리필스테이션", number: "11번", description: "중앙 동아리(새순)" },
    { id: "green_12", name: "취향을 담은 꾸러미", number: "12번", description: "창업동아리(방향을 잡는 사람들)" },
    { id: "green_13", name: "디망쉬", number: "13번", description: "디망쉬" },
    { id: "green_14", name: "대학본부 1", number: "14번", description: "대학본부 1" },
    { id: "green_15", name: "대학본부 2", number: "15번", description: "대학본부 2" },
    { id: "green_16", name: "대학본부 3", number: "16번", description: "대학본부 3" },
    { id: "green_17", name: "대학본부 4", number: "17번", description: "대학본부 4" },
    { id: "green_18", name: "대학본부 5", number: "18번", description: "대학본부 5" },
    { id: "green_19", name: "대학본부 6", number: "19번", description: "대학본부 6" },
    { id: "green_20", name: "동화 속 한 장면", number: "20번", description: "인생네컷" },
    { id: "green_21", name: "동화 속 한 장면", number: "21번", description: "인생네컷" }
],
        foodtruck1: [
            { id: "food_1", name: "만동만길", number: "1번", description: "떡순어묵" },
            { id: "food_2", name: "VIP", number: "2번", description: "크림, 칠리새우" },
            { id: "food_3", name: "키다리푸드", number: "3번", description: "야끼소바, 오코노미야끼" },
            { id: "food_4", name: "부엉이푸드", number: "4번", description: "닭꼬치" },
            { id: "food_5", name: "로드리", number: "5번", description: "야채곱창, 무뼈닭발" },
            { id: "food_6", name: "뽀라츄러스", number: "6번", description: "츄러스, 아이스크림" },
            { id: "food_7", name: "이삭", number: "7번", description: "생과일주스, 과일화채" },
            { id: "food_8", name: "알코홀릭", number: "8번", description: "주류판매" },
            { id: "food_9", name: "톡톡팡팡", number: "9번", description: "구슬아이스크림" },
            { id: "food_10", name: "핑크제이", number: "10번", description: "소고기불초밥, 연어초밥" },
            { id: "food_11", name: "꽃길만걷자6", number: "11번", description: "스테이크&덮밥" },
            { id: "food_12", name: "유에프오", number: "12번", description: "뉴욕핫도그, 감자튀김" },
            { id: "food_13", name: "꽃길만걷자", number: "13번", description: "닭강정" },
            { id: "food_14", name: "명리푸드", number: "14번", description: "통닭, 목살바베큐" },
            { id: "food_15", name: "타임푸드", number: "15번", description: "타코야끼" }
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