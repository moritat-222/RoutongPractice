'use strict'
//共通変数
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const app = express();
const router = require('./routes/index.js')

//POSTのミドルウェア
app.use(express.urlencoded());
app.use(express.json());

//テンプレートエンジンの設定
//const route_home = require('./routes/home/home');
const viewsPath = path.join(__dirname, './views')
const publicDirectoryPath = path.join(__dirname, './public')

app.set('view engine', 'ejs');
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath));
app.use(morgan({format: 'dev', immediate: true}));

//ルーティング処理
app.use('/', router);

app.listen(3001, () => {
  console.log('server is up on port 3001')
})

