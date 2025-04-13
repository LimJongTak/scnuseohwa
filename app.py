from flask import Flask, render_template_string
import os  

app = Flask(__name__)

# 메인 페이지
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
    <meta property="og:image" content="..." />
    <meta property="og:url" content="https://scnuseohwa.site" />
    <meta property="og:type" content="website" />
    <link rel="stylesheet" href="{{ url_for('static', filename='css/header.css') }}" />
    <link rel="stylesheet" href="{{ url_for('static', filename='css/footer.css') }}" />
    <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}" />
    <style>
        .menu-open {
            display: none;
            flex-direction: column;
            background: rgba(255, 255, 255, 0.8);
            position: absolute;
            top: 70px;
            right: 20px;
            border-radius: 5px;
            padding: 10px;
            z-index: 999;
        }
        .menu-open a {
            color: #8E7DBE;
            text-decoration: none;
            padding: 10px;
        }
        .menu-open a:hover {
            background: #8E7DBE;
            color: white;
            border-radius: 5px;
        }
        @media (min-width: 769px) {
            .menu-open {
                display: flex !important;
                position: static;
                flex-direction: row;
                background: transparent;
                padding: 0;
            }
        }
    </style>
    <script>
        function toggleMenu() {
            const menu = document.getElementById('hamburger-menu');
            const menuBar = document.getElementById('menu-bar');
            if (menu.style.display === "flex") {
                menu.style.display = "none";
                menuBar.classList.remove("open");
            } else {
                menu.style.display = "flex";
                menuBar.classList.add("open");
            }
        }
    </script>
</head>
<body>
    <div class="container">
        <header class="header">
            <div class="logo">
                <img src="{{ url_for('static', filename='images/logo.svg') }}" width="350" height="350" />
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
            <div class="intro">
                <p>메인 페이지입니다.</p>
            </div>
        </div>

        <footer class="footer">
            <p class="footer-text">COPYRIGHT ⓒ 2025 국립순천대학교 서화총학생회</p>
            <a href="https://naver.com" class="footer-button">사이트 제작자</a>
        </footer>
    </div>
</body>
</html>
    ''')

# 공지사항 페이지
@app.route('/notice')
def notice():
    return render_template_string('''
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>공지사항</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/notice.css') }}" />
    <link rel="stylesheet" href="{{ url_for('static', filename='css/header.css') }}" />
    <link rel="stylesheet" href="{{ url_for('static', filename='css/footer.css') }}" />
    <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}" />
</head>
<body>
    <div class="container">
        <header class="header">
            <div class="logo">
                <img src="{{ url_for('static', filename='images/logo.svg') }}" alt="Fairy Tale Logo" width="350" height="350" />
            </div>
            <div>
                <h2>국립순천대학교</h2>
                <h2>2025. 05. 28. (수) ~ 05. 29.(목)</h2>
            </div>
            <script src="{{ url_for('static', filename='js/common.js') }}"></script>

        </header>

        <div class="main-content">
            <h2>공지사항</h2>
            <ul>
                <li><a href="#">2025 대동제 일정 공지</a></li>
                <li><a href="#">2025 대동제 참가 신청 안내</a></li>
                <li><a href="#">기타 공지사항</a></li>
            </ul>
        </div>

        <footer class="footer">
            <p class="footer-text">COPYRIGHT ⓒ 2025 국립순천대학교 서화총학생회</p>
            <a href="https://naver.com" class="footer-button">사이트 제작자</a>
        </footer>
    </div>
</body>
</html>
    ''')

# 부스 & 푸드트럭 페이지
@app.route('/booth-food')
def booth_food():
    return render_template_string('''
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>부스 & 푸드트럭</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/booth_food.css') }}" />
    <link rel="stylesheet" href="{{ url_for('static', filename='css/header.css') }}" />
    <link rel="stylesheet" href="{{ url_for('static', filename='css/footer.css') }}" />
    <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}" />                              
