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
      1: [
        { id: "food1", name: "핫도그 푸드트럭", description: "따끈한 핫도그가 기다리고 있어요." }
      ],
      2: [
        { id: "food2", name: "디저트 트럭", description: "달콤한 디저트가 가득해요." }
      ]
    };
  
    window.showBoothCards = function (key) {
      const container = document.getElementById("booth-cards");
      container.innerHTML = "";
      boothData[key].forEach((booth) => {
        const card = document.createElement("div");
        card.className = "booth-card";
        card.setAttribute("data-booth-id", booth.id);
        card.innerHTML = `
          <h3>${booth.name}</h3>
          <p>${booth.description}</p>
        `;
        card.addEventListener("click", () => {
          window.location.href = `/booth/${booth.id}`;
        });
        container.appendChild(card);
      });
    };
  
    window.toggleButtons = function (type) {
      const daeun = document.getElementById("daeun-buttons");
      const food = document.getElementById("foodtruck-buttons");
      document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
      document.getElementById(`${type}-tab`).classList.add("active");
      daeun.style.display = type === "daeun" ? "block" : "none";
      food.style.display = type === "foodtruck" ? "block" : "none";
      showBoothCards(type === "daeun" ? "blue" : "1");
    };
  
    // 초기 표시
    showBoothCards("blue");
  });