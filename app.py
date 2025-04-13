from flask import Flask, render_template
import os

app = Flask(__name__)

# 메인 페이지 (로고 및 날짜 포함)
@app.route('/')
def home():
    return render_template("home.html", page_title="서화총학생회", show_header_info=True)

# 공지사항 페이지
@app.route('/notice')
def notice():
    return render_template("notice.html", page_title="공지사항", show_header_info=False)

# 부스 & 푸드트럭 페이지
@app.route('/booth-food')
def booth_food():
    return render_template("booth_food.html", page_title="부스 & 푸드트럭", show_header_info=False)

# 지도 페이지
@app.route('/map')
def map_page():
    return render_template("map.html", page_title="지도", show_header_info=False)

# 축제 일정 페이지
@app.route('/schedule')
def schedule():
    return render_template("schedule.html", page_title="축제 일정", show_header_info=False)

# QnA 페이지
@app.route('/qna')
def qna():
    return render_template("qna.html", page_title="자주 묻는 질문", show_header_info=False)

# 서버 실행
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
