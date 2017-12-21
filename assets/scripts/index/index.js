$(function(){
//	页面加载后监控滚轮位置设置导航背景颜色
	if($(document).scrollTop()){
  		$('.navwrap').addClass('bgnav');
  	}else{
  		$('.navwrap').removeClass('bgnav');
  	}
	// 轮播
   	var swiper1 = new Swiper('.swiper-container1', {
   		effect : 'fade',
	    pagination: '.swiper-pagination',
	    // nextButton: '.swiper-button-next',
	    // prevButton: '.swiper-button-prev',
	    paginationClickable: true,
	    spaceBetween: 0,
	    centeredSlides: true,
	    // autoplay: 0,
	    autoplay: 3000,
	    loop: true,
	    autoplayDisableOnInteraction: false
	});
//	鼠标悬停
    $('.swiper-container1').mouseover(function(){
        swiper1.stopAutoplay();
    })
    $('.swiper-container1').mouseout(function(){
        swiper1.startAutoplay();;
    })
    
    //	滚动
	$(window).scroll(function() {
//	  	console.log($(document).scrollTop())
	  	if($(document).scrollTop()){
	  		$('.navwrap').addClass('bgnav');
	  	}else{
	  		$('.navwrap').removeClass('bgnav');
	  	}
	});
})
