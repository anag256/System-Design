const express=require('express');
const app=express();
const PORT=process.env.PORT || 5020;
app.use(express.static('public'))

app.use((req,res,next)=>{
    res.setHeader('Content-Security-Policy',"frame-ancestors 'self' ")

    res.cookie('sessionID', '12345', {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      });

    next();
})
app.get('/iframe-website1',(req,res)=>{
    res.sendFile(__dirname+'/public/iframe-website1.html');
})

app.get('/iframe-website2',(req,res)=>{
    res.sendFile(__dirname+'/public/iframe-website2.html');
})

app.listen(PORT,()=>{
    console.log(`Server started at https://localhost:${PORT}`)
})