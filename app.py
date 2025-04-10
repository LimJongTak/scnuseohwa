from flask import Flask, render_template_string
import os  

app = Flask(__name__)

@app.route('/')
def home():
    return render_template_string('''
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>서화총학생회</title>
    <meta property="og:title" content="서화총학생회" />
    <meta property="og:description" content="2025년 국립순천대학교 대동제 1차 라인업" />
    <meta property="og:image" content="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMTdfOTMg%2FMDAxNjk3NTUzOTg2MTA0.gSsQkjIa5rPWf5unvG3aJBLnSGRFHjBJ2WINbtprCzUg.4CrMPrfv_mFch9NGukuol4bBFRWbxTJE0_7_L82QfSUg.JPEG.ka14410%2F1697553982351.jpg&type=sc960_832" />
    <meta property="og:url" content="https://scnuseohwa.site" />
    <meta property="og:type" content="website" />
    <link rel="stylesheet" href="{{ url_for('static', filename='css/header.css') }}" />
    <link rel="stylesheet" href="{{ url_for('static', filename='css/footer.css') }}" />
    <link rel="stylesheet" href="{{ url_for('static', filename='css/body.css') }}" />
</head>
<body>
    <!-- Header: Menu -->
    <div class="menu-container">
        <a href="/">메인</a>
        <a href="/notice">공지사항</a>
        <a href="/booth-food">부스 & 푸드트럭 리스트</a>
        <a href="/map">지도</a>
        <a href="/schedule">축제 일정</a>
        <a href="/qna">QnA</a>
    </div>

    <!-- Footer -->
    <div class="footer-container">
        <p class="footer-text">COPYRIGHT ⓒ 2025 국립순천대학교 서화총학생회 사이트 제작팀</p>
        <a href="https://scnu.ac.kr" class="footer-button">사이트 정보</a>
    </div>
</body>
</html>
    ''')

@app.route('/notice')
def notice():
    return render_template_string('''
<!DOCTYPE html>
<html lang="ko">
<head>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/notice.css') }}" />
</head>
<body>
    <div class="notice-container">
        <div class="notice-header">
            <h2>키워드 검색</h2>
        </div>
        <div class="notice-list">
            <div class="notice-item">
                <p>2024 강원대학교 백령대동제 개최 안내</p>
                <span>상세보기</span>
            </div>
            <div class="notice-item">
                <p>2024 강원대학교 백령대동제 개최 안내</p>
                <span>상세보기</span>
            </div>
            <div class="notice-item">
                <p>신규 게시물</p>
                <span>상세보기</span>
            </div>
            <!-- 추가 공지사항 항목들 -->
        </div>
        <div class="pagination">
            <button>1</button>
            <button>2</button>
        </div>
    </div>
</body>
</html>
    ''')

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))  
    app.run(host="0.0.0.0", port=port, debug=False)
