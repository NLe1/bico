const nodemailer = require("nodemailer");
const { username, password } = require("../../config/config");

let transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: username,
    pass: password
  }
});

const message = {
  from: "elonmusk@tesla.com", // Sender address
  to: "nhan99dn@gmail.com", // List of recipients
  subject: "Design Your Model S | Tesla", // Subject line
  text: "Have the most fun you can in a car. Get your Tesla today!" // Plain text body
};

transport.sendMail(message, function(err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log(info);
  }
});
