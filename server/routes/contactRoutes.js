const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

// Configure Gmail SMTP
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => {
        const entities = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };

        return entities[character];
    });
}

// POST /api/contact
router.post('/', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Check required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                status: 'error',
                message: 'Please complete all fields.'
            });
        }

        // Clean up submitted values
        const cleanName = String(name).trim();
        const cleanEmail = String(email).trim();
        const cleanSubject = String(subject).trim();
        const cleanMessage = String(message).trim();

        if (!cleanName || !cleanEmail || !cleanSubject || !cleanMessage) {
            return res.status(400).json({
                status: 'error',
                message: 'Please complete all fields.'
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(cleanEmail)) {
            return res.status(400).json({
                status: 'error',
                message: 'Please provide a valid email address.'
            });
        }

        // Validate field lengths
        if (
            cleanName.length > 100 ||
            cleanEmail.length > 254 ||
            cleanSubject.length > 150 ||
            cleanMessage.length > 5000
        ) {
            return res.status(400).json({
                status: 'error',
                message: 'One or more fields exceed the allowed length.'
            });
        }

        // Email content
        const mailOptions = {
            from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: {
                name: cleanName,
                address: cleanEmail
            },
            subject: `New Portfolio Inquiry: ${cleanSubject}`,

            text: `
        NEW PORTFOLIO INQUIRY

        Name: ${cleanName}
        Email: ${cleanEmail}
        Subject: ${cleanSubject}

        Message:
        ${cleanMessage}

        Sent through your portfolio website.
            `,

            html: `
            <div style="
                font-family: Arial, sans-serif;
                background-color: #F4F7FA;
                padding: 30px 15px;
            ">

                <div style="
                    max-width: 600px;
                    margin: auto;
                    background-color: #FFFFFF;
                    border-radius: 12px;
                    overflow: hidden;
                ">

                    <!-- HEADER -->
                    <div style="
                        background-color: #172B45;
                        padding: 30px;
                    ">
                        <h1 style="
                            color: #E1EAF1;
                            margin: 0;
                            font-size: 22px;
                        ">
                            MARK AGUILUS MAGNO
                        </h1>

                        <p style="
                            color: #91B4CF;
                            font-size: 12px;
                            letter-spacing: 2px;
                            margin-bottom: 0;
                        ">
                            PORTFOLIO CONTACT NOTIFICATION
                        </p>
                    </div>

                    <!-- CONTENT -->
                    <div style="padding: 30px;">

                        <h2 style="
                            color: #172B45;
                            margin-top: 0;
                        ">
                            New Portfolio Inquiry
                        </h2>

                        <p style="
                            color: #52677D;
                            line-height: 1.6;
                        ">
                            You have received a new message through
                            your portfolio website.
                        </p>

                        <hr style="
                            border: none;
                            border-top: 1px solid #DCE5ED;
                            margin: 25px 0;
                        ">

                        <p style="
                            color: #718096;
                            font-size: 16px;
                            font-weight: 600;
                            margin-bottom: 8px;
                        ">
                            SENDER NAME:
                        </p>

                        <p style="
                            color: #172B45;
                            font-size: 15px;
                            font-weight: bold;
                            margin-top: 0;
                        ">
                            ${escapeHtml(cleanName)}
                        </p>

                        <p style="
                            color: #718096;
                            font-size: 16px;
                            font-weight: 600;
                            margin-bottom: 8px;
                        ">
                            EMAIL ADDRESS:
                        </p>

                        <p style="margin-top: 0;">
                            <a href="mailto:${escapeHtml(cleanEmail)}"
                            style="
                                color: #527FA3;
                                font-size: 15px;
                                font-weight: bold;
                                text-decoration: none;
                            ">
                                ${escapeHtml(cleanEmail)}
                            </a>
                        </p>

                        <p style="
                            color: #718096;
                            font-size: 16px;
                            font-weight: 600;
                            margin-bottom: 8px;
                        ">
                            SUBJECT:
                        </p>

                        <p style="
                            color: #172B45;
                            font-size: 15px;
                            font-weight: bold;
                            margin-top: 0;
                        ">
                            ${escapeHtml(cleanSubject)}
                        </p>

                        <hr style="
                            border: none;
                            border-top: 1px solid #DCE5ED;
                            margin: 25px 0;
                        ">

                        <div style="
                            background-color: #F1F5F9;
                            padding: 20px;
                            border-radius: 8px;
                        ">

                            <h3 style="color: #172B45;">
                                Message
                            </h3>

                            <p style="
                                color: #52677D;
                                line-height: 1.7;
                                white-space: pre-wrap;
                                word-wrap: break-word;
                                overflow-wrap: anywhere;
                            ">${escapeHtml(cleanMessage)}</p>

                        </div>

                    </div>

                    <!-- FOOTER -->
                    <div style="
                        background-color: #172B45;
                        padding: 20px;
                        text-align: center;
                    ">

                        <p style="
                            color: #91B4CF;
                            font-size: 12px;
                            margin: 0;
                        ">
                            Sent through your portfolio website.
                        </p>

                        <p style="
                            color: #E1EAF1;
                            font-size: 12px;
                        ">
                            © 2026 Mark Aguilus Magno
                        </p>

                    </div>

                </div>
            </div>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return res.status(200).json({
            status: 'success',
            message: 'Your message has been sent successfully!'
        });

    } catch (error) {
        console.error('Contact form error:', error.message);

        return res.status(500).json({
            status: 'error',
            message: 'Unable to send your message right now. Please try again later.'
        });
    }
});

module.exports = router;