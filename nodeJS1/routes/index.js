const express = require('express');
const router  = express.Router();

router
  .get('', (req,res) => {
    res.render('index')
  })
  .get('/login', (req,res) => {
    res.render('login')
  })

  .get('/register', (req,res) => {
    res.render('register')
  })
//homeにPOSTするときの処理
  .post('/home', function(req, res) {
      const _username = req.body.username;
  //POSTが作動しているか確かめる為にconsoleする
      console.log(111)
  // usernameを渡す + views/home/index.jsを参照する
      res.render('home', {username: _username})
});

module.exports = router;