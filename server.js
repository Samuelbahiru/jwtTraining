const express = require("express")
const app = express()

const posts = [
{
    username:  "Samnuel",
    title: "post 1"
},
{
    username:  "bemni",
    title: "post 2"
}
]


app.get("/posts", (req, res)=>{
         res.json(posts)
})

app.listen(3000, ()=>{
    console.log("app is running!")
})