const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/js/:fileName',function(req,res){
    const { fileName } = req.params;
    res.sendFile(path.join(__dirname+'/js/' + fileName));
    //__dirname : It will resolve to your project folder.
});

router.get('/assets/:fileName',function(req,res){
    const { fileName } = req.params;
    res.sendFile(path.join(__dirname+'/js/' + fileName));
    //__dirname : It will resolve to your project folder.
});

const port = 8080;
app.use('/', router);
app.listen(process.env.port || port);

console.log(`Running at Port ${port}`);