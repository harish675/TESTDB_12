const multer = require('multer');
const FormSubmission = require('../model/FormSubmission');
const upload = multer();
const nodemailer = require('nodemailer');
module.exports.submitForm =  async function(req, res) {
  console.log("**********************************"); 
  console.log("this the amount", req.body);

  const name = req.body.inputname;
  const email = req.body.inputemail;
  const mobile = req.body.inputmobile;
  const city = req.body.inputCity;
  const services = req.body.inputServices;
  const message = req.body.floatingTextarea2;

  // Create a new Form Submission document
  const newFormSubmission = new FormSubmission({
      name,
      email,
      mobile,
      city,
      services,
      message
  });

  try {
      // Save the form submission to the database 
      const savedFormSubmission = await newFormSubmission.save();
      console.log('Form Data Saved:', savedFormSubmission);
       // Send email notification
       const transporter = nodemailer.createTransport({
        // Your email configuration, such as SMTP settings
        // Example using Gmail:
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'harishjadhav675@gmail.com',
            pass: 'kkjl tmob rleo ncac'
        }
    });

    const mailOptions = {
        from: 'harishjadhav675@gmail.com',
        to: 'harishjadhav675@gmail.com',
        subject: 'New Form Submission',
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Mobile: ${mobile}</p>
               <p>City: ${city}</p>
               <p>Services: ${services}</p>
               <p>Message: ${message}</p>`
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
    res.json({ message: 'Form submitted successfully', data: savedFormSubmission });
  } catch (error) {
      console.error('Error saving form data:', error);
      res.status(500).json({ message: 'Failed to submit form' });
  }
};