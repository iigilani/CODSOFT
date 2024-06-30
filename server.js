const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'iigilani@gmail.com', 
            pass: 'jxvx pnqa auyi rsqk'
        }
    });

    // Set up email data
    const mailOptions = {
        from: email,
        to: 'iigilani@gmail.com', // Replace with your email address
        subject: `New contact form submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Failed to send message. Please try again.');
        }
        res.send('Message sent successfully!');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
