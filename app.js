const { application } = require("express")
const express = require("express")
const session = require("express-session")

const app = express()

app.use(session({secret:"keyboard cat",cookie:true}))

app.get("/",function(req,res,nex){
    if (req.session.views) {
        req.session.views ++
        res.setHeader("Content-Type", "/text/html")
        res.write("<p>views: " + req.session.views + "")
        res.write("<p>expires in : " + req.session.cookie.expires)
    }
})
//...