from flask import Flask
from config import Config
from models.usuario import db
from routes.usuario_routes import usuario_bp

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)

app.register_blueprint(usuario_bp)

if __name__ == '__main__':
    app.run(debug=True)
