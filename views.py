from flask import Blueprint, render_template

# Blueprint 정의
booth_blueprint = Blueprint('booth', __name__)

# 부스 상세 페이지
@booth_blueprint.route('/booth/<booth_id>')
def booth_detail(booth_id):
    # 부스 데이터 예시
    booth_data = {
        "blue_1": {"name": "게임부스", "description": "재미있는 체험이 가득한 부스입니다.", "image_url": "/static/images/booth_blue.jpg"},
        "blue_2": {"name": "체험존", "description": "재미있는 체험이 가득한 부스입니다.", "image_url": "/static/images/booth_blue.jpg"},
        "orange_2": {"name": "푸드존", "description": "다양한 음식을 제공하는 부스입니다.", "image_url": "/static/images/booth_orange.jpg"},
        "green_3": {"name": "친환경 부스", "description": "체험형 놀이 부스입니다.", "image_url": "/static/images/booth_green.jpg"},
        # 다른 부스들 추가
    }


    booth = booth_data.get(booth_id)
    if booth:
        return render_template('booth_info.html', booth=booth)
    else:
        return render_template('404.html', status=404)  # 부스를 찾을 수 없는 경우
