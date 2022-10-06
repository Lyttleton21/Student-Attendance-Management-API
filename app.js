'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const port = 2022;
const app = express();
const student = require('./api/v1/student/student.route');
const admin = require('./api/v1/admin/admn.route');
const attendance = require('./api/v1/attendance/att.route');
const cors =require('cors');

const router = express.Router();
app.use(cors());
student.studentRoutes(router);
admin.adminRoutes(router);
attendance.attendanceRoutes(router);

router.use( function(req, res, next)  {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, HEAD, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, X-Requested-With, Range, Content-Type');
    if(req.method === 'OPTIONS'){
        return res.sendStatus(200);
    }else{
        return next();
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

router.get('/', (req, res) =>{
    res.send('Server is up...Catch ya!');
});

app.use(router);
app.listen(port, () => {
    console.log(`My server is listening on port ${port}`)
});