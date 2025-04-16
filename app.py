from flask import Flask, render_template
import os

app = Flask(__name__)

from flask import make_response

@app.after_request
def apply_cache_control(response):
    response.cache_control.no_store = True  # 캐시 저장 안 함
    return response

# 메인 페이지 (로고 및 날짜 포함)
@app.route('/')
def home():
    return render_template("home.html", 
                           page_title="서화 총학생회", 
                           show_header_info=True,
                           og_title="서화 총학생회",
                           og_description="90년의 동화를, 100년의 서약으로",
                           og_image="https://i.ibb.co/8DHYXP0h/1744819412419.png", 
                           og_url="https://scnuseohwa.site")

# 공지사항 페이지
@app.route('/notice')
def notice():
    return render_template("notice.html", 
                           page_title="공지사항", 
                           show_header_info=False,
                           og_title="서화 총학생회 - 공지사항",
                           og_description="서화 총학생회의 최신 공지사항을 확인해 보세요.",
                           og_image="https://i.ibb.co/8DHYXP0h/1744819412419.png", 
                           og_url="https://scnuseohwa.site/notice")

# 부스 & 푸드트럭 페이지
@app.route('/booth-food')
def booth_food():
    return render_template("booth_food.html", 
                           page_title="부스 & 푸드트럭", 
                           show_header_info=False,
                           og_title="서화 총학생회 - 부스 & 푸드트럭",
                           og_description="서화 총학생회의 부스와 푸드트럭 정보를 확인하세요.",
                           og_image="https://i.ibb.co/8DHYXP0h/1744819412419.png", 
                           og_url="https://scnuseohwa.site/booth-food")

# 라인업 페이지
@app.route('/lineup')
def lineup():
    return render_template("lineup.html", 
                           page_title="라인업", 
                           show_header_info=False,
                           og_title="서화 총학생회 - 라인업",
                           og_description="서화 총학생회의 라인업을 확인해 보세요.",
                           og_image="https://i.ibb.co/8DHYXP0h/1744819412419.png", 
                           og_url="https://scnuseohwa.site/lineup")

# 축제 일정 페이지
@app.route('/schedule')
def schedule():
    return render_template("schedule.html", 
                           page_title="축제 일정", 
                           show_header_info=False,
                           og_title="서화 총학생회 - 축제 일정",
                           og_description="서화 총학생회의 축제 일정을 확인해 보세요.",
                           og_image="https://i.ibb.co/8DHYXP0h/1744819412419.png", 
                           og_url="https://scnuseohwa.site/schedule")

# QnA 페이지
@app.route('/qna')
def qna():
    return render_template("qna.html", 
                           page_title="자주 묻는 질문", 
                           show_header_info=False,
                           og_title="서화 총학생회 - 자주 묻는 질문",
                           og_description="서화 총학생회의 자주 묻는 질문을 확인해 보세요.",
                           og_image="https://i.ibb.co/8DHYXP0h/1744819412419.png", 
                           og_url="https://scnuseohwa.site/qna")

@app.route('/creator')
def creator():
    return render_template("creator.html", 
                           page_title="사이트 제작자", 
                           show_header_info=False,
                           og_title="서화 총학생회 - 사이트 제작자",
                           og_description="서화 총학생회의 사이트를 제작한 사람들을 소개합니다.",
                           og_image="https://i.ibb.co/8DHYXP0h/1744819412419.png", 
                           og_url="https://scnuseohwa.site/creator")

booths = {
    1: {"name": "부스(파랑)", "description": "재미있는 체험이 가득한 부스입니다.", "number": "1-4", "details": "이 부스에서는 다양한 체험 활동이 준비되어 있습니다. 아이부터 어른까지 모두 참여할 수 있습니다."},
    2: {"name": "부스(주황)", "description": "다양한 음식을 제공하는 부스입니다.", "number": "2-1", "details": "주황색 부스에서는 특선 메뉴와 함께 다양한 음식을 즐길 수 있습니다."},
    3: {"name": "부스(초록)", "description": "체험형 놀이 부스입니다.", "number": "3-3", "details": "초록색 부스에서는 다양한 체험 활동이 제공됩니다. 가족 단위로 즐길 수 있습니다."}
}

@app.route('/booth/<int:booth_id>')
def booth_info(booth_id):
    booth = booths.get(booth_id)
    
    if booth:
        return render_template('booth-info.html', booth=booth)
    else:
        return "부스 정보를 찾을 수 없습니다.", 404

# 서버 실행
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
