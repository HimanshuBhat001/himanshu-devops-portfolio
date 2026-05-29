from flask import Flask, render_template, request, redirect
from flask_mail import Mail, Message

app = Flask(__name__)

# ==========================
# MAIL CONFIG
# ==========================

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'himan.bhat10@gmail.com'
app.config['MAIL_PASSWORD'] = 'YOUR_NEW_APP_PASSWORD'

mail = Mail(app)

# ==========================
# HOME ROUTE
# ==========================

@app.route("/")
def home():
    return render_template("index.html")

# ==========================
# CONTACT FORM
# ==========================

@app.route("/send", methods=["POST"])
def send():

    try:
        name = request.form.get("name")
        email = request.form.get("email")
        message = request.form.get("message")

        msg = Message(
            subject=f"New Portfolio Inquiry from {name}",
            sender=app.config['MAIL_USERNAME'],
            recipients=['himan.bhat10@gmail.com']
        )

        msg.body = f"""
Name: {name}

Email: {email}

Message:
{message}
"""

        mail.send(msg)

        return redirect("/")

    except Exception as e:
        return str(e)

# ==========================

if __name__ == "__main__":
    app.run()