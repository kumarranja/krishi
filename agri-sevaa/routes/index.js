var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/ranjan', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/',(req,res) => {
  console.log("inside / route");
//   var ServerPeople = [
//     {
//         name:'ranjan',
//         lastName:'kumar'
//     },
//     {
//         name:'rahul',
//         lastName:'kumar'
//     },
//     {
//         name:'DK',
//         lastName:'bose'
//     },
//     {
//         name:'DK',
//         lastName:'lambe'
//     }
// ]
res.render('index');
});

// var sessio;
// router.get('/',(req,res) => {
//   sessio = req.session;
//   if(sessio.email){
//     return res.redirect('/admin');
//   }
//   res.sendFile(__dirname +'/../views/index.html')
//  });
// router.post('/login',(req,res) => {
//   sess = req.session;
//   sess.email = req.body.email;
//   res.end('done');
// });

// router.get('/admin',(req,res) => {
//   sess = req.session;
//   if(sess.email) {
//       res.write(`<h1>Hello ${sess.email} </h1><br>`);
//       res.end('<a href='+'/logout'+'>Logout</a>');
//   }
//   else {
//       res.write('<h1>Please login first.</h1>');
//       res.end('<a href='+'/'+'>Login</a>');
//   }
// });

// router.get('/logout',(req,res) => {
//   req.session.destroy((err) => {
//       if(err) {
//           return console.log(err);
//       }
//       res.redirect('/');
//   });

// });
module.exports = router;
