export class UserController {
    static login(req, res)  {
        res.status(200).send("success")
    }
    static test(req,res,next){
        console.log("this is test")
        next();
    }
    
    static test2(req,res){
        res.status(200).send("this is test 2")
    }

}
