const express = require("express")
const path = require('path');
const hbs  = require("hbs")

const appWeather = require("./appWeather.js")
const staticPath = path.join(__dirname,"../public")
const tempPath = path.join(__dirname,"../temp/views")
const partialsPath = path.join(__dirname,"../temp/partials")

const app = express()
const port = process.env.PORT || 3000
app.set('view engine', 'hbs');
app.set('views', tempPath);
hbs.registerPartials(partialsPath)
app.use(express.static(staticPath))

app.get('',((req, res) => {

    res.render('index',{
        "title":"hhhhelllo"
    })
}))
app.get('/about',((req, res) => {

    res.render('about',{
        "link":"/img/me.png",
        "name":"mead"
    })
}))
app.get('/weather',((req, res) => {
    if(!req.query.search){
        return  res.send({
            error:"no search"
        })
    }
    const url ="http://api.weatherstack.com/current?access_key=e56949ea8d68bb3e76c2ea5554ff7794&query="+req.query.search+"&units=f"
    data = {
        url :"google.com",
        data :"sunny"
    }
    // appWeather(url,(data)=>{
        return res.send({
            url,
            data,
        })
    // })
    // res.send({
    //     url : url,
    // })
}))
app.get('/product',((req, res) => {
    if(!req.query.search){
       return  res.send({
            error:"no search"
        })
    }
    res.send({
        product:[

        ]
    })
}))

app.get('*',((req, res) => {

    res.send('My 404 page')
}))


app.listen(port,()=>{
    console.log("server is up on "+300)
})