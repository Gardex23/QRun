from flask import Flask, redirect, jsonify

app = Flask(__name__)

data = [
    {"id": 1, "nombre": "React Native", "tipo": "Frontend"},
    {"id": 2, "nombre": "Flask (Python)", "tipo": "Backend"}
]

@app.route('/api/profile')
def home():
    print("Hola Mundo desde Profile")
    return jsonify(data)