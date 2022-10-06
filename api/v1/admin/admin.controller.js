'use strict'

const AdminModel =require('./admin.model');

exports.adminController = {
    createAdmin: (req, res) => {
        let data = req.body;
        AdminModel.adminModel.createAdmin(data)
        .then((result) => {
            if(result > 0){
                res.send({error:true, status:501, Result:result, message:'Admin account is unable to create'});
            }else{
                res.send({error:false, status:200, Result:result, message:'Admin account created successfully'});
            }
        });
    },

    login: (req, res) => {
        let data =req.body;
        AdminModel.adminModel.login(data)
        .then(result => {
            if(result === null || result.email === ''){
                res.send({error:true, status:401, Result:result, message:'Invalid Email'});
            }else
            if(result.password !== data.password || result.password === ''){
                res.send({error:true, status:401, Result:null, message:'Invalid Password'});
            }else{
                res.send({error:false, status:200, Result:result, message:'Login Successfully'});
            }
        });
    }
}