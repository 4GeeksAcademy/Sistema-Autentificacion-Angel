"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS



api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route("/login", methods=["POST"])
def login():

    email = request.json.get('email')
    password = request.json.get('password')
    user_exist = User.query.filter_by(email=email, password=password).first()

    if user_exist:
        access_token = create_access_token(identity=email)
        return jsonify(access_token=access_token), 200
    else:
        return jsonify({"msg": "Incorrect user or password"}), 401



@api.route("/signup", methods=["POST"])
def create_user():
    # Validación de entrada
    if "email" not in body or "password" not in body:
        return jsonify({"error": "Missing email or password"}), 400

    # Verificar si el usuario ya existe
    existing_user = User.query.filter_by(email=body["email"]).first()
    if existing_user:
        return jsonify({"error": "Email already registered"}), 409
    
    body = request.get_json()
    new_user = User()
    new_user.email = body.get("email")
    new_user.password = body.get("password")
    new_user.is_active = body.get("is_active")

    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message':'Usuario creado con éxito'}), 200
