const express= require ("express");
const authorsRouter=express.Router();
const Authordata=require("../model/Authordata");
function router(nav){
    // var authors=[
    //     {
    //     author:"A P J Abdul Kalam",
        
    //     img:"APJa.jpg"
    //     },
    //     {
    //     author:"Chetan Bhagat",
        
    //     img:"chetan.jpg"
    //     },
    //     {
    //     author:"Paulo Coelho",
        
    //     img:"paulo.jpg"
    //     }
    // ]

    authorsRouter.get("/",function(req,res){
        Authordata.find()
        .then(function(authors){
        res.render("authors",
        {
            nav,
            title:"Library",
            authors
        });
        })
    });
    authorsRouter.get("/:id",function(req,res){
        const id =req.params.id
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render("author",{
                nav,
                title:"Library",
                author
            });
        })
    });

    return authorsRouter;

}


module.exports=router;