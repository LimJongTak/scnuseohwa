from flask import Blueprint, render_template

# Blueprint 정의
booth_blueprint = Blueprint('booth', __name__)

# 부스 상세 페이지
@booth_blueprint.route('/booth/<booth_id>')
def booth_detail(booth_id):
    # 부스 데이터 예시
    booth_data = {
    "blue_1": {"name": "운영 부스", "description": "운영 부스입니다."},
    "blue_2": {"name": "운영 부스", "description": "운영 부스입니다."},
    "blue_3": {"name": "3번 부스", "description": "부스 3입니다."},
    "blue_4": {"name": "4번 부스", "description": "부스 4입니다."},
    "blue_5": {"name": "5번 부스", "description": "부스 5입니다."},
    "blue_6": {"name": "6번 부스", "description": "부스 6입니다."},
    "blue_7": {"name": "7번 부스", "description": "부스 7입니다."},
    "blue_8": {"name": "8번 부스", "description": "부스 8입니다."},
    "blue_9": {"name": "9번 부스", "description": "부스 9입니다."},
    "blue_10": {"name": "10번 부스", "description": "부스 10입니다."},
    "green_11": {"name": "11번 부스", "description": "부스 11입니다."},
    "green_12": {"name": "12번 부스", "description": "부스 12입니다."},
    "green_13": {"name": "13번 부스", "description": "부스 13입니다."},
    "green_14": {"name": "14번 부스", "description": "부스 14입니다."},
    "green_15": {"name": "15번 부스", "description": "부스 15입니다."},
    "green_16": {"name": "16번 부스", "description": "부스 16입니다."},
    "green_17": {"name": "17번 부스", "description": "부스 17입니다."},
    "green_18": {"name": "18번 부스", "description": "부스 18입니다."},
    "green_19": {"name": "19번 부스", "description": "부스 19입니다."},
    "green_20": {"name": "20번 부스", "description": "부스 20입니다."},
    "green_21": {"name": "21번 부스", "description": "부스 21입니다."},
    "food_1": {"name": "만동만길", "description": "떡순어묵"},
    "food_2": {"name": "VIP", "description": "크림, 칠리새우"},
    "food_3": {"name": "키다리푸드", "description": "야끼소바, 오코노미야끼"},
    "food_4": {"name": "부엉이푸드", "description": "닭꼬치"},
    "food_5": {"name": "로드리", "description": "야채곱창, 무뼈닭발"},
    "food_6": {"name": "뽀라츄러스", "description": "츄러스, 아이스크림"},
    "food_7": {"name": "이삭", "description": "생과일주스, 과일화채 등"},
    "food_8": {"name": "알코홀릭", "description": "주류판매"},
    "food_9": {"name": "톡톡팡팡", "description": "구슬아이스크림"},
    "food_10": {"name": "핑크제이", "description": "소고기불초밥, 연어초밥"},
    "food_11": {"name": "꽃길만걷자6", "description": "스테이크&덮밥"},
    "food_12": {"name": "유에프오", "description": "뉴욕핫도그, 감자튀김"},
    "food_13": {"name": "꽃길만걷자", "description": "닭강정"},
    "food_14": {"name": "명리푸드", "description": "통닭, 목살바베큐"},
    "food_15": {"name": "타임푸드", "description": "타코야끼"}
}



    booth = booth_data.get(booth_id)
    if booth:
        return render_template('booth_info.html', booth=booth)
    else:
        return render_template('404.html', status=404)  # 부스를 찾을 수 없는 경우
