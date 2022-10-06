const Sequelize = require('sequelize');
const sequelize = require('../../../config/connection.js');
const Attendance = require('../models/attendance')(sequelize, Sequelize);
const { op } = require('sequelize');

Attendance.sync();

exports.attendanceModel = {
    createAttendance: async (data) => {
        return await new Promise((resolve, reject) => {
            Attendance.create(data).then((att) => {
                resolve(att.dataValues);
            },
            (err) => {
                reject({error:err});
            });
        });
    },

    getAllAttendance: async () => {
        return await new Promise((resolve, reject) => {
            Attendance.findAll().then((attendance) => {
                resolve(attendance);
            },
            (err) => {
                reject({error:err});
            });
        });
    }
}