from flask import Flask, render_template
import os

app = Flask(__name__)

# 메인 페이지 (로고 및 날짜 포함)
@app.route('/')
def home():
    meta_info = {
        "og_title": "서화 총학생회",
        "og_description": "90년의 동화를, 100년의 서약으로",
        "og_image": "https://seohwa.store/images/thumbnail2.png",
        "og_url": "https://seohwa.store",
        "og_type": "website",
        "favicon": "images/favicon.ico"  # 파비콘 경로
    }
    return render_template("home.html", page_title="서화 총학생회", show_header_info=True, meta_info=meta_info)

# 공지사항 페이지
@app.route('/notice')
def notice():
    return render_template("notice.html", page_title="공지사항", show_header_info=False)

# 부스 & 푸드트럭 페이지
@app.route('/booth-food')
def booth_food():
    return render_template("booth_food.html", page_title="부스 & 푸드트럭", show_header_info=False)

# 라인업페이지
# Flask 뷰 함수 예시
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

@app.route('/creator')
def creator():
    return render_template("creator.html", page_title="사이트 제작자", show_header_info=False)

@app.route('/artist/<name>')
def artist_detail(name):
    """
    /artist/<name> 경로로 접근 시
    templates/artist/<name>.html 파일을 찾아 렌더링합니다.
    파일이 없으면 404 에러를 반환합니다.
    """
    filename = f"artist/{name}.html"
    full_path = os.path.join(app.template_folder, filename)

    if os.path.exists(full_path):
        return render_template(filename)
    else:
        return abort(404)
    
booths = {
    1: {"name": "부스(파랑)", "description": "재미있는 체험이 가득한 부스입니다.", "number": "1-4", "details": "이 부스에서는 다양한 체험 활동이 준비되어 있습니다. 아이부터 어른까지 모두 참여할 수 있습니다."},
    2: {"name": "부스(주황)", "description": "다양한 음식을 제공하는 부스입니다.", "number": "2-1", "details": "주황색 부스에서는 특선 메뉴와 함께 다양한 음식을 즐길 수 있습니다."},
    3: {"name": "부스(초록)", "description": "체험형 놀이 부스입니다.", "number": "3-3", "details": "초록색 부스에서는 다양한 체험 활동이 제공됩니다. 가족 단위로 즐길 수 있습니다."}
}

@app.route('/booth/<int:booth_id>')
def booth_info(booth_id):
    # 부스 정보를 booth_id를 이용해 가져오기
    booth = booths.get(booth_id)
    
    if booth:
        return render_template('booth-info.html', booth=booth)
    else:
        return "부스 정보를 찾을 수 없습니다.", 404
# 서버 실행
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)

