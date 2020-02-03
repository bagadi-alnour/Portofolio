const router = require("express").Router();
let ExpAndEdu = require("../models/expAndEdu-model");

router.route("/").get((req, res) => {
  ExpAndEdu.find()
    .sort({ _id: -1 })
    .then(expandedus => res.json(expandedus))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const dateStart = Date.parse(req.body.dateStart);
  const dateEnd = Date.parse(req.body.dateEnd);
  const degree = req.body.degree;
  const location = req.body.location;
  const establishment = req.body.establishment;
  const description = req.body.description;

  const newExpandEdu = new ExpAndEdu({
    dateStart,
    dateEnd,
    degree,
    location,
    establishment,
    description
  });
  newExpandEdu
    .save()
    .then(() => res.json("nouveau experience a été ajouté"))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  ExpAndEdu.findById(req.params.id)
    .then(expandedus => res.json(expandedus))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  ExpAndEdu.findByIdAndDelete(req.params.id)
    .then(() => res.json("l'experience Supprimé avec succès..."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  ExpAndEdu.findById(req.params.id)
    .then(expedu => {
      expedu.date = Date.parse(req.body.date);
      expedu.degree = req.body.degree;
      expedu.location = req.body.location;
      expedu.establishment = req.body.establishment;
      expedu.description = req.body.description;
      expedu
        .save()
        .then(() => res.json("expierience a été édité avec succès!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
