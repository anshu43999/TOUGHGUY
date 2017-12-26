var lnglat = [112.54799,37.873893];
var map = new AMap.Map('map', {
    resizeEnable: true,
    center: [112.54844,37.873893],
	zoom: 16
});
var marker = new AMap.Marker({
    position: lnglat
});
marker.setMap(map);
AMap.plugin(['AMap.AdvancedInfoWindow'],function(){
    var content='<div class="info-title"><img src="assets/images/index/logo_map2.png" style="width:0.2rem;height:0.2rem;"><p style="margin-left:0.05rem;line-height:0.2rem;color:#333;display:inline-block;">硬汉科技</p></div><div class="info-content">' +
//	    '<img src="http://webapi.amap.com/images/amap.jpg">' +
        '地址:山西省太原市府西街195号晋商银行5层。<br/></div>' ;
//	    '<a target="_blank" href = "http://mobile.amap.com/">点击下载高德地图</a></div>';
    var infowindow1 =new AMap.AdvancedInfoWindow({
        content: content,
        offset: new AMap.Pixel(0, -30)
    });
    infowindow1.open(map,lnglat);
    marker.on('click', function() {
        infowindow1.open(map,lnglat);
    });
})