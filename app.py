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
        "details": "추후 안내",
        "image": "booth_blue.jpg"
    },
    "blue_2": {
        "name": "운영 부스",
        "number": "2",
        "description": "운영 부스입니다.",
        "details": "추후 안내",
        "image": "booth_blue.jpg"
    },
    "blue_3": {
        "name": "부스 3",
        "number": "3",
        "description": "부스 3입니다.",
        "details": "추후 안내",
        "image": "booth_blue.jpg"
    },
    "blue_4": {
        "name": "부스 4",
        "number": "4",
        "description": "부스 4입니다.",
        "details": "추후 안내",
        "image": "booth_blue.jpg"
    },
    "blue_5": {
        "name": "부스 5",
        "number": "5",
        "description": "부스 5입니다.",
        "details": "추후 안내",
        "image": "booth_blue.jpg"
    },
    "blue_6": {
        "name": "부스 6",
        "number": "6",
        "description": "부스 6입니다.",
        "details": "추후 안내",
        "image": "booth_blue.jpg"
    },
    "blue_7": {
        "name": "부스 7",
        "number": "7",
        "description": "부스 7입니다.",
        "details": "추후 안내",
        "image": "booth_blue.jpg"
    },
    "blue_8": {
        "name": "부스 8",
        "number": "8",
        "description": "부스 8입니다.",
        "details": "추후 안내",
        "image": "booth_blue.jpg"
    },
    "blue_9": {
        "name": "부스 9",
        "number": "9",
        "description": "부스 9입니다.",
        "details": "추후 안내",
        "image": "booth_blue.jpg"
    },
    "blue_10": {
        "name": "부스 10",
        "number": "10",
        "description": "부스 10입니다.",
        "details": "추후 안내",
        "image": "booth_blue.jpg"
    },
    "green_11": {
        "name": "부스 11",
        "number": "11",
        "description": "부스 11입니다.",
        "details": "추후 안내",
        "image": "booth_green.jpg"
    },
    "green_12": {
        "name": "부스 12",
        "number": "12",
        "description": "부스 12입니다.",
        "details": "추후 안내",
        "image": "booth_green.jpg"
    },
    "green_13": {
        "name": "부스 13",
        "number": "13",
        "description": "부스 13입니다.",
        "details": "추후 안내",
        "image": "booth_green.jpg"
    },
    "green_14": {
        "name": "부스 14",
        "number": "14",
        "description": "부스 14입니다.",
        "details": "추후 안내",
        "image": "booth_green.jpg"
    },
    "green_15": {
        "name": "부스 15",
        "number": "15",
        "description": "부스 15입니다.",
        "details": "추후 안내",
        "image": "booth_green.jpg"
    },
    "green_16": {
        "name": "부스 16",
        "number": "16",
        "description": "부스 16입니다.",
        "details": "추후 안내",
        "image": "booth_green.jpg"
    },
    "green_17": {
        "name": "부스 17",
        "number": "17",
        "description": "부스 17입니다.",
        "details": "추후 안내",
        "image": "booth_green.jpg"
    },
    "green_18": {
        "name": "부스 18",
        "number": "18",
        "description": "부스 18입니다.",
        "details": "추후 안내",
        "image": "booth_green.jpg"
    },
    "green_19": {
        "name": "부스 19",
        "number": "19",
        "description": "부스 19입니다.",
        "details": "추후 안내",
        "image": "booth_green.jpg"
    },
    "green_20": {
        "name": "부스 20",
        "number": "20",
        "description": "부스 20입니다.",
        "details": "추후 안내",
        "image": "booth_green.jpg"
    },
    "green_21": {
        "name": "부스 21",
        "number": "21",
        "description": "부스 21입니다.",
        "details": "추후 안내",
        "image": "booth_green.jpg"
    },
    "food_1": {
        "name": "푸드트럭 1",
        "number": "22",
        "description": "추후 안내",
        "details": "추후 안내",
        "image": "hotdog.jpg"
    },
    "food_2": {
        "name": "푸드트럭 2",
        "number": "23",
        "description": "추후 안내",
        "details": "추후 안내",
        "image": "desert.jpg"
    },
    "food_3": {
        "name": "푸드트럭 3",
        "number": "24",
        "description": "추후 안내",
        "details": "추후 안내",
        "image": "desert.jpg"
    },
    "food_4": {
        "name": "푸드트럭 4",
        "number": "25",
        "description": "추후 안내",
        "details": "추후 안내",
        "image": "desert.jpg"
    },
    "food_5": {
        "name": "푸드트럭 5",
        "number": "26",
        "description": "추후 안내",
        "details": "추후 안내",
        "image": "desert.jpg"
    },
    "food_6": {
        "name": "푸드트럭 6",
        "number": "27",
        "description": "추후 안내",
        "details": "추후 안내",
        "image": "desert.jpg"
    },
    "food_7": {
        "name": "푸드트럭 7",
        "number": "28",
        "description": "추후 안내",
        "details": "추후 안내",
        "image": "desert.jpg"
    },
    "food_8": {
        "name": "푸드트럭 8",
        "number": "29",
        "description": "추후 안내",
        "details": "추후 안내",
        "image": "desert.jpg"
    },
    "food_9": {
        "name": "푸드트럭 9",
        "number": "30",
        "description": "추후 안내",
        "details": "추후 안내",
        "image": "desert.jpg"
    },
    "food_10": {
        "name": "푸드트럭 10",
        "number": "31",
        "description": "추후 안내",
        "details": "추후 안내",
        "image": "desert.jpg"
    },
    "food_11": {
        "name": "푸드트럭 11",
        "number": "32",
        "description": "추후 안내",
        "details": "추후 안내",
        "image": "desert.jpg"
    },
    "food_12": {
        "name": "푸드트럭 12",
        "number": "33",
        "description": "추후 안내",
        "details": "추후 안내",
        "image": "desert.jpg"
    },
    "food_13": {
        "name": "푸드트럭 13",
        "number": "34",
        "description": "추후 안내",
        "details": "추후 안내",
        "image": "desert.jpg"
    },
    "food_14": {
        "name": "푸드트럭 14",
        "number": "35",
        "description": "추후 안내",
        "details": "추후 안내",
        "image": "desert.jpg"
    },
    "food_15": {
        "name": "푸드트럭 15",
        "number": "36",
        "description": "추후 안내",
        "details": "추후 안내",
        "image": "desert.jpg"
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