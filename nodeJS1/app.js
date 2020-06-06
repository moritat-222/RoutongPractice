'use strict'

const path = require('path');
const morgan = require('morgan');
const express = require('express');
const app = express();

//POSTのミドルウェア
app.use(express.json());
app.use(express.urlencoded());

const route_home = require('./routes/home');
const viewsPath = path.join(__dirname, './views')
const publicDirectoryPath = path.join(__dirname, './public')

app.set('view engine', 'ejs');
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath));
app.use(morgan({format: 'dev', immediate: true}));

//メイン処理
app.get('', (req,res) => {
  res.render('./index.ejs')
});

app.get('/login', (req,res) => {
  res.render('./login.ejs')
});

app.get('/register', (req,res) => {
  res.render('./register.ejs')
});

//homeのパスへのアクセスのルーティング処理
app.use('/home', route_home);

app.listen(3001, () => {
  console.log('server is up on port 3001')
})

