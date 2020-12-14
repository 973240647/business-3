//品牌介绍点击淡入淡出切换
var brief_imglen = 0;	//图片个数
var brief_currentimg = 0;	//初始图片索引
var brief_rtimg = 0;	//右下角图片初始索引


var product_imglen = 3;	//产品展示图片个数
var product_currentimg = 0;	//初始图片索引
var product_rtimg = 0;	//右边图片初始索引

$(function(){
    //滚动条滚动时，导航条的背景变色
	window.onscroll = function(){
		if(window.pageYOffset >= 200 )
			$("#pc-header").addClass("pc-header-onscroll");
		else
			$("#pc-header").removeClass("pc-header-onscroll");
    }
    
    brief_imglen = $(".index-br-left .index-brl-img").length;
    //product_imglen = $(".index-pb-left").length;
    next_click();
    prev_click();
    prev_enter();
    next_enter();
    
    //产品展示
    product_next_click();
    product_prev_click();
    product_item_click();
    product_title_change();
})

var brief_content = [
    {title:"XXXX®--科技冷链领导品牌",span:"Leading brand of science and technology cold chain",p1:"坚持制造更专业的科技冷链设备，致力于打造更安全高效、节能环保的全天候冷链系统",p2:"工厂生产经验累积13年，占地面积5.36万平方米的专业制冷设备生产基地"},
    {title:"品牌定位：科技冷链高端市场",span:"high end market of science and technology cold chain",p1:"坚持制造更专业的科技冷链设备，致力于打造更安全高效、节能环保的全天候冷链系统",p2:"工厂生产经验累积13年，占地面积5.36万平方米的专业制冷设备生产基地"},
    {title:"品牌理念：“源于创新、产于科	技、重于材质、精于工艺”",span:"From innovation, production from science and technology, more emphasis on materials, more sophisticated in technology",p1:"坚持制造更专业的科技冷链设备，致力于打造更安全高效、节能环保的全天候冷链系统",p2:"工厂生产经验累积13年，占地面积5.36万平方米的专业制冷设备生产基地"},
    {title:"产品理念：打造“高效、节能、长寿”的过硬产品",span:"Create a high quality product with 'high efficiency, energy saving and long life'",p1:"坚持制造更专业的科技冷链设备，致力于打造更安全高效、节能环保的全天候冷链系统",p2:"工厂生产经验累积13年，占地面积5.36万平方米的专业制冷设备生产基地"},
];

var brief_rt = [
    {title:"Brand Introduction",span:"XXXX",p:"01"},
    {title:"Brand Positioning",span:"XXXX",p:"02"},
    {title:"Brand Concept",span:"XXXX",p:"03"},
    {title:"Product Concept",span:"XXXX",p:"04"},
];

function next_click(){
    //下一张
	$(".index-brc-next").on("click",function(){
		if(brief_currentimg < brief_imglen-1){
			brief_currentimg++;
			//console.log(brief_currentimg)
			$(".index-br-left .index-brl-img").eq(brief_currentimg-1).fadeOut(1200);
			$(".index-br-left .index-brl-img").eq(brief_currentimg).fadeIn(1200);		
			$(".index-brief-left ul li > div").removeClass("li-left-xt-active");
			$(".index-brief-left ul li").eq(brief_currentimg).addClass("li-active").siblings().removeClass("li-active");
			$(".index-brief-left ul li:eq("+brief_currentimg+") > div").addClass("li-left-xt-active");
            //品牌介绍中间内容
            var brief_html = "";
            brief_html +='<p class="index-brc-title">'+brief_content[brief_currentimg].title+'</p>';     
            brief_html += '<span>'+brief_content[brief_currentimg].span+'</span>';
            brief_html += '<p class="index-brc-content">'+brief_content[brief_currentimg].p1+'</p>';
            brief_html += '<p class="index-brc-content">'+brief_content[brief_currentimg].p2+'</p>';
            
            $(".index-br-content").html(brief_html).hide().fadeIn(1500);
            
            //品牌介绍右上内容
            var brief_rt_html = "";
            brief_rt_html += '<p class="index-brc-rt-title">'+brief_rt[brief_currentimg].title+'</p>'
            brief_rt_html += '<span>'+brief_rt[brief_currentimg].span+'</span>'
            brief_rt_html += '<p class="index-brc-rt-num">'+brief_rt[brief_currentimg].p+'</p>'
            
            $(".index-brc-rt").html(brief_rt_html).hide().fadeIn(1200);
        }
		else	return;
	})
}

