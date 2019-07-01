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
  //2.登录路由
router.post('/login',function(req,res){
	//2.1获取数据
	var obj=req.body;
	//2.2验证数据是否为空
	if(!obj.uname){
	res.send({code:401,msg:'uname required'});
	return;
	}
	if(!obj.upwd){
	res.send({code:402,msg:'upwd required'});
	return;
	}
	//2.3执行SQL语句
	//查询是否有用户名和密码同时匹配的数据
    pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],function(err,result){
	if(err) throw err;
	console.log(result);
	//判断登录成功还是失败
	if(result.length>0){//有元素,成功
	res.send({code:200,msg:'login suc'});
	}else{//没有元素,失败
		res.send({code:201,msg:'uname or upwd error'});
	}
	});
});
//导出路由器对象
module.exports=router;
