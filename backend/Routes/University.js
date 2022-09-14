const collegeController = require("../Controllers/University");

const router = require("express").Router();

router.get("/all", async(req, res) => {
    const result = await collegeController.getAll();
    return res.json(result);
});

module.exports = router;