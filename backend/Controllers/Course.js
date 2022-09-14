// imports
const course = require("./course.json");

const courseController = {
    getAll: async() => {
        const data = course;
        if (data.length > 0) {
            return {
                status: 200,
                data: data,
            };
        }
        return {
            status: 404,
        };
    },
};
module.exports = courseController;