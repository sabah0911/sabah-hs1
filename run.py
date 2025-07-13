from flask import Flask, render_template, request, jsonify, redirect, url_for
from flask_login import current_user
import pickle
import numpy as np

app = Flask(__name__, template_folder='app/templates', static_folder='app/static')

# Load model and scaler
model = pickle.load(open('random_forest_model.pkl', 'rb'))
scaler = pickle.load(open('scaler.pkl', 'rb'))

# Home Page
@app.route('/')
def index():
    return render_template('index.html')

# Prediction Page (GET)
@app.route('/prediction', methods=['GET'])
def prediction_page():
    return render_template('prediction.html')

# Predict API (POST)
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        # Parse input values
        age = float(data['age'])
        systolic_bp = float(data['systolicBP'])
        diastolic_bp = float(data['diastolicBP'])
        bs = float(data['bs'])
        body_temp = float(data['bodyTemp'])
        heart_rate = float(data['heartRate'])

        # ✅ Input validation
        if not (10 <= age <= 70):
            return jsonify({'error': "Invalid age: must be between 10 and 70"}), 400
        if not (70 <= systolic_bp <= 160):
            return jsonify({'error': "Invalid systolic BP: must be between 70 and 160"}), 400
        if not (49 <= diastolic_bp <= 100):
            return jsonify({'error': "Invalid diastolic BP: must be between 49 and 100"}), 400
        if not (6.0 <= bs <= 19.0):
            return jsonify({'error': "Invalid blood sugar: must be between 6.0 and 19.0"}), 400
        if not (98.0 <= body_temp <= 103.0):
            return jsonify({'error': "Invalid body temperature: must be between 98.0°C and 103.0°C"}), 400
        if not (7 <= heart_rate <= 90):
            return jsonify({'error': "Invalid heart rate: must be between 7 and 90"}), 400

        # Prepare input for prediction
        features = np.array([[age, systolic_bp, diastolic_bp, bs, body_temp, heart_rate]])

        # If your model requires scaling, uncomment the following line:
        # features = scaler.transform(features)

        # Make prediction
        prediction = model.predict(features)

        # Map result to risk level
        risk_mapping = {
            0: "Low Risk",
            1: "Mid Risk",
            2: "High Risk"
        }
        result = risk_mapping.get(prediction[0], "Unknown Risk")

        return jsonify({'result': result})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# About Page
@app.route('/about')
def about_us():
    return render_template('about.html')

# Contact Page
@app.route('/contact')
def contact_us():
    return render_template('contact.html')

# Login Page
@app.route('/login')
def login():
    return render_template('log-in.html')

# Register Page
@app.route('/register')
def register():
    return render_template('register.html')

# Logout Page (Placeholder)
@app.route('/logout')
def logout():
    return render_template('logout.html')

# Run the App
if __name__ == '__main__':
    app.run(debug=True)
