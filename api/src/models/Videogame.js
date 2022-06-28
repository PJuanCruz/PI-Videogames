const { UUIDV4 } = require('sequelize');
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('videogame', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
        },
        released: {
            type: DataTypes.DATEONLY
        },
        rating: {
            type: DataTypes.DECIMAL(4, 2)
        }
    });
};