const express=require("express");
const loginRouter=express.Router();


function router(nav){
    loginRouter.get("/",function(req,res){
        res.render("login",{
            nav,
            title:"Library"
        })
    })

    loginRouter.get("/add",function(req,res){
        res.send("added");
            
        
    });
    return loginRouter;
}

module.exports=router;

