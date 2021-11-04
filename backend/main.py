from flask import Flask

app = Flask("GUI Gen Backend")

@app.route("/api/hello")
def hello_world():
    return "Hello World"

if __name__ == "__main__":
    app.run(port=8080,debug=True)