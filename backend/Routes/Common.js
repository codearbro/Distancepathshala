const courseController = require("../Controllers/Course");
const FilterController = require("../Controllers/Filter");
const collegeController = require("../Controllers/University");

const router = require("express").Router();

router.get("/all", async(req, res) => {
    const data = {
        college: [],
        course: [],
        filter: [],
    };

    // colleges
    const collegeResult = await collegeController.getAll();
    if (collegeResult.status == 200) {
        data.college = collegeResult.data;
    }

    // courses
    const courseResult = await courseController.getAll();
    if (collegeResult.status == 200) {
        data.course = courseResult.data;
    }

    // filter
    const filterResult = await FilterController.getAll();
    if (filterResult.status == 200) {
        data.filter = filterResult.data;
    }

    return res.json({
        status: 200,
        data: data,
    });
});

module.exports = router;