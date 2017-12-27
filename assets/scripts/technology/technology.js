(function($) {
	$(function() {
		var merit, satis_only, web, app;
		$(".nav_classify").on("click", "li", function() {
			var index = $(this).index()
			$(".nav_classify li").removeClass('active')
			$(this).addClass("active")
			$(".resour_first").removeClass("active")
			$(".resour_first").eq(index).addClass("active")
			// 高端定制的动效
			if($(".resour_first.active .serve_con_right_con_merit").length) {
				merit = $(".serve_con_right_con_merit").offset().top
				satis_only = $(".serve_con_right_con_satisfy").offset().top
			}
			// 前端技术的动效
			if($(".resour_first.active .serve_con_right_con_web")) {
				web = $(".serve_con_right_con_web").offset().top
				app = $(".serve_con_right_con_app").offset().top
			}
			setLeftnavPosition();
		})
		// 添加动效的时候的类名
		function animationfun(domfath, domchild, classify) {
			$(domfath).find(domchild).addClass(classify)
		}

		$(window).on("scroll", function(e) {
			var el = $("html body").scrollTop()
			if(el > merit - 1000) {
				animationfun(".serve_con_right_con_merit", ".merit_only", "active")
			}
			if(el > satis_only - 1000) {
				animationfun(".serve_con_right_con_satisfy", ".satis_only", "active")
			}
			console.log(web,app,el)
			if(el > web - 800) {
				animationfun(".serve_con_right_con_web", ".pc_content_font", "active")
			}
			if(el > app - 400) {
				animationfun(".serve_con_right_con_app", ".app_content_font", "active")
			}
		})
		
		
//	侧导航定位
	var left_nav=$('.resour_content_box .resour_content .resour_con_left');
	var left_nav_top=left_nav.offset().top;
	var left_nav_height=left_nav.height();
	var rem=parseInt($('html').css('fontSize'));
	var fixedTop=1.2*rem;	
	var fixedBottom=$('.footer').offset().top-0.4*rem-left_nav_height-1.2*rem;	
//	由于变更定位后父元素无法被撑开设定最低高度
	$('.resour_content_box').css('minHeight',left_nav_height)
	//	页面加载后监控滚轮滚动位置
	//  侧导航的定位设置方法
	function setLeftnavPosition(){
		fixedBottom=$('.footer').offset().top-0.4*rem-left_nav_height-1.2*rem;
		if($(document).scrollTop()+fixedTop>=left_nav_top){
			left_nav.addClass('fixed')
		}else{
			left_nav.removeClass('fixed')
		}
		if($(document).scrollTop()>=fixedBottom){
			left_nav.addClass('bottom')
		}else{
			left_nav.removeClass('bottom')
		}
	}
	setLeftnavPosition()
//	页面滚动中的	
	$(window).on('scroll.nav',function() {
		setLeftnavPosition()
	});
	
	
	
	})
})(jQuery)