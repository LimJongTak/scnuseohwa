from flask import render_template

# 부스 데이터 예시
booth_data = {
    "blue1": {"name": "게임부스", "description": "재미있는 게임을 즐길 수 있는 부스입니다.", "image_url": "/static/images/booth_blue.jpg"},
    "blue2": {"name": "체험존", "description": "다양한 체험을 할 수 있어요.", "image_url": "/static/images/booth_blue.jpg"},
    "green3": {"name": "친환경 부스", "description": "지속 가능한 활동을 소개합니다.", "image_url": "/static/images/booth_green.jpg"},
    "orange2": {"name": "푸드존", "description": "맛있는 먹거리가 가득한 부스입니다.", "image_url": "/static/images/booth_orange.jpg"},
    "food1": {"name": "핫도그 푸드트럭", "description": "핫도그 푸드트럭 입니다.", "image_url": "/static/images/hotdog.jpg"},
    "food2": {"name": "디저트 트럭", "description": "디저트 트럭 입니다.", "image_url": "/static/images/desert.jpg"},
    # 다른 부스들도 추가
}

# 부스 상세 정보 페이지
def booth_detail(booth_id):
    booth = booth_data.get(booth_id)
    if booth:
        return render_template('booth_info.html', booth=booth)
    else:
        return render_template('404.html'), 404  # 부스를 찾을 수 없는 경우