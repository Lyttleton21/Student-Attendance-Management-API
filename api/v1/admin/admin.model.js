const Sequelize = require('sequelize');
const sequelize = require('../../../config/connection');
const Admin = require('../models/admin')(sequelize, Sequelize);
const { op } =require('sequelize');

Admin.sync();

exports.adminModel = {
    createAdmin: async (data) => {
        return await new Promise((resolve, reject) => {
            Admin.create(data).then((admin) => {
                resolve(admin.dataValues);
            },
            (err) => {
                reject(err);
            }
            );
        });
    },
   /*login: async (data) => {
    return await new Promise((resolve, reject) => {
        Admin.findOne({where: {email:data.email}})
        .catch(data.email !== email)
        .catch(data.password !== password)
        .then(admin => {
            resolve(admin);
        },
        (err) => {
            reject({error:err});
        });
    });
   },*/

   login: async (data) => {
    return await new Promise((resolve, reject) => {
        Admin.findOne({where: {email:data.email}})
        .then((admin) => {
            resolve(admin)
        },
        (err) => {
            reject({error:err});
        });
    });
   }
}