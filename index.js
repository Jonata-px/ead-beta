//require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);
//app.use(express.static(path.join(__dirname, 'views')));
//USAR O SISTEMA DE ROTAS DO EXPRESS COM O EJS
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'views')));
app.set('views',path.join(__dirname,'/views'));

app.get('*',(req,res)=>{
    res.render('index.html',)
})


http.listen(process.env.PORT || 5000, () => {
    console.log("server "+process.env.NODE_ENV +" runing");
  });
