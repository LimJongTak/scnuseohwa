from flask import Flask, render_template_string, redirect
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
        <!-- 서버 측 리디렉션 -->
        <button onclick="window.location.href='/gift'">라인업 보러가기</button>
    </div>
</body>
</html>
    ''')

@app.route('/gift')
def gift():
    # 서버 측 리디렉션 처리
    return redirect("https://www.youtube.com/shorts/DGTyFxyKSrM", code=302)

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))  
    app.run(host="0.0.0.0", port=port, debug=False)
