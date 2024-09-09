const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Task = sequelize.define('Task',{
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
});

module.exports = Task;