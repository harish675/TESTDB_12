
const FormSubmission = require('../model/FormSubmission');
module.exports.submitForm = async function(req,res){    
    
      const name = req.body.inputname;
      const email = req.body.inputemail;
      const mobile = req.body.inputmobile;
      const city = req.body.inputCity;
      const services = req.body.inputServices;
      const message = req.body.floatingTextarea2;

      //create a new From Submission document

      const newFormSubmission = new  FormSubmission({
             
           name,
           email,
           mobile,
           city,
           services,
           message
      });

      try{

        //save the form submission to the database 
        const savedFormSubmission = await newFormSubmission.save();
        console.log('Form Data Saved:', savedFormSubmission);
        res.json({ message: 'Form submitted successfully' });
      }catch(error){ 
        console.error('Error saving form data:', error);
        res.status(500).json({ message: 'Failed to submit form' });
      }
 
};