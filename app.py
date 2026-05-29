from flask import Flask, render_template, request, redirect
from flask_mail import Mail, Message

app = Flask(__name__)

# ==========================
# MAIL CONFIG
# ==========================

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True

# YOUR EMAIL
app.config['MAIL_USERNAME'] = 'himan.bhat10@gmail.com'

# APP PASSWORD
app.config['MAIL_PASSWORD'] = 'cszk rzhd luck dfjw'

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



# ==========================

if __name__ == "__main__":
    app.run

@app.route("/send", methods=["POST"])
def send():

    try:

        name = request.form.get("name")
        email = request.form.get("email")
        message = request.form.get("message")

        print("FORM DATA RECEIVED")
        print(name)
        print(email)
        print(message)

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

        print("EMAIL SENT SUCCESSFULLY")

        return redirect("/")

    except Exception as e:

        print("ERROR OCCURRED")
        print(e)

        return str(e)