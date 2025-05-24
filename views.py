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
    "blue_3": {"name": "또굿집", "description": "축제준비위원회", "image_url": "/static/images/booth_blue.jpg"},
    "blue_4": {"name": "과일을 찾아라!", "description": "총학생회(서화)", "image_url": "/static/images/booth_blue.jpg"},
    "blue_5": {"name": "슬리퍼 발로 차", "description": "총동아리연합회(결)", "image_url": "/static/images/booth_blue.jpg"},
    "blue_6": {"name": "탁구공 던지기 게임", "description": "그린스마트팜스쿨학생회(화랑)", "image_url": "/static/images/booth_blue.jpg"},
    "blue_7": {"name": "소원을 말해봐", "description": "우주항공첨단소재스쿨학생회(SO:ONE)", "image_url": "/static/images/booth_blue.jpg"},
    "blue_8": {"name": "2025년 마약류 중독 및 오남용 예방 캠페인", "description": "약학대학 학생회(도파민)", "image_url": "/static/images/booth_blue.jpg"},
    "blue_9": {"name": "월하랑 놀자", "description": "애니메이션문화콘텐츠스쿨", "image_url": "/static/images/booth_blue.jpg"},
    "blue_10": {"name": "GTEP 사업단", "description": "GTEP 사업단", "image_url": "/static/images/booth_blue.jpg"},
    "green_11": {"name": "양말목 티코스터&음료 리필스테이션", "description": "중앙 동아리(새순)", "image_url": "/static/images/booth_green.jpg"},
    "green_12": {"name": "취향을 담은 꾸러미", "description": "창업동아리(방향을 잡는 사람들)", "image_url": "/static/images/booth_green.jpg"},
    "green_13": {"name": "디망쉬", "description": "디망쉬", "image_url": "/static/images/booth_green.jpg"},
    "green_14": {"name": "대학본부 1", "description": "대학본부 1", "image_url": "/static/images/booth_green.jpg"},
    "green_15": {"name": "대학본부 2", "description": "대학본부 2", "image_url": "/static/images/booth_green.jpg"},
    "green_16": {"name": "대학본부 3", "description": "대학본부 3", "image_url": "/static/images/booth_green.jpg"},
    "green_17": {"name": "대학본부 4", "description": "대학본부 4", "image_url": "/static/images/booth_green.jpg"},
    "green_18": {"name": "대학본부 5", "description": "대학본부 5", "image_url": "/static/images/booth_green.jpg"},
    "green_19": {"name": "대학본부 6", "description": "대학본부 6", "image_url": "/static/images/booth_green.jpg"},
    "green_20": {"name": "동화 속 한 장면", "description": "인생네컷", "image_url": "/static/images/booth_green.jpg"},
    "green_21": {"name": "동화 속 한 장면", "description": "인생네컷", "image_url": "/static/images/booth_green.jpg"},
    "food_1": {"name": "만동만길", "description": "떡순어묵", "image_url": "/static/images/hotdog.jpg"},
    "food_2": {"name": "VIP", "description": "크림, 칠리새우", "image_url": "/static/images/hotdog.jpg"},
    "food_3": {"name": "키다리푸드", "description": "야끼소바, 오코노미야끼", "image_url": "/static/images/hotdog.jpg"},
    "food_4": {"name": "부엉이푸드", "description": "닭꼬치", "image_url": "/static/images/hotdog.jpg"},
    "food_5": {"name": "로드리", "description": "야채곱창, 무뼈닭발", "image_url": "/static/images/hotdog.jpg"},
    "food_6": {"name": "뽀라츄러스", "description": "츄러스, 아이스크림", "image_url": "/static/images/hotdog.jpg"},
    "food_7": {"name": "이삭", "description": "생과일주스, 과일화채 등", "image_url": "/static/images/hotdog.jpg"},
    "food_8": {"name": "알코홀릭", "description": "주류판매", "image_url": "/static/images/hotdog.jpg"},
    "food_9": {"name": "톡톡팡팡", "description": "구슬아이스크림", "image_url": "/static/images/hotdog.jpg"},
    "food_10": {"name": "핑크제이", "description": "소고기불초밥, 연어초밥", "image_url": "/static/images/hotdog.jpg"},
    "food_11": {"name": "꽃길만걷자6", "description": "스테이크&덮밥", "image_url": "/static/images/hotdog.jpg"},
    "food_12": {"name": "유에프오", "description": "뉴욕핫도그, 감자튀김", "image_url": "/static/images/hotdog.jpg"},
    "food_13": {"name": "꽃길만걷자", "description": "닭강정", "image_url": "/static/images/hotdog.jpg"},
    "food_14": {"name": "명리푸드", "description": "통닭, 목살바베큐", "image_url": "/static/images/hotdog.jpg"},
    "food_15": {"name": "타임푸드", "description": "타코야끼", "image_url": "/static/images/hotdog.jpg"}
}



    booth = booth_data.get(booth_id)
    if booth:
        return render_template('booth_info.html', booth=booth)
    else:
        return render_template('404.html', status=404)  # 부스를 찾을 수 없는 경우
