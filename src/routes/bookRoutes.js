const express= require ("express");
const booksRouter=express.Router();
function router(nav){
    var books=[
        {title:"Wings of fire",
        author:"A P J Abdul Kalam",
        genre:"Autobiography",
        img:"apj.jpg"
        },
        {title:"2 States",
        author:"Chetan Bhagat",
        genre:"Romance",
        img:"2states.jpg"
        },
        {title:"The Alchemist",
        author:"Paulo Coelho",
        genre:"Adventure",
        img:"alchemist.jpg"
        }
    ]
    
    booksRouter.get("/",function(req,res){
        res.render("books", 
        {
            nav,
            title:"Library",
            books
        });
    });
    
    booksRouter.get("/:id",function(req,res){
        const id =req.params.id
        res.render("book",{
            nav,
            title:"Library",
            book:books[id]
        });
    });

    return booksRouter;

}


module.exports=router;