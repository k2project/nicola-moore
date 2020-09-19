var nodeoutlook = require('nodejs-nodemailer-outlook');

export default (req, res) => {
    const contactDetails = req.body.email
        ? ` 
        <p style="font-size:25px;font-weight:200;"><b style="font-weight:600;">${
            req.body.name || 'A client'
        }</b> has requested a session with you using your website's contact form. Please send them an email (${
              req.body.email && req.body.email
          }). 
        </p>
        <p style="font-size:12px;font-weight:200;margin:20px 0 50px;"> You can replay to this message directly by using 'Replay' button or send them an email to <i>${
            req.body.email && req.body.email
        }</i>. 
        </p>
    `
        : `
        <p style="font-size:25px;font-weight:200;margin-bottom:50px;"><b style="font-weight:600;">${
            req.body.name || 'A client'
        }</b> has requested a session with you using your website's contact form. Please call them on <b style="font-weight:600;white-space:nowrap;">${
              req.body.mobile && req.body.mobile
          }</b>. 
        </p>
    `;
    const html = `<div style="background:#f7f7f7;padding:80px 40px 40px; text-align:center;">
        <div style="display:inline-block;margin:0 auto 40px;max-width:600px;width:100%;text-align:left;font-family: Arial, Helvetica, sans-serif;">
            <h1 style="margin-bottom:60px;">nicola<span style="color:#88E2CE;">moore</span>
            </h1>
            <p style="font-size:65px;font-weight:100;margin-bottom:10px;">Session requested.
            </p>
            ${contactDetails}
            <a href="" target="_blank" style="text-decoration: none;cursor:pointer;">
                <span style="color:#fff;background-color:#88E2CE;padding:15px 30px;border-radius:30px;font-size:16px;line-height:1.4;">Vsit the website</span>
            </a>
        </div>
        <div style="color:#aaa;font-size:16px;margin:50px auto 0; text-align: center; border-top:solid 1px #a1a1a1;padding-top:20px;">
            <a href="" target="_blank" style="text-decoration: none;cursor:pointer;">
                <span style="margin:3px 10px;display:inline-block;">About Nicola</span>
            </a>
            <a href="" target="_blank" style="text-decoration: none;cursor:pointer;">
                <span style="margin:3px 10px;display:inline-block;">Therapy</span>
            </a>
            <a href="" target="_blank" style="text-decoration: none;cursor:pointer;">
                <span style="margin:3px 10px;display:inline-block;">FAQ</span>
            </a>
            <a href="" target="_blank" style="text-decoration: none;cursor:pointer;">
                <span style="margin:3px 10px;display:inline-block;">Fees</span>
            </a>
        </div>
        
    </div>`;
    try {
        nodeoutlook.sendEmail({
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD,
            },
            from: `"Via website" ${process.env.MAIL_USER}`,
            to: process.env.MAIL_USER,
            subject: `A new session request from ${req.body.name}.`,
            html,
            replyTo: req.body.email,
        });
        res.status(200).json({ status: 'success' });
    } catch (error) {
        return res.status(error.status || 500).end(error.message);
    }
};
