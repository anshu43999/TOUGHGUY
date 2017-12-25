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
		})
		// 添加动效的时候的类名
		function animationfun(domfath, domchild, classify) {
			$(domfath).find(domchild).addClass(classify)
		}

		$(window).on("scroll", function(e) {
			var el = $("html,body").scrollTop()
			if(el > merit - 1000) {
				animationfun(".serve_con_right_con_merit", ".merit_only", "active")
			}
			if(el > satis_only - 1000) {
				animationfun(".serve_con_right_con_satisfy", ".satis_only", "active")
			}
			if(el > web - 800) {
				animationfun(".serve_con_right_con_web", ".pc_content_font", "active")
			}
			if(el > app - 400) {
				animationfun(".serve_con_right_con_app", ".app_content_font", "active")
			}
		})
	})
})(jQuery)