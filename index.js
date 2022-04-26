const express = require('express')
const { execFile } = require('child_process')

const app = express()
port = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.json()) 
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/prg1',(req,res)=>{

    console.log(req.body.t1)
    execFile('./p1.sh', (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`)
        return
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
    }
    console.log(`stdout: ${stdout}`);
    res.send(stdout)
    });
})

app.post('/prg2',(req,res)=>{

    console.log(req.body.t1)
    execFile('./p2.sh', (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`)
        return
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
    }
    console.log(`stdout: ${stdout}`);
    res.send(stdout)
    });
})

app.post('/prg3',(req,res)=>{

    console.log(req.body.t1)
    execFile('./p3.sh', (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`)
        return
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
    }
    console.log(`stdout: ${stdout}`);
    res.send(stdout)
    });
})

app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
})     
