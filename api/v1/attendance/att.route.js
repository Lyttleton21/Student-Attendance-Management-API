const AttendanceController = require('./att.controller');

exports.attendanceRoutes = function(app){
    app.post('/mark_attendance', AttendanceController.attendanceController.createAttendance);
    app.get('/api/attendance_list', AttendanceController.attendanceController.getAllAttendance);
}