const router = require("express").Router();
const bcrypt = require("bcryptjs");
var passwordHash = require("password-hash");
const Admin = require("../models/admin-model");

router.route("/").get((req, res) => {
  Admin.find()
    .then(admins => res.json(admins))
    .catch(err => res.status(400).json("Error:" + err));
});

// router.route("/add").post((req, res) => {
//   const email = req.body.email;
//   let pw = req.body.password;
//   let salt = bcrypt.genSaltSync(10);
//   password = bcrypt.hashSync(pw, salt);

//   const newAdmin = new Admin({
//     email,
//     password
//   });
//   newAdmin
//     .save()
//     .then(() => res.json("un Admin a ajouté avec success"))
//     .catch(err => res.status(400).json("Error:" + err));
// });
//login admin
router.route("/login").post((req, res) => {
  const { email, password } = req.body;
  Admin.findOne({ email: email })
    .then(admin => {
      if (!admin) {
        res.json("Incorrect email");
      } else if (admin) {
        bcrypt.compare(password, admin.password).then(isMatch => {
          if (isMatch) {
            res.json("OK");
          } else {
            return res.json("Incorrect password");
          }
        });
      }
    })
    .catch(err => res.json("Error : " + err));
});
module.exports = router;
