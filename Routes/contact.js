const router = require("express").Router();
let Contact = require("../models/contact-model");

router.route("/").get((req, res) => {
  Contact.find()
    .sort({ _id: -1 })
    .then(contacts => res.json(contacts))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  const newContact = new Contact({
    firstname,
    lastname,
    email,
    subject,
    message
  });

  newContact
    .save()
    .then(() => res.json("Votre message a été envoyé avec succès"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Contact.findById(req.params.id)
    .then(contacts => res.json(contacts))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json("Le contacte Supprimé avec succès..."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Contact.findById(req.params.id)
    .then(contact => {
      contact.firstname = req.body.firstname;
      contact.lastname = req.body.lastname;
      contact.email = req.body.email;
      contact.subject = req.body.link;
      contact.message = req.body.message;
      contact
        .save()
        .then(() => res.json("Le projet a été édité avec succès!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
