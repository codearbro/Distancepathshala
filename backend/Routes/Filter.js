const FilterController = require("../Controllers/Filter");

const router = require("express").Router();

router.get("/all", async(req, res) => {
    const result = await FilterController.getAll();
    return res.json(result);
});

module.exports = router;