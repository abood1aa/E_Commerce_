import multer from "multer";
import { nanoid } from "nanoid";
import fs from 'fs'



export const customValidation={
    image:['image/png','image/jpg','image/jpeg'],
}


export const uploadfile = (Validation,folderName)=>{
    if(!fs.existsSync(`./uploads/${folderName}`)){
      fs.mkdirSync(`./uploads/${folderName}`)
    }
 const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `uploads/${folderName}`)
    },
    filename: function (req, file, cb) {
      cb(null, nanoid() + '-' + file.originalname)
    }
  })

  const fileFilter=(req,file,cb)=>{
    if(Validation.includes(file.mimetype)){
        cb(null,true)
    }else{
        cb('invalid format')
    }
  }
  
  const upload = multer({ storage,fileFilter })
return upload
}

