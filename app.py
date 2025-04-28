from flask import Flask, render_template, abort
import os
from views import booth_blueprint  # views.py에서 Blueprint 가져오기

app = Flask(__name__)

# Blueprint 등록
app.register_blueprint(booth_blueprint, url_prefix='/booth')

# 부스 정보 설정
booths = {
    "blue_1": {
        "name": "안내 부스 1",
        "number": "1",
        "description": "안내 부스 1입니다.",
        "details": "추후 안내",
        "image": "booth_blue.jpg"
    },
    "blue_2": {
        "name": "안내 부스 2",
        "number": "2",
        "description": "안내 부스 2입니다.",
        "details": "추후 안내내",
        "image": "booth_blue.jpg"
    },
    "green_3": {
        "name": "서화 총학생회",
        "number": "4",
        "description": "서화총학생회 입니다.",
        "details": "추후 안내",
        "image": "booth_green.jpg"
    },
    "food_1": {
        "name": "푸드트럭 1",
        "number": "5",
        "description": "추후 안내",
        "details": "추후 안내",
        "image": "hotdog.jpg"
    },
    "food_2": {
        "name": "푸드트럭 2",
        "number": "6",
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
        "og_url": "https://seohwa.store",
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
        {
            'name': '유재석',
            'job': '국민MC',
            'songs': [
                {'album': '무한도전', 'artist': '유재석', 'image': 'mudo.jpg'},
                {'album': '런닝맨', 'artist': '유재석', 'image': 'runningman.jpg'},
                {'album': '유퀴즈', 'artist': '유재석', 'image': 'uquiz.jpg'}
            ]
        },
        {
            'name': '강호동',
            'job': '천하장사',
            'songs': [
                {'album': '1박2일', 'artist': '강호동', 'image': 'day.jpg'},
                {'album': '아는형님', 'artist': '강호동', 'image': 'ahyung.jpg'},
                {'album': '강심장', 'artist': '강호동', 'image': 'strongheart.jpg'}
            ]
        }
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
    "apink": {
        "name": "에이핑크",
        "image": "apink_festa_insta.jpg",
        "description": "에이핑크는 2011년 데뷔한 대한민국의 걸그룹으로, 청순한 콘셉트로 많은 사랑을 받고 있습니다."
    },
    "roy": {
        "name": "로이킴",
        "image": "roy_festa_insta.jpg",
        "description": "로이킴은 감성적인 음색으로 많은 히트곡을 낸 싱어송라이터입니다."
    },
    "gummy": {
        "name": "거미",
        "image": "gummy_festa_insta.jpg",
        "description": "거미는 폭발적인 가창력으로 사랑받는 보컬리스트입니다."
    },
    "kwon-eunbi": {
        "name": "권은비",
        "image": "kwon_eunbi_festa_insta.jpg",
        "description": "권은비는 솔로 가수이자 댄서로 다채로운 퍼포먼스를 선보입니다."
    },
    "glen-chenck": {
        "name": "글렌체크",
        "image": "glen_cenck_festa_insta.jpg",
        "description": "글렌체크는 전자 음악 기반의 밴드로 개성 있는 음악을 만듭니다."
    },
    "choi-yu-ree": {
        "name": "최유리",
        "image": "choi_yu_ree_festa_insta.jpg",
        "description": "최유리는 서정적인 감성의 싱어송라이터입니다."
    },
    "creespy": {
        "name": "크리스피",
        "image": "creespy_festa_insta.jpg",
        "description": "크리스피는 재기발랄한 음악 스타일로 젊은 층에게 인기가 많습니다."
    }
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