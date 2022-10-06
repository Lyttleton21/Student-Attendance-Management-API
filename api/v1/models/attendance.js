const { Sequelize } = require("sequelize");
const sequelize = require("../../../config/connection");

module.exports = (sequelize, Sequelize) => {
    const Attendance = sequelize.define('attendances',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey: true,
        },
        createdAt:{
            type:Sequelize.DATE,
            allowNull:false,
        },
        updatedAt:{
            type:Sequelize.DATE,
        },
        firstName:{
            type:Sequelize.STRING,
            allowNull:false
        },
        lastName: {
            type:Sequelize.STRING,
            allowNull:false
        },
        faculty:{
            type:Sequelize.STRING,
            allowNull:false
        },
        department:{
            type:Sequelize.STRING,
            allowNull:false
        },
        date:{
            type:Sequelize.STRING,
            allowNull:false
        },
    });

    return Attendance;
}