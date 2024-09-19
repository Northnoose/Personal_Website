from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hjem():
    return render_template("index.html")

@app.route('/test')
def test():
    return 'Test side, ingen autorisasjon nødvendig.'

if __name__ == '__main__':
    app.run(debug=True)
