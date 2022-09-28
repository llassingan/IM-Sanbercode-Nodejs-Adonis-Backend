var express = require('express');
var router = express.Router();

const karyawannya = require('../controller/karyawancontroller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register',karyawannya.register)
router.get('/karyawan',karyawannya.ambilsemua)
router.get('/login',karyawannya.login)

module.exports = router;
