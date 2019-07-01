//1.注册路由
router.post('/reg',function(req,res){
  //获取post请求的数据
  var obj=req.body;
  //console.log(obj);
  //验证每一项是否为空
  //如果用户名为空
  if(!obj.uname){
  res.send({code:401,msg:'uname required'});
  return;
  };
  if(!obj.upwd){
  res.send({code:402,msg:'uname required'});
  return;
  };
  if(!obj.phone){
  res.send({code:403,msg:'uname required'});
  return;
  };
  if(!obj.email){
  res.send({code:404,msg:'uname required'});
  return;
  };
  //执行SQL语句
  pool.query('INSERT INTO xz_user SET ?',[obj],function(err,result){
	if(err) throw err;
	//console.log(result);
	if(result.affectedRows>0){
		res.send({code:200,msg:'reg suc'});
	}
	});
	});
//导出路由器对象
module.exports=router;
