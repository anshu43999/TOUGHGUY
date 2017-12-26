
$(function(){
//	选项卡
	$(".res_con_right_title_guide_select li").on("click",function(){
		$(".res_con_right_title_guide_select li").removeClass("active")
		$(this).addClass("active")
		$(".res_con_right_title_guide_select_content li").removeClass("active")
		$(".res_con_right_title_guide_select_content li").eq($(this).index()).addClass("active")
	})
	$(".resour_con_left_list li a").on("click",function(event){
		event.preventDefault()
	})
	$(".resour_con_left_list li").on("click",function(e){
		e.stopPropagation()
		var index = $(this).index()
		$(".resour_con_left_list li").removeClass("active")
		$(this).addClass("active")
		$(".resour_con_right .resour_first").removeClass("active")
		$(".resour_con_right .resour_first").eq(index).addClass("active")
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
//	页面滚动中的
//	console.log(fixedBottom);
	
	$(window).on('scroll.nav',function() {
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
	});
})
