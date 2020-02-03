const router = require("express").Router();
const request = require("request");

let Project = require("../models/project-model");

router.route("/").get((req, res) => {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const img = req.body.img;
  const link = req.body.link;
  const category = req.body.category;

  const newProject = new Project({
    name,
    description,
    img,
    link,
    category
  });
  newProject
    .save()
    .then(() => res.json("nouveau projet a été ajouté"))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  Project.findById(req.params.id)
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json("Le projet Supprimé avec succès..."))
    .catch(err => res.status(400).json("Error: " + err));
});
router.route("/react").get((req, res) => {
  Project.find({ category: "react" })
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json("Error:" + err));
});
router.route("/update/:id").post((req, res) => {
  Project.findById(req.params.id)
    .then(project => {
      project.name = req.body.date;
      project.description = req.body.description;
      project.img = req.body.img;
      project.link = req.body.link;
      project.category = req.body.category;
      project
        .save()
        .then(() => res.json("Le projet a été édité avec succès!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

// Get 6 Repos

module.exports = router;
