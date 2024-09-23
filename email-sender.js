var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yaya26dia@gmail.com',
    pass: 'Mariste2024'
  }
});

var mailOptions = {
  from: 'yaya26dia@gmail.com',
  to: 'wadebirome@gmail.com',
  subject: 'Inscription',
  text: 'Tu es toujours partant pour l"inscription!'
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});