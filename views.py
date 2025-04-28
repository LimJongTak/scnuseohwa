from flask import Blueprint, render_template

# Blueprint 정의
booth_blueprint = Blueprint('booth', __name__)

# 부스 상세 페이지
@booth_blueprint.route('/booth/<booth_id>')
def booth_detail(booth_id):
    # 부스 데이터 예시
    booth_data = {
        "blue_1": {"name": "안내 부스 1", "description": "안내 부스 1입니다.", "image_url": "/static/images/booth_blue.jpg"},
        "blue_2": {"name": "안내 부스 2", "description": "안내 부스 2입니다.", "image_url": "/static/images/booth_blue.jpg"},
        "green_3": {"name": "서화 총학생회", "description": "서화총학생회 부스입니다.", "image_url": "/static/images/booth_green.jpg"},
        "food_1": {"name": "푸드트럭 1", "description": "추후 안내해 드리겠습니다.", "image_url": "/static/images/hotdog.jpg"},
        "food_2": {"name": "푸드트럭 2", "description": "추후 안내해 드리겠습니다.", "image_url": "/static/images/desert.jpg"},
        # 다른 부스들 추가
    }


    booth = booth_data.get(booth_id)
    if booth:
        return render_template('booth_info.html', booth=booth)
    else:
        return render_template('404.html', status=404)  # 부스를 찾을 수 없는 경우
