import nodemailer from 'nodemailer';
export default (req, res) => {
    try {
        const USER_USER = process.env.USER_USER || 'handzon.mmt@gamil.com';
        const USER_PASS = process.env.USER_PASS || 'Jesi0l0wsk@0806';
        // Instantiate the SMTP server
        const smtpTrans = nodemailer.createTransport({
            host: 'smtp.yahoo.com',
            port: 465,
            secure: true,
            auth: {
                user: USER_USER,
                pass: USER_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        // Specify what the email will look like
        const mailOpts = {
            from: USER_USER, // This is ignored by USER
            to: USER_USER,
            replayTo: req.body.email,
            subject: 'New message via website',
            text: `${req.body.name} (${req.body.email}) requested a chat via the website contact form.`,
        };

        // Attempt to send the email
        smtpTrans.sendMail(mailOpts, (error, response) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                return res.sendStatus(200);
            }
        });
    } catch {
        return res.status(error.status || 500).end(error.message);
    }
};
