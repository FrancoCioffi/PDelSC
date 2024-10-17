from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app) 

# Conexión a la base de datos
db = mysql.connector.connect(
    host="localhost",
    user="root",  
    password="",  
    database="loginestanga"
)

cursor = db.cursor()

#Ruta de regisgro y la funcion.
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        #Devuelve un mensaje con la respuesta.
        return jsonify({"message": "Faltan datos"}), 400

    try:
        #Ingresa los valores en la base de datos.
        cursor.execute("INSERT INTO users (username, email, password) VALUES (%s, %s, %s)", (username, email, password))
        db.commit()
        return jsonify({"message": "Usuario registrado con éxito"})
    except mysql.connector.Error as err:
        return jsonify({"message": "Error al registrar usuario", "error": str(err)}), 500

#Ruta de registro y funcion de Login.
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"message": "Faltan datos"}), 400

    cursor.execute("SELECT password FROM users WHERE email=%s", (email,))
    result = cursor.fetchone()
    
    if result:
        stored_password = result[0]  

        if stored_password == password: 
            return jsonify({"message": "Inicio de sesión exitoso"})
        else:
            return jsonify({"message": "Contraseña incorrecta"}), 401
    else:
        return jsonify({"message": "Correo no registrado"}), 404

if __name__ == "__main__":
    app.run(host="localhost", port=5000, debug=True)
