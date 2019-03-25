const router = require("express").Router();
const artWork = require("../controllers/artWorks");

router.route("/artworks").get(artWork.index);

router.route("/artWorks/:id").get(artWork.show);

router.all("/*", (req, res) => res.notFound());

module.exports = router;
