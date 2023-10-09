
const express= require('express');
const fs = require('fs');
const content = fs.readFileSync('./file.txt','utf8');

const router= express.Router();
router.get('/',(req,res,next)=>{
    res.send(`<form onsubmit=document.getElementById("username").value=localStorage.getItem("username") action="/" method="POST"><p>${content}</p><input type="hidden" name="username" id="username"/><input type="text" name="message"/><button>Send</button></form>`)

});
router.post('/',(req,res,next) => {
    const newMsg = (req.body.username+':'+req.body.message+' ')
    fs.appendFileSync("./file.txt",newMsg)
    res.redirect('/');
})

module.exports=router;