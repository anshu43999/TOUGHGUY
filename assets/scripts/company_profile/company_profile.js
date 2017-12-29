$(function(){
	 $('.pagenav').lemonPaging({
   	'url':"page.php",//ajax请求地址
   	'total':217,//默认数据在非ajax本地时生效的总数据条数
   	'page_size':10,//每页数据条数
   	'pages':7,//分页可显示页码数量
   	'pre_next':'false',//默认显示上一页下一页
   	'searchable':'false',//默认带跳转输入框
   	'successcallback':function(data){
// 		console.log(11);
   	},//列表数据填充容器
   });
})
