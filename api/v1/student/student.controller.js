'use strict'

const StudentModel = require('./student.model');

exports.studentController = {
    createStudent: (req, res) => {
        let data = req.body;
        StudentModel.studentModel.createStudent(data)
        .then((result) => {
            //console.log(result);
           if(result > 0){
               res.send({error:true, status:501, Result:result, message:'Student account is unable to create'});
        }else{
               res.send({error:false, status:200, Result:result, message:'Student account created successfully'});
           }
        })
    },
    login: (req, res) => {
        let data = req.body;
        //console.log('DATA::::',data);
        StudentModel.studentModel.login(data)
        .then(result => {
            if(result === null || result.email === ''){
                res.send({error:true, status:401, Result:result, message:'Invalid Email'});
            }
            if(result.password !== data.password || result.password === ''){
                res.send({error:true, status:401, Result:null, message:'Invalid Password'});
            }else{
                res.send({error:false,RESULT:result,status:200, message:'Login successfully'})
            }
        })
    },
    getAllStudent: (req, res) => {
        StudentModel.studentModel.getAllStudent()
        .then((result) => {
            if(result === null){
                res.send({error:true, status:501, Result:result, message:'Error in Getting All Student List'});
            }else{
                res.send(result);
            }
        });
    },

    getOneStudent: (req, res) => {
        let data = req.body;
        console.log('DATA:::::', data);
        StudentModel.studentModel.getOneStudent(data)
        .then((result) => {
            if(result === null){
                res.send({error:true, status:401, Result:result});
            }else{
                res.send(result);
            }
        });
    }
}