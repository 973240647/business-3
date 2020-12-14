var pages_title_len;	//二级导航栏目个数

$(function(){
    //滚动条滚动时，导航条的背景变色
	window.onscroll = function(){
		if(window.pageYOffset >= 200 )
			$("#pc-header").addClass("pc-header-onscroll");
		else
			$("#pc-header").removeClass("pc-header-onscroll");
	}
	
	//二级导航栏目个数
	pages_title_len = $(".pages-title-left .pages-tl").length;
	develop_click();
	develop_close();

	cpzs_title_change();
	news_title_change();
	height(0);
	//news_height(0);
})

var develop_click_index;	//发展历程点击索引

function develop_click(){
	$(".about-develop-box .about-db-item").on("click",function(){
		develop_click_index = $(this).index();
		$(".about-develop-box .about-db-item").css("display","none");
		$(".about-develop-show").eq(develop_click_index).css("display","block");

	})
}

function develop_close(){
	$(".about-develop-show .about-dsr-close").on("click",function(){
		$(".about-develop-show").eq(develop_click_index).css("display","none");
		$(".about-develop-box .about-db-item").css("display","block");
	})
}



//产品展示二级栏目切换
function cpzs_title_change(){
    $(".index-title-right ul li").on("click",function(){
        var cpzs_title_index = $(this).index();
        //product_title_isclick = true;
        $(".index-title-right ul li").eq(cpzs_title_index).addClass("index-title-active").siblings().removeClass("index-title-active");
		
		
		
		$(".cpzs-block-container .cpzs-block").eq(cpzs_title_index).fadeIn(1200).siblings().fadeOut(1200);
        height(cpzs_title_index);
    })
}

//给产品展示容器相应的一个高度
function height(index){
	var box_height = $(".cpzs-block").eq(index).height();
	//console.log(box_height)
	$(".cpzs-block-container").css("height",box_height);
}


//新闻动态二级栏目切换
function news_title_change(){
    $(".index-title-right ul li").on("click",function(){
		var news_title_index = $(this).index();
        $(".index-title-right ul li").eq(news_title_index).addClass("index-title-active").siblings().removeClass("index-title-active");
		
		$(".news-block-container .news-block").eq(news_title_index).fadeIn(1200).siblings().fadeOut(1200);
    })
}




var wow = new WOW({
    animateClass: 'animated',
});
wow.init();