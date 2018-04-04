{

	$(".banner_num p").each(function(index){
		$(this).click(function(){
			$(".banner_num p").removeClass("num_active")
				.eq(index).addClass("num_active");
			$(".banner_img img").removeClass("num_active")
				.eq(index).addClass("num_active");
		})
	});
}
{
	$(".trem_left_box").each(function(index){
		$(this).click(function(){
			$(".trem_left_img").removeClass("active1")
				.eq(index).addClass("active1");
			$(".trem_left_box").removeClass("active1")
				.eq(index).addClass("active1");
		})
	})
}
{
	$(".ren .img").each(function(index){
		$(this).click(function(){
			$(".renwu").removeClass("active2")
				.eq(index).addClass("active2");
		})
	});
}
//产品中心
{

	$(".num").each(function(index,val){

		$(this).click(function(){

				$(".inner").animate({"marginLeft":`${-1214*index}px`});

		})
	})

}
//案例展示
{
	$(".title_item").each(function(index,val){
		$(this).click(function(){
			$(".title_item .yangtai").removeClass("active1")
				.eq(index).addClass("active1");
			$(".inner_finish").removeClass("active1")
				.eq(index).addClass("active1");
		})
	})

	$(".num").each(function(index,val){
		$(this).click(function(){
			$(".inner_finish").removeClass("active1")
				.eq(index).addClass("active1");
		})
	})
}