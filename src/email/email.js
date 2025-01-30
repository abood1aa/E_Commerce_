import nodemailer from "nodemailer"
import { emailhtml } from "./emailhtml.js";
import jwt from "jsonwebtoken"

export let SendEmal =async (email)=>{

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "aa2949139@gmail.com",
          pass: "vpyr hdjx hrce sagb",
          
        },
        tls: {
            rejectUnauthorized: false
        },
      });

      jwt.sign({email}, 'Abod56321',async (err,token)=>{
        let info = await transporter.sendMail({
            from: '"AbodHello"👻 <aa2949139@gmail.com>', 
            to:email,
            subject: "Hello ✔", 
            html:emailhtml(token), 
          });
        
          console.log("Message sent: %s", info.messageId);
      })

      
}
