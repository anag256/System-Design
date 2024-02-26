const express=require('express');
const app=express();
const PORT=3010;

app.use((req,res,next)=>{
    res.setHeader(
    'Content-Security-Policy',
    "default-src 'self';" +
    "script-src 'self' 'nonce-radomKey' 'unsafe-inline' https://unscure.com;"); //script allow from self and the unsecure url
    // unsafe-oi->inline script
    next();
})
app.use(express.static('public'));

// Please load resource from only default self domain
app.listen(PORT,()=>{
    console.log(`Server started at https://localhost:${PORT}`)
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})