'use strict'

const AttendanceModel = require('./attendance.model');

exports.attendanceController = {
    createAttendance: (req, res) => {
        let data = req.body;
        AttendanceModel.attendanceModel.createAttendance(data)
        .then((result) => {
            if(result > 0){
                res.send({error:true, status:501, Result:result, message:'Attendance is unable to mark'});
            }else{
                res.send({error:false, status:200, Result:result, message:'Attendance Mark Successfully'});
            }
        });
    },

    getAllAttendance: (req, res) => {
        AttendanceModel.attendanceModel.getAllAttendance()
        .then((result) => {
            if(result === null){
                res.send({error:true, status:501, Result:result, message:'Error in Getting Attendance List'});
            }else{
                res.send(result);
            }
        });
    }
}