from flask import Blueprint, request, jsonify
from models.usuario import db, Usuario

usuario_bp = Blueprint('usuario_bp', __name__)

@usuario_bp.route('/usuarios', methods=['POST'])
def criar_usuario():
    dados = request.json
    novo_usuario = Usuario(nome=dados['nome'], email=dados['email'], senha=dados['senha'])
    db.session.add(novo_usuario)
    db.session.commit()
    return jsonify({"message": "Usuário criado com sucesso!"}), 201

@usuario_bp.route('/usuarios', methods=['GET'])
def listar_usuarios():
    usuarios = Usuario.query.all()
    return jsonify([{"id": u.id, "nome": u.nome, "email": u.email} for u in usuarios])
