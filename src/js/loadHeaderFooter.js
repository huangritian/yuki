// 加载头部，尾部
define(["jquery"],function($){
	//加载头部
	console.log("!11111");
	$.ajax("/html/include/header.html").done(function(data){
		$(".header").html(data);
	})
	//加载尾部绑定 div.foorder
	$(".footer").load("/html/include/footer.html");
});
