 var express = require('express');
 var router = express.Router();
// const mysql = require('mysql')
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root", // 数据库用户名
//   password: "138628", // 数据库密码
//   database: "home" // 数据库名
// })

// connection.connect()

// connection.query('SELECT * FROM paper_docs', (err, rows, fields) => {
//   if (err) throw err

//   console.log('The solution is: ', rows[0])
// })

// connection.end()

/* GET users listing. */
router.get('/', function(req, res, next) {
  const userNameIsOnlySql ='SELECT * FROM paper_docs';
  var position;
    db.query('SELECT * FROM paper_docs', (err, rows, fields) => {
      if (err) throw err

      console.log('The solution is: ', rows[0]);

      position=rows[0].position 
      res.send("position");
    })

});

module.exports = router;