</head>
<body>
    <div class="container">
        <header class="header">
            <div class="logo">
                <img src="{{ url_for('static', filename='images/logo.svg') }}" alt="Fairy Tale Logo" width="350" height="350" />
            </div>
            <div>
                <h2>국립순천대학교</h2>
                <h2>2025. 05. 28. (수) ~ 05. 29.(목)</h2>
            </div>
            <div id="menu-bar" class="menu-bar" onclick="toggleMenu()">&#9776;</div>
            <script src="{{ url_for('static', filename='js/common.js') }}"></script>

        </header>

        <div class="main-content">
            <h2>부스 & 푸드트럭</h2>
            <ul>
                <li><a href="#">부스 1</a></li>
                <li><a href="#">푸드트럭 1</a></li>
                <li><a href="#">푸드트럭 2</a></li>
            </ul>
        </div>

        <footer class="footer">
            <p class="footer-text">COPYRIGHT ⓒ 2025 국립순천대학교 서화총학생회</p>
            <a href="https://naver.com" class="footer-button">사이트 제작자</a>
        </footer>
    </div>
</body>
</html>
    ''')

# 지도 페이지
@app.route('/map')
def map():
    return render_template_string('''
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>지도</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/header.css') }}" />
    <link rel="stylesheet" href="{{ url_for('static', filename='css/footer.css') }}" />
    <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}" />                              
</head>
<body>
    <div class="container">
        <header class="header">
            <div class="logo">
                <img src="{{ url_for('static', filename='images/logo.svg') }}" alt="Fairy Tale Logo" width="350" height="350" />
                
            </div>
            <div>
                <h2>국립순천대학교</h2>
                <h2>2025. 05. 28. (수) ~ 05. 29.(목)</h2>
            </div>
            <div id="menu-bar" class="menu-bar" onclick="toggleMenu()">&#9776;</div>
            <script src="{{ url_for('static', filename='js/common.js') }}"></script>

        </header>

        <div class="main-content">
            <h2>지도</h2>
            <p>여기 지도 정보를 추가할 수 있습니다.</p>
        </div>

        <footer class="footer">
            <p class="footer-text">COPYRIGHT ⓒ 2025 국립순천대학교 서화총학생회</p>
            <a href="https://naver.com" class="footer-button">사이트 제작자</a>
        </footer>
    </div>
</body>
</html>
    ''')

# 축제 일정 페이지
@app.route('/schedule')
def schedule():
    return render_template_string('''
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>축제 일정</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/header.css') }}" />
    <link rel="stylesheet" href="{{ url_for('static', filename='css/footer.css') }}" />
    <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}" />                              
</head>
<body>
    <div class="container">
        <header class="header">
            <div class="logo">
                <img src="{{ url_for('static', filename='images/logo.svg') }}" alt="Fairy Tale Logo" width="350" height="350" />
            </div>
            <div>
                <h2>국립순천대학교</h2>
                <h2>2025. 05. 28. (수) ~ 05. 29.(목)</h2>
            </div>
            <script src="{{ url_for('static', filename='js/common.js') }}"></script>

        </header>

        <div class="main-content">
            <h2>축제 일정</h2>
            <ul>
                <li>2025년 5월 28일 - 개막식</li>
                <li>2025년 5월 29일 - 폐막식</li>
            </ul>
        </div>

        <footer class="footer">
            <p class="footer-text">COPYRIGHT ⓒ 2025 국립순천대학교 서화총학생회</p>
            <a href="https://naver.com" class="footer-button">사이트 제작자</a>
        </footer>
    </div>
</body>
</html>
    ''')

# QnA 페이지
@app.route('/qna')
def qna():
    return render_template_string('''
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>QnA</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/header.css') }}" />
    <link rel="stylesheet" href="{{ url_for('static', filename='css/footer.css') }}" />
    <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}" />                              
</head>
<body>
    <div class="container">
        <header class="header">
            <div class="logo">
                <img src="{{ url_for('static', filename='images/logo.svg') }}" alt="Fairy Tale Logo" width="350" height="350" />
            </div>
            <div>
                <h2>국립순천대학교</h2>
                <h2>2025. 05. 28. (수) ~ 05. 29.(목)</h2>
            </div>
            <script src="{{ url_for('static', filename='js/common.js') }}"></script>

        </header>

        <div class="main-content">
            <h2>QnA</h2>
            <p>여기 QnA를 추가할 수 있습니다.</p>
        </div>

        <footer class="footer">
            <p class="footer-text">COPYRIGHT ⓒ 2025 국립순천대학교 서화총학생회</p>
            <a href="https://naver.com" class="footer-button">사이트 제작자</a>
        </footer>
    </div>
</body>
</html>
    ''')

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))  
    app.run(host="0.0.0.0", port=port, debug=False)
