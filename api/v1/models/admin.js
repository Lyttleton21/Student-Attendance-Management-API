const Sequelize = require("sequelize");
const sequelize = require("../../../config/connection");

module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define('admin', {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey: true,
        },
        createdAt:{
            type:Sequelize.DATE,
            allowNull:true,
        },
        updatedAt:{
            type:Sequelize.DATE,
        },
        is_deleted:{
            type:Sequelize.BOOLEAN,
           allowNull:true,
           default:false
        },
        firstName:{
            type:Sequelize.STRING,
            allowNull:false
        },
        lastName: {
            type:Sequelize.STRING,
            allowNull:true
        },
        email: {
            type:Sequelize.STRING,
            allowNull:false
        },
        password: {
            type:Sequelize.STRING,
            allowNull:false
        },
        faculty:{
            type:Sequelize.STRING,
            allowNull:true
        },
        department:{
            type:Sequelize.STRING,
            allowNull:true
        },
        contact_no:{
            type:Sequelize.STRING,
            allowNull:true
        }
    });
    return Admin;
}