function prev_click(){
    //上一张
	$(".index-brc-prev").on("click",function(){
		if(brief_currentimg > 0){
			brief_currentimg--;
			//console.log(brief_currentimg)
			$(".index-br-left .index-brl-img").eq(brief_currentimg+1).fadeOut(1200);
			$(".index-br-left .index-brl-img").eq(brief_currentimg).fadeIn(1200);	
			$(".index-brief-left ul li > div").removeClass("li-left-xt-active");
			$(".index-brief-left ul li").eq(brief_currentimg).addClass("li-active").siblings().removeClass("li-active");
			$(".index-brief-left ul li:eq("+brief_currentimg+") > div").addClass("li-left-xt-active");	
            var brief_html = "";
            brief_html +='<p class="index-brc-title wow fadeIn" >'+brief_content[brief_currentimg].title+'</p>';     
            brief_html += '<span>'+brief_content[brief_currentimg].span+'</span>';
            brief_html += '<p class="index-brc-content">'+brief_content[brief_currentimg].p1+'</p>';
            brief_html += '<p class="index-brc-content">'+brief_content[brief_currentimg].p2+'</p>';
            
            $(".index-br-content").html(brief_html).hide().fadeIn(1500);
        
            //品牌介绍右上内容
            var brief_rt_html = "";
            brief_rt_html += '<p class="index-brc-rt-title">'+brief_rt[brief_currentimg].title+'</p>'
            brief_rt_html += '<span>'+brief_rt[brief_currentimg].span+'</span>'
            brief_rt_html += '<p class="index-brc-rt-num">'+brief_rt[brief_currentimg].p+'</p>'
            
            $(".index-brc-rt").html(brief_rt_html).hide().fadeIn(1200);

        }else	return;
	})
}

//品牌介绍鼠标移入右下角图片切换
function prev_enter(){
	$(".index-brc-button .index-brc-prev").mouseenter(function(){
        if(brief_rtimg >= brief_currentimg){
            if(brief_rtimg == 0)	return;
			//console.log(brief_rtimg,brief_currentimg)
			$(".index-brc-rb .index-brc-rb-img").eq(brief_rtimg).fadeOut();
			$(".index-brc-rb .index-brc-rb-img").eq(brief_rtimg-1).fadeIn();
		}
		else	return;
		brief_rtimg--;
	})
}

function next_enter(){
    $(".index-brc-button .index-brc-next").mouseenter(function(){
		if(brief_rtimg <= brief_currentimg ){
			if(brief_rtimg == 3)	return;
			//console.log(brief_rtimg,brief_currentimg)
			brief_rtimg++;
			$(".index-brc-rb .index-brc-rb-img").eq(brief_rtimg-1).fadeOut();
			$(".index-brc-rb .index-brc-rb-img").eq(brief_rtimg).fadeIn();
		}
		else	return;
	})
}


//展品展示

var product_item_index = 0;     //点击切换的图片索引
var product_imgNum = 3;
var product_imglen = product_imgNum; //三张图
var title_index = 0;    //二级标题索引
var product_item_isclick = false;   //是否直接点击图片
var product_title_isclick = false;  //是否点击二级导航

