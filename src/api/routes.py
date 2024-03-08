"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required, get_jwt_identity



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

    data = request.get_json()
    email = data.get("email")
    password = data.get ("password") 
    if not email or not password: 
        return jsonify("email and password are required")

    user = User.query.filter_by(email = email).first()
    if user:
        token = create_access_token(identity=user.email)
        return jsonify({"token": token }), 200
    else:
        return jsonify({"error": "email and password are incorrect"}), 404 
    
    
@api.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    users = list(map (lambda user: user.serialize(), users))
    
    return jsonify(users), 200 
    

@api.route("/private/<int:user_id>", methods=["GET"])
@jwt_required()
def validate_token(user_id): 
    current_user_id = get_jwt_identity()
    if current_user_id == user_id:
       user = User.query.get(user_id)

    if user is None:
        raise APIException("User not found", status_code=404)
    return jsonify("user authenticated"), 200
    

@api.route("/signup", methods=["POST"])
def create_user():

    data = request.get_json() 

    email = data.get("email")
    password = data.get("password")

    # Verificar si el usuario ya existe
    existing_user = User.query.filter_by(email=email).first()
    if existing_user is not None:
        return jsonify({"error": "Email already registered"}), 409
    
    new_user = User(email=email, password=password, is_active = True)
    db.session.add(new_user)
    db.session.commit()

    access_token = create_access_token(identity=new_user.id)

    return jsonify({"token": access_token, "user_id": new_user.id}), 201

@api.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"Message": "Logout successful"})
    return response
