from flask import Flask, render_template, abort
import os
from views import booth_blueprint  # views.py에서 Blueprint 가져오기

app = Flask(__name__)

# Blueprint 등록
app.register_blueprint(booth_blueprint, url_prefix='/booth')

# 부스 정보 설정
booths = {
    "blue_1": {
        "name": "운영 부스",
        "number": "1",
        "description": "운영 부스입니다.",
        "details": "추후 안내"
    },
    "blue_2": {
        "name": "운영 부스",
        "number": "2",
        "description": "운영 부스입니다.",
        "details": "추후 안내"
    },
    "blue_3": {
        "name": "또굿집",
        "number": "3",
        "description": "축제준비위원회",
        "details": "Fairy Tale 향림 대동제의 MD를 현장구매·수령할 수 있는 부스"
    },
    "blue_4": {
        "name": "과일을 찾아라!",
        "number": "4",
        "description": "총학생회(서화)",
        "details": "랜덤으로 보여주는 과일·채소 장난감이 일치하면 상품을 받는 확률형 게임형 부스"
    },
    "blue_5": {
        "name": "슬리퍼 발로 차",
        "number": "5",
        "description": "총동아리연합회(결)",
        "details": "슬리퍼를 던져 과녁에 넣는 게임을 체험할 수 있는 부스"
    },
    "blue_6": {
        "name": "탁구공 던지기 게임",
        "number": "6",
        "description": "그린스마트팜스쿨학생회(화랑)",
        "details": "탁구공을 던져서 맥주잔 안에 넣는 게임을 체험할 수 있는 부스"
    },
    "blue_7": {
        "name": "소원을 말해봐",
        "number": "7",
        "description": "우주항공첨단소재스쿨학생회(SO:ONE)",
        "details": "참가자가 동전 던지기 게임을 통해 소원을 적을 수 있는 부스"
    },
    "blue_8": {
        "name": "2025년 마약류 중독 및 오남용 예방 캠페인",
        "number": "8",
        "description": "약학대학 학생회(도파민)",
        "details": "약물고글 체험과 올바른 정보 제공을 통해 마약의 위험성을 알리고 안전한 학교 환경 조성을 위한 예방 캠페인을 진행하는 부스"
    },
    "blue_9": {
        "name": "월하랑 놀자",
        "number": "9",
        "description": "애니메이션문화콘텐츠스쿨",
        "details": "다채로운 게임과 추첨, SNS 연계 이벤트를 통해 즐거움과 상품을 동시에 제공하는 참여형 부스"
    },
    "blue_10": {
        "name": "GTEP 사업단",
        "number": "10",
        "description": "GTEP 사업단",
        "details": "국립순천대학교 GTEP 사업단 홍보활동 및 설명회를 진행하는 부스"
    },
    "green_11": {
        "name": "양말목 티코스터&음료 리필스테이션",
        "number": "11",
        "description": "중앙 동아리(새순)",
        "details": "업사이클링 공예와 음료 리필을 통해 탄소중립과 제로웨이스트를 실천하는 환경봉사 동아리 ‘새순’의 체험형 친환경 부스"
    },
    "green_12": {
        "name": "취향을 담은 꾸러미",
        "number": "12",
        "description": "창업동아리(방향을 잡는 사람들)",
        "details": "석고 방향제, 팔찌 제작 및 판매를 진행하는 부스"
    },
    "green_13": {
        "name": "디망쉬",
        "number": "13",
        "description": "디망쉬",
        "details": "캐릭터소품,굿즈류 판매와 포켓키링,비즈발만들기 체험 진행하는 부스"
    },
    "green_14": {
        "name": "대학본부 1",
        "number": "14",
        "description": "대학본부 1",
        "details": "추후 안내"
    },
    "green_15": {
        "name": "대학본부 2",
        "number": "15",
        "description": "대학본부 2",
        "details": "추후 안내"
    },
    "green_16": {
        "name": "대학본부 3",
        "number": "16",
        "description": "대학본부 3",
        "details": "추후 안내"
    },
    "green_17": {
        "name": "대학본부 4",
        "number": "17",
        "description": "대학본부 4",
        "details": "추후 안내"
    },
    "green_18": {
        "name": "대학본부 5",
        "number": "18",
        "description": "대학본부 5",
        "details": "추후 안내"
    },
    "green_19": {
        "name": "대학본부 6",
        "number": "19",
        "description": "대학본부 6",
        "details": "추후 안내"
    },
    "green_20": {
        "name": "동화 속 한 장면",
        "number": "20",
        "description": "총학생회(서화)",
        "details": "인생네컷"
    },
    "green_21": {
        "name": "동화 속 한 장면",
        "number": "21",
        "description": "총학생회(서화)",
        "details": "인생네컷"
    },
    "food_1": {
        "name": "만동만길",
        "number": "1",
        "description": "떡순어묵",
        "details": "떡볶이 : 6,000원\n순대 : 6,000원\n어묵(5개) : 6,000원\n우동 : 6,000원"
    },
    "food_2": {
        "name": "VIP",
        "number": "2",
        "description": "크림, 칠리새우",
        "details": "크림새우/칠리새우\n중 : 10,000원\n대 : 15,000원"
    },
    "food_3": {
        "name": "키다리푸드",
        "number": "3",
        "description": "야끼소바, 오코노미야끼",
        "details": "야끼소바 : 10,000원\n오코노미야끼 : 10,000원"
    },
    "food_4": {
        "name": "부엉이푸드",
        "number": "4",
        "description": "닭꼬치",
        "details": "닭꼬치 : 5,000원"
    },
    "food_5": {
        "name": "로드리",
        "number": "5",
        "description": "야채곱창, 무뼈닭발",
        "details": "야채곱창/무뼈닭발 : 13,000원"
    },
    "food_6": {
        "name": "뽀라츄러스",
        "number": "6",
        "description": "츄러스, 아이스크림",
        "details": "츄러스 : 4,000원\n아이스크림 : 4,000원\n아이스크림 츄러스 : 7,000원"
    },
    "food_7": {
        "name": "이삭",
        "number": "7",
        "description": "생과일주스, 과일화채",
        "details": "생과일쥬스 : 6,000원\n컵과일 : 7,000원\n과일화채 : 5,000원\n아이스 아메리카노 : 4,000원"
    },
    "food_8": {
        "name": "알코홀릭",
        "number": "8",
        "description": "주류판매",
        "details": "추후 안내"
    },
    "food_9": {
        "name": "톡톡팡팡",
        "number": "9",
        "description": "구슬아이스크림",
        "details": "구슬아이스크림\n싱글 : 4,000원\n더블 : 7,000\n전체 10,000원"
    },
    "food_10": {
        "name": "핑크제이",
        "number": "10",
        "description": "소고기불초밥, 연어초밥",
        "details": "소고기불초밥 : 12,000원\n 연어초밥 : 13,000원"
    },
    "food_11": {
        "name": "꽃길만걷자6",
        "number": "11",
        "description": "스테이크&덮밥",
        "details": "스테이크&덮밥 : 12,000원"
    },
    "food_12": {
        "name": "유에프오",
        "number": "12",
        "description": "뉴욕핫도그, 감자튀김",
        "details": "뉴욕핫도그(5종) : 5,500원\n감자튀김 : 5,000원\n세트 : 10,000원"
    },
    "food_13": {
        "name": "꽃길만걷자",
        "number": "13",
        "description": "닭강정",
        "details": "닭강정\n중 : 10,000원\n대 : 17,000원"
    },
    "food_14": {
        "name": "명리푸드",
        "number": "14",
        "description": "통닭, 목살바베큐",
        "details": "통닭바베큐 10,000원\n목살바베큐 18,000원"
    },
    "food_15": {
        "name": "타임푸드",
        "number": "15",
        "description": "타코야끼",
        "details": "타코야끼(10알) : 6,000원"
    }
}
# 메인 페이지 (로고 및 날짜 포함)
@app.route('/')
def home():
    meta_info = {
        "og_title": "국립순천대학교 서화총학생회 대동제",
        "og_description": "90년의 동화를, 100년의 서약으로",
        "og_image": "https://drive.google.com/u/0/drive-viewer/AKGpihbC0qWzrX1pstCoe2zJiVTr911OMZ7iJe9bwbiHfMoL25D-Hk-d63Y7siOYM-AuTYRrPfWc1efNHXjo17-fWfwigxxBSAM2=s1600-rw-v1",
        "og_url": "http://seohwa.store",
        "og_type": "website",
        "favicon": "images/favicon.ico"  # 파비콘 경로
    }
    return render_template("home.html", page_title="서화 총학생회", show_header_info=True, meta_info=meta_info)

