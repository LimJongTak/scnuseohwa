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
    <style>
        body {
            background: radial-gradient(circle at center, #8E7DBE 0%, #A6D6D6 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .gift-container {
            width: 320px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            text-align: center;
            overflow: hidden;
        }
        img { width: 100%; }
        button {
            background-color: #0dbfef;
            border: none; color: white;
            padding: 10px 20px; font-size: 16px;
            cursor: pointer; border-radius: 5px; margin-bottom: 15px;
        }
        h3 { padding: 0 10px; }
        a { text-decoration: none; color: white; }
    </style>
</head>
<body>
    <div class="gift-container">
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMTdfOTMg%2FMDAxNjk3NTUzOTg2MTA0.gSsQkjIa5rPWf5unvG3aJBLnSGRFHjBJ2WINbtprCzUg.4CrMPrfv_mFch9NGukuol4bBFRWbxTJE0_7_L82QfSUg.JPEG.ka14410%2F1697553982351.jpg&type=sc960_832" alt="1차라인업 실루엣">
        <h3>1차 라인업</h3>
        <p>2025년 국립순천대학교 대동제 1차 라인업</p>
        <button onclick="window.location.href='/gift'">라인업 보러가기</button>
    </div>
</body>
</html>
    ''')

# 중간 안내 페이지 추가 (배경 동일하게 적용)
@app.route('/gift')
def gift():
    return render_template_string('''
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>라인업 바로가기</title>
    <style>
        body {
            background: radial-gradient(circle at center, #8E7DBE 0%, #A6D6D6 100%);
            display: flex;
            align-items: center; justify-content: center;
            height: 100vh; margin: 0;
            font-family: Arial, sans-serif;
        }
        .redirect-container {
            text-align: center; background-color: #fff;
            padding: 20px; border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        a {
            text-decoration: none; color: white;
            padding: 10px 20px; background-color: #0dbfef;
            border-radius: 5px; display: inline-block;
            font-size: 16px; margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="redirect-container">
        <h3>1차 라인업 영상 보러가기</h3>
        <p>아래 버튼을 눌러 영상을 확인하세요!</p>
        <a href="https://www.youtube.com/shorts/S0fz__s5Aew" target="_blank">영상 보러가기 ▶</a>
    </div>
</body>
</html>
''')

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))  
    app.run(host="0.0.0.0", port=port, debug=False)
