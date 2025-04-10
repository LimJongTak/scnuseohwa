from flask import Flask, render_template
import os  

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/notice')
def notice():
    return render_template('notice.html')

@app.route('/booth-food')
def booth_food():
    return render_template('booth_food.html')

@app.route('/map')
def map_page():
    return render_template('map.html')

@app.route('/schedule')
def schedule():
    return render_template('schedule.html')

# 새로운 페이지 추가
@app.route('/qna')
def qna():
    return render_template('qna.html')

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))  
    app.run(host="0.0.0.0", port=port, debug=False)
