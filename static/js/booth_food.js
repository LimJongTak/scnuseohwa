function navigateToBoothDetail(id) {
    window.location.href = `/booth/${id}`;
  }
  
  const boothData = {
    blue: [
      { id: 'b1', name: '파랑부스1', desc: '체험과 이벤트가 있는 부스입니다.', image: '/static/images/booth_blue.jpg' },
      { id: 'b2', name: '파랑부스2', desc: '게임을 즐길 수 있는 공간입니다.', image: '/static/images/booth_blue.jpg' }
    ],
    green: [
      { id: 'g1', name: '초록부스1', desc: '환경을 생각한 친환경 부스입니다.', image: '/static/images/booth_green.jpg' }
    ],
    orange: [
      { id: 'o1', name: '주황부스1', desc: '푸드와 음료가 있는 부스입니다.', image: '/static/images/booth_orange.jpg' }
    ],
    foodtruck1: [
      { id: 'f1', name: '푸드트럭1', desc: '핫도그와 음료를 판매합니다.', image: '/static/images/foodtruck_1.jpg' }
    ],
    foodtruck2: [
      { id: 'f2', name: '푸드트럭2', desc: '디저트 전문 푸드트럭입니다.', image: '/static/images/foodtruck_2.jpg' }
    ]
  };
  
  function showBoothCards(type) {
    const container = document.getElementById('booth-cards');
    container.innerHTML = '';
  
    const cards = boothData[type];
    if (!cards) return;
  
    cards.forEach(booth => {
      const card = document.createElement('div');
      card.className = 'booth-card';
      card.onclick = () => navigateToBoothDetail(booth.id);
      card.innerHTML = `
        <img src="${booth.image}" alt="${booth.name}" class="booth-image" />
        <div class="booth-info">
          <h3>${booth.name}</h3>
          <p>${booth.desc}</p>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  function toggleButtons(type) {
    const daeunButtons = document.getElementById('daeun-buttons');
    const foodtruckButtons = document.getElementById('foodtruck-buttons');
  
    const tabs = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => tab.classList.remove('active'));
  
    if (type === 'daeun') {
      daeunButtons.style.display = 'block';
      foodtruckButtons.style.display = 'none';
      document.getElementById('daeun-tab').classList.add('active');
      showBoothCards('blue');
    } else if (type === 'foodtruck') {
      foodtruckButtons.style.display = 'block';
      daeunButtons.style.display = 'none';
      document.getElementById('foodtruck-tab').classList.add('active');
      showBoothCards('foodtruck1');
    }
  }
  
  function showBoothInfo(color) {
    showBoothCards(color);
  }
  
  function showFoodtruckInfo(zone) {
    showBoothCards('foodtruck' + zone);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    showBoothCards('blue');
  });