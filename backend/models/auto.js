const { DataTypes } = require("sequelize");
const sequelize = require("../database/connect");

const Auto = sequelize.define(
    "Auto",
    {
        brand: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        npassengers: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nengine: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        model: {
            type: DataTypes.INTEGER, 
            allowNull: false,
        },
    },
    {
        timestamps: false // Deshabilitar 'createdAt' y 'updatedAt'
    }
);

module.exports = Auto;
