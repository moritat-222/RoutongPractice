const express = require('express');
const router  = express.Router();

router.get('/home', function(req, res) {
    res.render('home');
});

router.post('/home', function(req, res) {
  const _username = req.body.username;
  // usernameを渡す + views/home/index.jsを参照する
  res.render('home', {username: _username});
});

module.exports = router;