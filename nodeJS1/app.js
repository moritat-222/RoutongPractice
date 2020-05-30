'use strict'
const path = require('path');
const express = require('express');
const app = express();

const viewsPath = path.join(__dirname, './views')
const publicDirectoryPath = path.join(__dirname, './public')

//テンプレートエンジンの設定
app.set('view engine', 'ejs');
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
  res.render('./index.ejs')
});

app.get('/login', (req,res) => {
  res.render('./login.ejs')
});

app.get('/register', (req, res) => {
  res.render('./register.ejs')
})



app.listen(3001, () => {
  console.log('server is up on port 3001')
})