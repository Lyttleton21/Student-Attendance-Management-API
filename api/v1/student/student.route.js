const StudentController = require('./student.controller');

exports.studentRoutes = function(app){
    app.post('/create_student', StudentController.studentController.createStudent);
    app.post('/api/login', StudentController.studentController.login);
    app.get('/api/all_student', StudentController.studentController.getAllStudent);
    app.post('/api/one_student/',StudentController.studentController.getOneStudent);
}