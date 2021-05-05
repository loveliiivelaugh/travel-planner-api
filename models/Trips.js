const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Trips extends Model {}
Trips.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_budget: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    traveler_amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    traveler_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Traveler",
        key: "id",
      },
    },
    location_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Location",
          key: "id",
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Trips",
  }
);
module.exports = Trips;