# 부스 상세 페이지 라우트
@app.route("/booth_info/<booth_id>")
def booth_info(booth_id):
    booth = booths.get(booth_id)  # 부스 ID에 맞는 부스 정보 가져오기
    if booth:
        return render_template("booth_info.html", booth=booth)
    else:
        return abort(404)  # 부스 정보가 없으면 404 에러 반환

# 공지사항 페이지
@app.route('/notice')
def notice():
    return render_template("notice.html", page_title="공지사항", show_header_info=False)

# 부스 & 푸드트럭 페이지
@app.route('/booth-food')
def booth_food():
    return render_template("booth_food.html", page_title="부스 & 푸드트럭", show_header_info=False)

# 404 에러 페이지 처리
@app.errorhandler(404)
def not_found_error(error):
    return render_template('404.html'), 404

# 라인업 페이지
@app.route('/lineup')
def lineup():
    artist_data = [
       
    ]
    return render_template("lineup.html", page_title="라인업", artists=artist_data)

# 축제 일정 페이지
@app.route('/schedule')
def schedule():
    return render_template("schedule.html", page_title="축제 일정", show_header_info=False)

# QnA 페이지
@app.route('/qna')
def qna():
    return render_template("qna.html", page_title="자주 묻는 질문", show_header_info=False)

# 사이트 제작자 페이지
@app.route('/creator')
def creator():
    return render_template("creator.html", page_title="사이트 제작자", show_header_info=False)

# 아티스트 데이터 딕셔너리
artist_data = {
    
}

@app.route('/artist/<name>')
def artist_detail(name):
    artist = artist_data.get(name)
    if artist:
        return render_template("artist_detail.html", artist=artist)
    else:
        return render_template("404.html"), 404

# 서버 실행
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)