const express=require("express");
const adminRouters=express.Router();


function router(nav){
    adminRouters.get("/",function(req,res){
        res.render("addAuthor",{
            nav,
            title:"Library"
        })
    })

    adminRouters.get("/add",function(req,res){
        res.send("added");
            
        
    });
    return adminRouters;
}

module.exports=router;