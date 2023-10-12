import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from "cors";
import student from './models/student';

const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://siddahyndavi:hjpLMJUZ1hhdcFQZ@cluster0.2vdryih.mongodb.net/Cluster0?retryWrites=true&w=majority')

    .then(() => app.listen(5000))
    .then(() =>
    console.log("Connected to Database & Listening to localhost 5000")
    )
    .catch((err) => console.log(err));
    // app.post('/adddata')
// app.use('/api',(req,res,next)=>{
//     res.send("Hello FSD")
// })
// app.listen(5000)
//backend route/api
//localhost:4444/api
//hjpLMJUZ1hhdcFQZ
    // app.post('/adddata',(req,res,next)=>{
    //     console.log(req.body.formdata)
    // })
    app.post('/addstud',(req,res,next)=>{
        //res.send(message:"Success")
        const{name,rollno,college,branch} = req.body.formdata
        const stud = new student({
            name,
            rollno,
            college,
            branch
        });
        stud.save();
        if(!stud){
            res.send({message:"Something went wrong"})
        }
        return res.status(201).json({stud});
        
});