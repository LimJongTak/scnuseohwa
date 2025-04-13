from flask import Flask, render_template_string, url_for
import os

app = Flask(__name__)

# 공통 HTML 템플릿 생성 함수
def generate_template(page_title, content_html):
    return render_template_string(f'''
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>{page_title}</title>
    <link rel="stylesheet" href="{{{{ url_for('static', filename='css/header.css') }}}}" />
    <link rel="stylesheet" href="{{{{ url_for('static', filename='css/footer.css') }}}}" />
    <link rel="stylesheet" href="{{{{ url_for('static', filename='css/style.css') }}}}" />
    <script>
        function toggleMenu() {{
            const menu = document.getElementById('hamburger-menu');
            const menuBar = document.getElementById('menu-bar');
            if (menu.style.display === "flex") {{
                menu.style.display = "none";
                menuBar.classList.remove("open");
            }} else {{
                menu.style.display = "flex";
                menuBar.classList.add("open");
            }}
        }}
    </script>
</head>
<body>
    <div class="container">
        <header class="header">
            <div class="logo">
                <img src="{{{{ url_for('static', filename='images/logo.svg') }}}}" width="350" height="350" />
            </div>
            <div>
                <h2>국립순천대학교</h2>
                <h2>2025. 05. 28. (수) ~ 05. 29.(목)</h2>
            </div>
            <div id="menu-bar" class="menu-bar" onclick="toggleMenu()">&#9776;</div>
            <nav id="hamburger-menu" class="menu-open">
                <a href="/">메인</a>
                <a href="/notice">공지사항</a>
                <a href="/booth-food">부스&푸드트럭</a>
                <a href="/map">지도</a>
                <a href="/schedule">축제 일정</a>
                <a href="/qna">QnA</a>
            </nav>
        </header>

        <div class="main-content">
            {content_html}
        </div>

        <footer class="footer">
            <p class="footer-text">COPYRIGHT Ⓒ 2025 국립순천대학교 서화총학생회</p>
            <a href="https://naver.com" class="footer-button">사이트 제작자</a>
        </footer>
    </div>
</body>
</html>
''')

@app.route('/')
def home():
    content = '<div class="intro"><p>메인 페이지입니다.</p></div>'
    return generate_template("서화총학생회", content)

@app.route('/notice')
def notice():
    content = '''
        <h2>공지사항</h2>
        <ul>
            <li><a href="#">2025 대동제 일정 공지</a></li>
            <li><a href="#">2025 대동제 참가 신청 안내</a></li>
            <li><a href="#">기타 공지사항</a></li>
        </ul>
    '''
    return generate_template("공지사항", content)

@app.route('/booth-food')
def booth_food():
    content = '''
        <h2>부스 & 푸드트럭</h2>
        <ul>
            <li><a href="#">부스 1</a></li>
            <li><a href="#">푸드트럭 1</a></li>
            <li><a href="#">푸드트럭 2</a></li>
        </ul>
    '''
    return generate_template("부스 & 푸드트럭", content)

@app.route('/map')
def map():
    content = '<h2>지도</h2><p>여기 지도 정보를 추가할 수 있습니다.</p>'
    return generate_template("지도", content)

@app.route('/schedule')
def schedule():
    content = '''
        <h2>축제 일정</h2>
        <ul>
            <li>2025년 5월 28일 - 개막식</li>
            <li>2025년 5월 29일 - 폐막식</li>
        </ul>
    '''
    return generate_template("축제 일정", content)

@app.route('/qna')
def qna():
    content = '<h2>QnA</h2><p>여기 QnA를 추가할 수 있습니다.</p>'
    return generate_template("QnA", content)

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)