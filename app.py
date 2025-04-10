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
    <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}" />
</head>
<body>
    <div class="container">
        <header class="header">
            <header class="header">
    <!-- 로고 -->
    <div class="logo">
        <img src="{{ url_for('static', filename='images/logo.svg') }}" alt="Fairy Tale Logo" width="350" height="350" />
    </div>
    <div>
        <h2>국립순천대학교</h2>
        <h2>2025. 05. 28. (수) ~ 05. 29.(목)</h2>
    </div>
    <div>
        <p> 메뉴 넣을 자리 </p>
    </div>
    <!-- 네비게이션 메뉴 -->
    <nav class="menu">
        <a href="/">메인</a>
        <a href="/notice">공지사항</a>
        <a href="/booth-food">부스 & 푸드트럭 리스트</a>
        <a href="/map">지도</a>
        <a href="/schedule">축제 일정</a>
        <a href="/qna">QnA</a>
    </nav>

    <!-- 햄버거 메뉴 버튼 -->
    <div class="menu-bar" onclick="toggleMenu()">&#9776;</div>

    <!-- 숨겨진 메뉴 -->
    <div class="menu-open">
        <a href="/">메인</a>
        <a href="/notice">공지사항</a>
        <a href="/booth-food">부스 & 푸드트럭 리스트</a>
        <a href="/map">지도</a>
        <a href="/schedule">축제 일정</a>
        <a href="/qna">QnA</a>
    </div>
</header>


        <div class="main-content">
            <div class="intro">
            </div>
        </div>

        <footer class="footer">
            <p class="footer-text">COPYRIGHT ⓒ 2025 국립순천대학교 서화총학생회</p>
            <a href="https://naver.com" class="footer-button">사이트 제작자</a>
        </footer>
    </div>

    <script>
        // 햄버거 메뉴 아이콘 클릭 시 토글 기능
function toggleMenu() {
    const menu = document.querySelector('.menu-open');
    const menuBar = document.querySelector('.menu-bar');
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        menuBar.classList.remove('open');
    } else {
        menu.style.display = "flex";
        menuBar.classList.add('open');  // 이 부분에서 'open' 클래스를 추가하여 X로 변경
    }
}


    </script>
</body>
</html>
    ''')


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))  
    app.run(host="0.0.0.0", port=port, debug=False)
