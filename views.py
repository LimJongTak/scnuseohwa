from flask import Blueprint, render_template

# Blueprint 정의
booth_blueprint = Blueprint('booth', __name__)

# 부스 상세 페이지
@booth_blueprint.route('/booth/<booth_id>')
def booth_detail(booth_id):
    # 부스 데이터 예시
    booth_data = {
        "blue_1": {"name": "운영 부스", "description": "운영 부스입니다.", "image_url": "/static/images/booth_blue.jpg"},
        "blue_2": {"name": "운영 부스", "description": "운영 부스입니다.", "image_url": "/static/images/booth_blue.jpg"},
        "blue_3": {"name": "3번 부스", "description": "부스 3입니다.", "image_url": "/static/images/booth_blue.jpg"},
        "blue_4": {"name": "4번 부스", "description": "부스 4입니다.", "image_url": "/static/images/booth_blue.jpg"},
        "blue_5": {"name": "5번 부스", "description": "부스 5입니다.", "image_url": "/static/images/booth_blue.jpg"},
        "blue_6": {"name": "6번 부스", "description": "부스 6입니다.", "image_url": "/static/images/booth_blue.jpg"},
        "blue_7": {"name": "7번 부스", "description": "부스 7입니다.", "image_url": "/static/images/booth_blue.jpg"},
        "blue_8": {"name": "8번 부스", "description": "부스 8입니다.", "image_url": "/static/images/booth_blue.jpg"},
        "blue_9": {"name": "9번 부스", "description": "부스 9입니다.", "image_url": "/static/images/booth_blue.jpg"},
        "blue_10": {"name": "10번 부스", "description": "부스 10입니다.", "image_url": "/static/images/booth_blue.jpg"},
        "green_11": {"name": "11번 부스", "description": "부스 11입니다.", "image_url": "/static/images/booth_green.jpg"},
        "green_12": {"name": "12번 부스", "description": "부스 12입니다.", "image_url": "/static/images/booth_green.jpg"},
        "green_13": {"name": "13번 부스", "description": "부스 13입니다.", "image_url": "/static/images/booth_green.jpg"},
        "green_14": {"name": "14번 부스", "description": "부스 14입니다.", "image_url": "/static/images/booth_green.jpg"},
        "green_15": {"name": "15번 부스", "description": "부스 15입니다.", "image_url": "/static/images/booth_green.jpg"},
        "green_16": {"name": "16번 부스", "description": "부스 16입니다.", "image_url": "/static/images/booth_green.jpg"},
        "green_17": {"name": "17번 부스", "description": "부스 17입니다.", "image_url": "/static/images/booth_green.jpg"},
        "green_18": {"name": "18번 부스", "description": "부스 18입니다.", "image_url": "/static/images/booth_green.jpg"},
        "green_19": {"name": "19번 부스", "description": "부스 19입니다.", "image_url": "/static/images/booth_green.jpg"},
        "green_20": {"name": "20번 부스", "description": "부스 20입니다.", "image_url": "/static/images/booth_green.jpg"},
        "green_21": {"name": "21번 부스", "description": "부스 21입니다.", "image_url": "/static/images/booth_green.jpg"},
        "food_1": {"name": "푸드트럭 1", "description": "추후 안내해 드리겠습니다.", "image_url": "/static/images/hotdog.jpg"},
        "food_2": {"name": "푸드트럭 2", "description": "추후 안내해 드리겠습니다.", "image_url": "/static/images/hotdog.jpg"},
        "food_3": {"name": "푸드트럭 3", "description": "추후 안내해 드리겠습니다.", "image_url": "/static/images/hotdog.jpg"},
        "food_4": {"name": "푸드트럭 4", "description": "추후 안내해 드리겠습니다.", "image_url": "/static/images/hotdog.jpg"},
        "food_5": {"name": "푸드트럭 5", "description": "추후 안내해 드리겠습니다.", "image_url": "/static/images/hotdog.jpg"},
        "food_6": {"name": "푸드트럭 6", "description": "추후 안내해 드리겠습니다.", "image_url": "/static/images/hotdog.jpg"},
        "food_7": {"name": "푸드트럭 7", "description": "추후 안내해 드리겠습니다.", "image_url": "/static/images/hotdog.jpg"},
        "food_8": {"name": "푸드트럭 8", "description": "추후 안내해 드리겠습니다.", "image_url": "/static/images/hotdog.jpg"},
        "food_9": {"name": "푸드트럭 9", "description": "추후 안내해 드리겠습니다.", "image_url": "/static/images/hotdog.jpg"},
        "food_10": {"name": "푸드트럭 10", "description": "추후 안내해 드리겠습니다.", "image_url": "/static/images/hotdog.jpg"},
        "food_11": {"name": "푸드트럭 11", "description": "추후 안내해 드리겠습니다.", "image_url": "/static/images/hotdog.jpg"},
        "food_12": {"name": "푸드트럭 12", "description": "추후 안내해 드리겠습니다.", "image_url": "/static/images/hotdog.jpg"},
        "food_13": {"name": "푸드트럭 13", "description": "추후 안내해 드리겠습니다.", "image_url": "/static/images/hotdog.jpg"},
        "food_14": {"name": "푸드트럭 14", "description": "추후 안내해 드리겠습니다.", "image_url": "/static/images/hotdog.jpg"},
        "food_15": {"name": "푸드트럭 15", "description": "추후 안내해 드리겠습니다.", "image_url": "/static/images/hotdog.jpg"},
        # 다른 부스들 추가
    }


    booth = booth_data.get(booth_id)
    if booth:
        return render_template('booth_info.html', booth=booth)
    else:
        return render_template('404.html', status=404)  # 부스를 찾을 수 없는 경우
