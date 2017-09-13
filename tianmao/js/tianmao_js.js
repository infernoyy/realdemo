////顶部效果
$(function(){
	// 顶部菜单效果--我的淘宝
	$('#top .top_right ul li.ex_li ').hover(function(){
		$(this).css("background","white");	
		$(this).find('.hide_box').show();
	},function(){
		$(this).css("background","#f2f2f2");
		$(this).find('.hide_box').hide();
	})
	
	$('#top .top_right ul li.ex_li a').hover(function(){
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("text-decoration","none");
	})
	
	//商家支持
	$('#top .top_right ul li.ex_li ').hover(function(){
		$(this).css("background","white");
		$(this).find('.hide_box_support').show();
	},function(){
		$(this).css("background","#f2f2f2");
		$(this).find('.hide_box_support').hide();
	})
	
	//网站导航
	$('#top .top_right ul li.ex_li ').hover(function(){
		$(this).css("background","white");
		$(this).find('.hide_box_webnav').show();
	},function(){
		$(this).css("background","#f2f2f2");
		$(this).find('.hide_box_webnav').hide();
	})
	
	
	//搜索条部分
	$('#main_nav .nav_right ul li ').hover(function(){
		$(this).find('img.lit_tm_pic').stop().animate({top: -15, opacity: 'show'}, 200);
		$(this).find('img.lit_tm_three').stop().animate({top: -15, opacity: 'show'}, 200);
		$(this).find('img.lit_tm_four').stop().animate({top: -15, opacity: 'show'}, 200);
	},function(){
		$(this).find('img.lit_tm_pic').stop().animate({top: 0, opacity: 'show'}, 50);
		$(this).find('img.lit_tm_three').stop().animate({top: 0, opacity: 'show'}, 50);
		$(this).find('img.lit_tm_four').stop().animate({top: 0, opacity: 'show'}, 50);
	})
	
//	//商品分类 
	$('#nav_lun .shoptype ul li').hover(function(){
		$(this).css('background-color','#ffffff').find('.sec_hide_box').show();
	},function(){
		$(this).css('background-color','#ededed').find('.sec_hide_box').hide();
	})	
	
//	$('#shoptype ul li .sec_hide_box .part .part_right ul li a').mouseout(function(){
//		$(this).css('background','#ffffff');
//	})

})

//轮换板

$(function(){
	// 图片轮换板效果
	var flash_sta = 0;
	var timer = setInterval(autoRun,1000);
	function autoRun(){//控制自动轮播的函数
		flash_sta++;
		// if(flash_sta==6){
		// 	flash_sta = 0;
		// }
		flash_sta = (flash_sta==6)?0:flash_sta;//判断flash_sta值是否到最后，到最后的话就切为0;
		$('#nav_lun .lunbotu img').eq(flash_sta).fadeIn().siblings('img').hide();//让对应的图片显示，让兄弟图片隐藏
		$('#nav_lun .lunbotu ul li').eq(flash_sta).addClass('cur').siblings('li').removeClass('cur');//控制li的样式
	}

	$('#nav_lun .lunbotu ul li').mouseover(function(){//鼠标移入事件
		clearInterval(timer);
		flash_sta = $(this).index();//获得鼠标移入到了第几个li里
		$('#nav_lun .lunbotu img').eq(flash_sta).fadeIn().siblings('img').hide();//让对应的图片显示，让兄弟图片隐藏
		$('#nav_lun .lunbotu ul li').eq(flash_sta).addClass('cur').siblings('li').removeClass('cur');//控制li的样式
	})
	$('#nav_lun .lunbotu ul li').mouseout(function(){//鼠标移出效果
		timer = setInterval(autoRun,1000);
	})
})

$(function(){
	var flash_sta =0;
	var timer=setInterval(autoRun,1000);
	function autoRun(){
		flash_sta++;
		if(flash_sta==7){
			flash_sta=0;
		}
//		flash_sta=(flash_sta==7)?0:flash_sta;
	}
})

//轮换板结束

//直播部分
$(function(){
	//大图图标
	$('#content #live_trademark .live_show .bigger').mouseenter(function(){
		$(this).find('img.live_bigpic').animate({"width":"84","height":"70","left":"209"},100);
		$(this).find('img.live_bigpic').animate({"width":"70","height":"58","left":"216"},100);
	})
	//小图图标
	$('#content #live_trademark .live_show .smaller ul li').hover(function(){
		$(this).find('img.live_smallpic').animate({"width":"43","height":"36","left":"57"},200).show();
		$(this).find('.small_cover').show();
		$(this).find('img.live_smallpic').animate({"width":"36","height":"30","left":"60"},200).show();
	},function(){
		$(this).find('img.live_smallpic').hide();
		$(this).find('.small_cover').hide();
	})
	
})
//button动态效果
$(document).ready(function() {
	$("#content #live_trademark .live_show .smaller a.btn_left").hide();
	$("#content #live_trademark .live_show .smaller a.btn_left").click(function() {
		$("#content #live_trademark .live_show .smaller .smaller_box").css("left", "0");
		$(this).hide();
		$("#content #live_trademark .live_show .smaller a.btn_right").show();
	})
	$("#content #live_trademark .live_show .smaller a.btn_right").click(function() {
		$("#content #live_trademark .live_show .smaller .smaller_box").css("left", "-488px");
		$(this).hide();
		$("#content #live_trademark .live_show .smaller a.btn_left").show();
	})
	
});
$(function(){
	$('#content #live_trademark .live_show .forecast .fore_right ul li').hide();
	// 直播滚动条效果
	var foreLI = 0;
	var timer = setInterval(autoRun,1000);
	function autoRun(){//控制自动轮播的函数
		foreLI++;
		foreLI = (foreLI==4)?0:foreLI;//判断foreLI值是否到最后，到最后的话就切为0;
		$('#content #live_trademark .live_show .forecast .fore_right ul li').eq(foreLI).fadeIn().siblings('li').hide();//让对应的图片显示，让兄弟图片隐藏
	}
})
$(function(){
	var foreLI =0;
	var timer=setInterval(autoRun,1000);
	function autoRun(){
		foreLI++;
		if(foreLI==7){
			foreLI=0;
		}
	}
})
//直播部分结束


//商标栏部分

$(function(){
	$('#content #live_trademark .trademark tr td').hover(function(){
		$(this).find('.hover_box').stop().fadeIn(100);
	},function(){
		$(this).find('.hover_box').stop().fadeOut(100);
	})
})
//商标栏部分结束


$(function(){
	//搜索条部分
	$('#content #something_show .sth_sec .channel_1 img').hover(function(){
		$(this).stop().animate({left: '20px'}, 100);
	},function(){
		$(this).stop().animate({left: '30px'}, 100);
	})
	$('#content #something_show .sth_sec .channel_2 img').hover(function(){
		$(this).stop().animate({left: '20px'}, 100);
	},function(){
		$(this).stop().animate({left: '30px'}, 100);
	})
})

//潮电酷玩
$(function(){
	$('#content #fashion_play table tr td:gt(0) img').hover(function(){
		$(this).stop().animate({right: '10px'}, 100);
	},function(){
		$(this).stop().animate({right: '0px'}, 100);
	})
})
//潮电酷玩结束