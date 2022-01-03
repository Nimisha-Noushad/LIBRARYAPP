const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://userone:userone@ictak.wnm7r.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority");

const Schema=mongoose.Schema;
const AuthorSchema=new Schema({
    
    author:String,
    
    image:String
});
var Authordata=mongoose.model("authordata",AuthorSchema);
module.exports=Authordata;