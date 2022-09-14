// imports
const university = require("./university.json");

const collegeController = {
    getAll: async() => {
        const data = university;
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
module.exports = collegeController;