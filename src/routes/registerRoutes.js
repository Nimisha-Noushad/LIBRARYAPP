const express=require("express");
const registerRouter=express.Router();
// const bodyParser=require("body-parser");
// const {check, validationResult } = require("express-validator");
// const urlencodedParser = bodyParser.urlencoded({ extended:false });



function router(nav){
    registerRouter.get("/",function(req,res){
        res.render("register",{
            nav,
            title:"Library"
        })
    })
    // registerRouter.get("/add",function(req,res){
    //     res.render("index",{
    //     nav,
    //     title:"Library"
    // });
            
        
    // });
//     registerRouter.get("/register",urlencodedParser,[
//     check("username", "Full Name must be 3+ characters long")
//         .exists()
//         .isLength({ min:3}),
//     check("email","Email is not valid")
//         .isEmail()
//         .normalizeEmail()

// ],(req,res)=> {
//     const errors= validationResult(req)
//     if(!errors.isEmpty()){
//         const alert=errors.array()
//         res.render("register",{
//             alert
//         })
//     }
// })

// $("#btnLogin").click(function(event) {
    
//     var form = $("#loginForm");
    
//     if (form[0].checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }
    
//     // if validation passed form
//     // would post to the server here
    
//     form.addClass('was-validated');
// });

    return registerRouter;
}


module.exports=router;

