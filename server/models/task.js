const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Task = sequelize.define('Task',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, // Autoincrementable
        primaryKey: true,    
        allowNull: false    
    },
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