
$(function(){
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
	
})
