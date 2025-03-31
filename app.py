from flask import Flask, render_template_string, redirect
import os  # os 모듈을 추가하여 환경 변수를 사용합니다

app = Flask(__name__)

@app.route('/')
def home():
    return render_template_string('''
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>서화총학생회</title>
    <style>
        body {
            background-color: #fae2e5;
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
        img {
            width: 100%;
        }
        button {
            background-color: #0dbfef;
            border: none;
            color: white;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
            margin-bottom: 15px;
        }
        h3 {
            padding: 0 10px;
        }
    </style>
</head>
<body>
    <div class="gift-container">
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMTdfOTMg%2FMDAxNjk3NTUzOTg2MTA0.gSsQkjIa5rPWf5unvG3aJBLnSGRFHjBJ2WINbtprCzUg.4CrMPrfv_mFch9NGukuol4bBFRWbxTJE0_7_L82QfSUg.JPEG.ka14410%2F1697553982351.jpg&type=sc960_832" alt="1차라인업 실루엣">
        <h3>1차 라인업</h3>
        <p>2025년 국립순천대학교 대동제 1차 라인업</p>
        <button onclick="location.href='/gift'">라인업 보러러가기</button>
    </div>
</body>
</html>
    ''')

@app.route('/gift')
def gift():
    return redirect("https://www.scnu.ac.kr")

if __name__ == '__main__':
    # Heroku에서 제공하는 포트를 사용하도록 수정
    port = int(os.environ.get("PORT", 5000))  # Heroku에서 PORT 환경 변수를 가져오고, 없으면 기본 5000번 포트를 사용
    app.run(host="0.0.0.0", port=port, debug=False)  # host='0.0.0.0'으로 설정하여 모든 IP에서 접속 가능하게 설정
