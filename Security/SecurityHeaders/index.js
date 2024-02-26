const express = require('express');
const app = express();

//initial redirect for hsts
const redirectToHttps = (req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    // Redirect to HTTPS
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  next();
};

app.use(redirectToHttps);


app.use((req, res, next) => {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  res.setHeader('Referrer-Policy', 'no-referrer'); //origin-when-cross-origin
  res.removeHeader('X-Powered-By');
  res.setHeader('X-Content-Type-Options', 'nosniff'); // whatever content type i m saying t,get me only that content
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  next();
});

app.get('/list', (req, res) => {
  res.send([{
    id: 1,
    title: "Namaste Frontend System Design"
  }])
});

const port = process.env.PORT || 5010;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});