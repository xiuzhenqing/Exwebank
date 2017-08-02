var express=require("express");
var mysql=require("mysql");
var router=express.Router();

var pool=mysql.createPool({
	host:"localhost",// 127.0.0.1
	user:"root",//用户名
	password:"",//密码
	database:"first_project",//数据库
	port:"3306"
});

router.get("/homeLb",function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
		pool.query('SELECT * from homeLb',function(err,rows,fields){
		if(err) throw err;
		res.send(rows);
	});

});
module.exports=router;