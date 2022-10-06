const Sequelize = require('sequelize');
const sequelize = require('../../../config/connection.js');
const Student = require('../models/student')(sequelize, Sequelize);
const { op, where } = require('sequelize');
const student = require('../models/student');

Student.sync();

exports.studentModel = {
    createStudent: async (data) => {
        return await new  Promise((resolve, reject) => {
            Student.create(data).then((student) => {
                resolve(student.dataValues);
            },
            (err) => {
                reject({error:err});
            });
        });
    },

    login: async(data) => {
        return await new Promise((resolve, reject) => {
            Student.findOne({where:{email:data.email}})
            .then((student) => {
               resolve(student);
            });
        });
    },

    getAllStudent: async () => {
        return await new Promise((resolve, reject) => {
            Student.findAll()
            .then((student) => {
                resolve(student);
            },
            (err) => {
                reject({error:err});
            });
        });
    },

    getOneStudent: async (data) => {
        return await new Promise((resolve, reject) => {
            Student.findOne({where : {id:data.id}})
            .then((student) => {
                resolve(student);
            });
        });
    }
}