$(function(){
	var currentpage=$('.pagination .active').html();
	var currentindex=$('.pagination .active').index('.pagination .page');
//	var startpage=1;
//	var endpage=5;
//	console.log(currentpage,currentindex);
	setPageStatus()
	function setPageStatus(){
		currentpage=$('.pagination .active').html();
		currentindex=$('.pagination .active').index('.pagination .page');
		if(currentindex>=4){
			$('.pagination .next').addClass('disabled');
		}else{
			$('.pagination .next').removeClass('disabled');			
		}
		if(currentindex<=0){
			$('.pagination .pre').addClass('disabled');
		}else{
			$('.pagination .pre').removeClass('disabled');
		}
	}
	$('.pagination .pre').on('click',function(){
		var pre=currentindex-1;
		if(pre<0){
			pre=0
		}
		$('.pagination .page').eq(pre).addClass('active').siblings().removeClass('active');
		setPageStatus();
	})
	$('.pagination .next').on('click',function(){
		var next=currentindex+1;
		if(next>4){
			next=4
		}
		$('.pagination .page').eq(next).addClass('active').siblings().removeClass('active');
		setPageStatus();
	})
	$('.pagination .page').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		setPageStatus();
	})
})
