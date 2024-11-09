
import { validationResult } from "express-validator";
import User from "../models/User";

export class UserController {
    static signup(req, res,next)  {
        // const error = new Error("User email or password does not match")
        // next(error)
        // res.status(200).send("success")
        // res.send(req.body)
        const {email,password} = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array().map(x => x.msg) });
        }
        const user = new User({
            email,
            password
        })
        user.save()
        .then((user)=>{
            res.send(user)
        })
        .catch(e=>
            next(e)
        )
    }
    static test(req,res,next){
        console.log("this is test")
        next();
    }
    
    static test2(req,res){
        res.status(200).send("this is test 2")
    }

}
