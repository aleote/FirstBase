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
 
router.post('/', upload, function (req, res) {
  
    // if (err) {
    //   console.log(err);
    // }

    console.log(req.file);

  res.json({
    success: true,
    message: "image loaded"
  });
     // Everything went fine 
  });


module.exports = router;