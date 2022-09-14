// imports

const FilterController = {
    getAll: async() => {
        const data = {
            qualification: [{ label: "10th" }, { label: "12th" }, { label: "BA" }],
            discipline: [{ label: "Hindi" }, { label: "English" }],
            state: [{ label: "UP" }, { label: "MP" }, { label: "Assam" }],
        };
        return {
            status: 200,
            data: data,
        };
    },
};
module.exports = FilterController;