//二级栏目切换
function product_title_change(){
    $(".index-title-right ul li").on("click",function(){
        title_index = $(this).index();
        product_title_isclick = true;
        $(".index-title-right ul li").eq(title_index).addClass("index-title-active").siblings().removeClass("index-title-active");
        $(".product-showblock .index-product-block").eq(title_index).fadeIn(1200).siblings().fadeOut(1200);
        
        //切换时保证每个板块的第一张图为选中状态
        if( !$(".index-pb-right .index-pbr-block > div").eq(title_index*product_imgNum).hasClass("index-pbr-mask-active"))
            $(".index-pb-right .index-pbr-block > div").eq(title_index*product_imgNum).addClass("index-pbr-mask-active");
    })
}

function product_next_click(){
    //下一张
	$(".index-pbr-next").on("click",function(){
        if(product_title_isclick == true){
            product_currentimg = product_imgNum*(title_index+1)-product_imgNum;   //当前显示的第一张图片的索引值
            product_imglen = product_imgNum*(title_index+1);     //当前内容的所有图片索引（加上之前板块的图片个数）
            product_title_isclick = false;      // 点击二级导航后设置为FALSE
            //console.log(product_currentimg,product_imglen)
        }   
        if(product_item_isclick == true){
            product_currentimg = product_item_index;
            product_item_isclick = false;
        }    
        if(product_currentimg < product_imglen - 1){
            product_currentimg++;
            //console.log(product_currentimg)
            //console.log(product_item_index,product_currentimg)
            
            $(".index-pb-leftblock .index-pb-left").eq(product_currentimg-1).fadeOut(1200);
			$(".index-pb-leftblock .index-pb-left").eq(product_currentimg).fadeIn(1200);	

            $(".index-pb-right .index-pbr-block > div").eq(product_currentimg-1).removeClass("index-pbr-mask-active");
            $(".index-pb-right .index-pbr-block:eq("+product_currentimg+") > div").addClass("index-pbr-mask-active");
        }
		else	return;
	})
}

function product_prev_click(){
    //上一张
	$(".index-pbr-prev").on("click",function(){
        if(product_title_isclick == true){
            product_currentimg = product_imgNum*(title_index+1)-product_imgNum;   //当前显示的图片索引值
            product_imglen = product_imgNum*(title_index+1);     //当前内容的所有图片索引（加上之前板块的图片个数）
            product_title_isclick = false;      // 点击二级导航后设置为FALSE
            //console.log(product_currentimg,product_imglen)
        }  
        if(product_item_isclick == true)    product_currentimg = product_item_index;
        product_item_isclick = false;
		if(product_currentimg > product_imglen - product_imgNum){
			product_currentimg --;
			//console.log(product_currentimg)
            //console.log(product_currentimg,product_imglen)
            $(".index-pb-leftblock .index-pb-left").eq(product_currentimg+1).fadeOut(1200);
			$(".index-pb-leftblock .index-pb-left").eq(product_currentimg).fadeIn(1200);	

            $(".index-pb-right .index-pbr-block > div").eq(product_currentimg+1).removeClass("index-pbr-mask-active");
            $(".index-pb-right .index-pbr-block:eq("+product_currentimg+") > div").addClass("index-pbr-mask-active");
            
        }
		else	return;
	})
}

//点击图片
function product_item_click(){
    $(".index-pb-right .index-pbr-block").on("click",function(){
        product_item_isclick = true;
        product_item_index = $(this).index() + title_index*product_imgNum ;   //当前点击索引
        //console.log(product_item_index)
        //console.log(product_item_index,product_currentimg)
        for(var i = title_index*product_imgNum;i < product_item_index; i++){ //当前板块开始索引到结束索引
            $(".index-pb-leftblock .index-pb-left").eq(i).fadeOut(1200);
        }
        
        $(".index-pb-leftblock .index-pb-left").eq(product_item_index).fadeIn(1200);	
        $(".index-pb-right .index-pbr-block > div").removeClass("index-pbr-mask-active");
        
        $(".index-pb-right .index-pbr-block:eq("+product_item_index+") > div").addClass("index-pbr-mask-active");
    })
}



var wow = new WOW({
    animateClass: 'animated',
});
wow.init();


