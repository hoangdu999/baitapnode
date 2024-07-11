const nodemailer = require("nodemailer");
const configuration = require("../configs/configuration");

const emailSender = ({email, subject, html}) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', //smtpout.secureserver.net
        port: 465,
        secure: true,
        auth: {
            user: configuration.GMAIL.USER,
            pass: configuration.GMAIL.PASS
        }
    });

    const message = {
        from: `DEMO DU ${configuration.GMAIL.USER}`,
        to: email,
        subject,
        html
    }

    transporter.sendMail(message);
}

module.exports = emailSender;