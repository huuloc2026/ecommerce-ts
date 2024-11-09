export class UserController {
    static login(req, res,next)  {
        // const error = new Error("User email or password does not match")
        // next(error)
        // res.status(200).send("success")
        res.send(req.body)
    }
    static test(req,res,next){
        console.log("this is test")
        next();
    }
    
    static test2(req,res){
        res.status(200).send("this is test 2")
    }

}
