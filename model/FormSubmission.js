
const mongoose = require('mongoose');

const formSubmissionSchema = new mongoose.Schema({
       
      name :{
        type:String,
        require : true
      },
      email:{  
           type:String,
           require:true
      },
      mobile:{
           type :String,
           require : true
      },
      city:{
          type:String,
          require:true   
      },
      services:{
         type:String,
         require:true
      },
      message:{
        type:String,
        require:true
      }
},{
   
    timestamps:true

});


const FormSubmission = mongoose.model('FormSubmission' , formSubmissionSchema);
module.exports = FormSubmission;