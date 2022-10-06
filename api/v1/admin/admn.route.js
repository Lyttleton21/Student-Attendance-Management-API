const AdminController = require('./admin.controller');

exports.adminRoutes = function(app){
    app.post('/create_admin', AdminController.adminController.createAdmin);
    app.post('/api/admin/login', AdminController.adminController.login)
}