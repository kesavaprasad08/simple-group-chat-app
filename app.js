// const http = require('http');
const express=  require('express');


const bodyParser = require('body-parser');

const app = express();

const loginRoutes = require('./routes/login');
const groupChatRoutes = require('./routes/groupChat');

app.use(bodyParser.urlencoded({extended:true}));

// app.use(loginRoutes);
app.use(groupChatRoutes);
app.use(loginRoutes);

app.use((req,res,next) => {
    res.status(404).send('<h1>Page not found</h1>')
  });

app.listen(3000);