const {smtpPassword,smtpUser,clientUrl}=require('../../../E-Commerce-Stock/secret.js');
const nodemailer = require("nodemailer");
const createErtor=require('http-errors');
const configer = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: smtpUser,
    pass: smtpPassword,
  },
});
const emailWithNodeMailer=async(emailData)=>{
  try{
   const optionsMailData={
  from:smtpUser, // sender address
    to:emailData.email,// list of receivers
    subject:emailData.subject, // Subject line
    html:emailData.html, // html body
  };
  const info=await configer.sendMail(optionsMailData);
  console.log('Message send: %s', info.response)
  }catch(error){
   throw error.message;
  }
};
module.exports= emailWithNodeMailer;
