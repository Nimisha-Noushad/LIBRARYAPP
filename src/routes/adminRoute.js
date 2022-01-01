const express=require("express");
const Authordata = require("../model/Authordata");
const adminRouters=express.Router();


function router(nav){
    adminRouters.get("/",function(req,res){
        res.render("addAuthor",{
            nav,
            title:"Library"
        })
    })

    adminRouters.post("/added",function(req,res){
        var item={
           
            author:req.body.author,
            
            image:req.body.image
        }
         var author=Authordata(item);
         author.save();
         res.redirect("/authors")    
         
            
        
    });
    return adminRouters;
}

module.exports=router;