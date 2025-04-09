from flask import Flask, request, jsonify, render_template, send_from_directory, redirect
from flask_cors import CORS  # Importando o CORS
import smtplib
import ssl
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from dotenv import load_dotenv
import os

# Carregar as variáveis de ambiente do arquivo .env
load_dotenv()

# Criar a instância do Flask e definir a pasta de templates e a pasta estática
app = Flask(__name__, 
            template_folder='.',  # Arquivos HTML na raiz
            static_folder='assets')  # Arquivos estáticos (CSS, JS, etc.) na pasta "assets"

# Cors com as rotas
CORS(app, origins="https://www.unilatem.com") #ROTA PARA PRODUÇÃO
# CORS(app, origins=["http://127.0.0.1:8000", "http://localhost:8000", "https://www.unilatem.com"]) ROTA PARA TESTE E DESENVOLVIMENTO

# Função para enviar o e-mail
def enviar_email(subject, body, email_receivers):
    email_sender = 'unilatem@gmail.com'  # Substitua pelo seu email
    email_password = os.getenv('EMAIL_PASSWORD')
    print(f"Senha do email: {email_password}") 

    for email_receiver in email_receivers:
        em = MIMEMultipart()
        em['From'] = email_sender
        em['To'] = email_receiver
        em['Subject'] = subject
        em.attach(MIMEText(body, 'plain'))

        context = ssl.create_default_context()

        try:
            with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
                smtp.login(email_sender, email_password)
                smtp.sendmail(email_sender, email_receiver, em.as_string())
                print(f'E-mail enviado com sucesso para {email_receiver}')
        except Exception as e:
            print(f'Falha ao enviar o email para {email_receiver}: {e}')

# Rota para servir a página HTML de "casamento"
@app.route('/')
def index():
    return redirect('casamento')  # Carrega o HTML da página de pagamento

# Rota para servir a página HTML de "casamento"
@app.route('/casamento')
def casamento():
    return render_template('casamento.html')  # Carrega o HTML da página de pagamento

# Rota para servir a página HTML de "pagamento"
@app.route('/pagamento')
def pagamento():
    return render_template('pagamento.html')

# Rota para enviar o e-mail
@app.route('/pagamento', methods=['POST'])
def pagamento_email():
    try:
        data = request.get_json()  # Obtém os dados JSON da requisição
        subject = data.get('subject')
        body = data.get('body')
        email_receivers = ['yuriemavis@gmail.com']  # Lista de emails para envio

        # Envia o e-mail
        enviar_email(subject, body, email_receivers)
        return jsonify({"message": "E-mail enviado com sucesso!"})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Serve arquivos estáticos (CSS, JS, imagens)
@app.route('/assets/<path:path>')
def serve_static(path):
    return send_from_directory('assets', path)

# if __name__ == '__main__':
#     app.run(debug=True, host='0.0.0.0', port=8000)  # Certifique-se de que a porta seja 8000 em TESTE E DESENVOLVIMENTO
app.config['DEBUG'] = False #CÓDIGO PARA PRODUÇÃO


