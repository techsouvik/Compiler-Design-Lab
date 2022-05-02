const express = require('express')
const bodyparser = require('body-parser')
const { execFile, exec } = require('child_process')
const fs = require('fs')

const app = express()
port = process.env.PORT || 8080

app.use(express.static('public'))
app.use(express.json()) 
app.use(bodyparser.urlencoded({
     extended:true
}))
app.use(bodyparser.json())
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/p1.html',(req,res)=>{
    res.render('p1')
})
app.get('/p2.html',(req,res)=>{
    res.render('p2')
})
app.get('/p3.html',(req,res)=>{
    res.render('p3')
})
app.get('/p4.html',(req,res)=>{
    res.render('p4')
})
app.get('/p5.html',(req,res)=>{
    res.render('p5')
})

app.get('/pp1.html',(req,res)=>{
    res.render('pp1')
})
app.get('/pp2.html',(req,res)=>{
    res.render('pp2')
})
app.get('/pp3.html',(req,res)=>{
    res.render('pp3')
})
app.get('/pp4.html',(req,res)=>{
    res.render('pp4')
})
app.get('/pp5.html',(req,res)=>{
    res.render('pp5')
})

app.post('/s.html',(req,res)=>{
    res.render('s',{data:req.body})
})

app.post('/prg',(req,res)=>{

    exec(`gcc program${req.body.n}.c  && ./a.out ${req.body.content}`,(error,stdout,stderr)=>{
        if (error) {
        console.log(`error: ${error.message}`)
        return
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
    }
    console.log(`stdout: ${stdout}`);
    res.render('s',{data:stdout, n:req.body.n})
    })
})

app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
})     
