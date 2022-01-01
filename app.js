const express= require ("express");
const app= express();

const nav=[
     {
         link:"/books",name:"Books"
        },
        {
            link:"/authors",name:"Authors"
        },
        {
            link:"/admin",name:"Add Book"
        },
        {
            link:"/admin1",name:"Add Author"
        },
        {
            link:"/login",name:"Login"
        },
        {
            link:"/register",name:"Create New"
        }
    ];

const  booksRouter=require("./src/routes/bookRoutes")(nav);
const  authorsRouter=require("./src/routes/authorRoutes")(nav);
const  adminRouter=require("./src/routes/adminRoutes")(nav);
const  adminRouters=require("./src/routes/adminRoute")(nav);
const  loginRouter=require("./src/routes/loginRoutes")(nav);
const  registerRouter=require("./src/routes/registerRoutes")(nav);

app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));
app.set("view engine","ejs");
app.set("views",__dirname+"/src/views");
app.use("/books",booksRouter);
app.use("/authors",authorsRouter);
app.use("/admin",adminRouter);
app.use("/admin1",adminRouters);
app.use("/login",loginRouter);
app.use("/register",registerRouter);

app.get("/",function(req,res){
    res.render("index",
    {
        nav,
        title:"Library"
    });
})







app.listen(process.env.PORT || 4555);