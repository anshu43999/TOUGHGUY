$(function(){
//	产品介绍选项卡
	$(".res_con_right_title_guide_select li").on("click",function(){
		$(".res_con_right_title_guide_select li").removeClass("active")
		$(this).addClass("active")
		$(".res_con_right_title_guide_select_content li").removeClass("active")
		$(".res_con_right_title_guide_select_content li").eq($(this).index()).addClass("active")
	})
//	分页
	$('.pagenav').lemonPaging({
	   	'url':"page.php",//ajax请求地址
	   	'total':217,//默认数据在非ajax本地时生效的总数据条数
	   	'page_size':10,//每页数据条数
	   	'pages':7,//分页可显示页码数量
	   	'pre_next':'false',//默认显示上一页下一页
	   	'searchable':'false',//默认带跳转输入框
	   	'successcallback':function(data){
//	   		console.log(111)
	   	},//列表数据填充容器
    });
//  案例展示分类
	$('.reour_con_right_select .classify_industry .class_inde_list li').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
})
