var express = require('express')
var router = express.Router();

var multer  = require('multer');
// var upload = multer({ dest: '../public/assets/uploads/' })
 
// var app = express();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + ".jpg")
  }
});

var upload = multer({ storage: storage }).single('profileImage');
 
router.post('/', function (req, res, next) {

  upload(req, res, function (err) {
    if (err) {
      console.log(err);

    }
    // console.log(profileImage);
    console.log("--------");
    console.log(req.file);
    console.log("--------");
    
    res.json({
      success: true,
      message: "image loaded"
    });

    ////instead of the above res.json you can do res.redirect back to the same page as edit profile.
     // Everything went fine 
  })
});


module.exports = router;