const ArtWork = require("../models/artWork");

function artWorkIndex(req, res, next) {
  ArtWork.find()
    .exec()
    .then(artWorks => res.json(artWorks))
    .catch(next);
}

function artWorkShow(req, res, next) {
  ArtWork.findByID(req.params.id)
    .exec()
    .then(ArtWork => {
      res.json(ArtWork);
    })
    .catch(next);
}

module.exports = {
  index: artWorkIndex,
  show: artWorkShow
};
