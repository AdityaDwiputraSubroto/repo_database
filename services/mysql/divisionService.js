const { Division, sequelize } = require("../../models");

const divisionsServices = {
  getAllDivisions: async () => {
    const divisions = await Division.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: sequelize.col("id"),
    });
    return divisions;
  },
  getDivisionById: async (id) => {
    const division = await Division.findByPk(id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    if (!division) {
      throw new Error("Division not found");
    }
    return division;
  },
};

module.exports = divisionsServices;
