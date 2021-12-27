const express= require ("express");
const authorsRouter=express.Router();
function router(nav){
    var authors=[
        {
        author:"A P J Abdul Kalam",
        
        img:"APJa.jpg"
        },
        {
        author:"Chetan Bhagat",
        
        img:"chetan.jpg"
        },
        {
        author:"Paulo Coelho",
        
        img:"paulo.jpg"
        }
    ]

    authorsRouter.get("/",function(req,res){
        res.render("authors",
        {
            nav,
            title:"Library",
            authors
        });
    });
    authorsRouter.get("/:id",function(req,res){
        const id =req.params.id
        res.render("author",{
            nav,
            title:"Library",
            author:authors[id]
        });
    });

    return authorsRouter;

}


module.exports=router;