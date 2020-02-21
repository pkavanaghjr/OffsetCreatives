$(document).ready(function() {
					

	var pageLocation = "home";

	// $(".aboutButton").on("tap",function(event){
	// 	event.preventDefault();
	// 	pageLocation = "about";
	// 	console.log(pageLocation);
	// 	if(pageLocation = "home"){
	// 		$("#about").css("z-index","10");
	// 		$("#home").css("z-index","-1");
	// 		$("#home").animate({top:"100%",left:"100%"},1000,"easeOutExpo");
	// 		$("#about").animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	// 	} else if(pageLocation = "work"){
	// 		$("#about").css("z-index","10");
	// 		$("#work").css("z-index","-1");
	// 		$("#work").animate({top:"0px",left:"100%"},1000,"easeOutExpo");
	// 		$("#about").animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	// 	} else if(pageLocation = "services"){
	// 		$("#about").css("z-index","10");
	// 		$("#services").css("z-index","-1");
	// 		$("#services").animate({top:"100%",left:"100%"},1000,"easeOutExpo");
	// 		$("#about").animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	// 	} else if(pageLocation = "news"){
	// 		$("#about").css("z-index","10");
	// 		$("#news").css("z-index","-1");
	// 		$("#news").animate({top:"100%",left:"100%"},1000,"easeOutExpo");
	// 		$("#about").animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	// 	};
	// });

	$(".aboutButton").on("tap",function(event){
		event.preventDefault();
		pageLocation = "about";
		console.log(pageLocation);
		$("#home").stop(true).animate({top:"100%",left:"100%"},1000,"easeOutExpo");
	 	$("#about").stop(true).animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	});

	$(".aboutHome").on("tap",function(event){
		event.preventDefault();
		pageLocation = "home";
		console.log(pageLocation);
		$("#about").stop(true).animate({top:"-100%",left:"-100%"},1000,"easeOutExpo");
		$("#home").stop(true).animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	});	

	$(".workAbout").on("tap",function(event){
		event.preventDefault();
		pageLocation = "about";
		console.log(pageLocation);
		$("#about").css("top","0px");
		$("#work").stop(true).animate({top:"0%",left:"100%"},1000,"easeOutExpo");
		$("#about").stop(true).animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	});	

	$(".servicesAbout").on("tap",function(event){
		event.preventDefault();
		pageLocation = "about";
		console.log(pageLocation);
		$("#about").css("left","0px");
		$("#services").stop(true).animate({top:"100%",left:"0%"},1000,"easeOutExpo");
		$("#about").stop(true).animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	});	

	$(".newsAbout").on("tap",function(event){
		event.preventDefault();
		pageLocation = "about";
		console.log(pageLocation);
		$("#about").css("top","-100%").css("left","-100%");
		$("#news").stop(true).animate({top:"100%",left:"100%"},1000,"easeOutExpo");
		$("#about").stop(true).animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	});	





	$(".workButton").on("tap",function(event){
		event.preventDefault();
		pageLocation = "work";
		console.log(pageLocation);
		$("#home").stop(true).animate({top:"100%",left:"-100%"},1000,"easeOutExpo");
		$("#work").stop(true).animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	});

	$(".workHome").on("tap",function(event){
		event.preventDefault();
		pageLocation = "home";
		console.log(pageLocation);
		$("#work").stop(true).animate({top:"-100%",left:"100%"},1000,"easeOutExpo");
		$("#home").stop(true).animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	});

	$(".aboutWork").on("tap",function(event){
		event.preventDefault();
		pageLocation = "work";
		console.log(pageLocation);
		$("#work").css("top","0px");
		$("#about").stop(true).animate({top:"0%",left:"-100%"},1000,"easeOutExpo");
		$("#work").stop(true).animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	});

	$(".servicesWork").on("tap",function(event){
		event.preventDefault();
		pageLocation = "work";
		console.log(pageLocation);
		$("#work").css("top","-100%").css("left","100%");
		$("#services").stop(true).animate({top:"100%",left:"-100%"},1000,"easeOutExpo");
		$("#work").stop(true).animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	});

	$(".newsWork").on("tap",function(event){
		event.preventDefault();
		pageLocation = "work";
		console.log(pageLocation);
		$("#work").css("left","0px");
		$("#news").stop(true).animate({top:"100%",left:"0%"},1000,"easeOutExpo");
		$("#work").stop(true).animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	});







	$(".servicesButton").on("tap",function(event){
		event.preventDefault();
		pageLocation = "services";
		console.log(pageLocation);
		$("#home").stop(true).animate({top:"-100%",left:"100%"},1000,"easeOutExpo");
		$("#services").stop(true).animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	});

	$(".servicesHome").on("tap",function(event){
		event.preventDefault();
		pageLocation = "home";
		console.log(pageLocation);
		$("#services").stop(true).animate({top:"100%",left:"-100%"},1000,"easeOutExpo");
		$("#home").stop(true).animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	});

	$(".aboutServices").on("tap",function(event){
		event.preventDefault();
		pageLocation = "services";
		console.log(pageLocation);
		$("#services").css("left","0px");
		$("#about").stop(true).animate({top:"-100%",left:"0%"},1000,"easeOutExpo");
		$("#services").stop(true).animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	});

	$(".workServices").on("tap",function(event){
		event.preventDefault();
		pageLocation = "services";
		console.log(pageLocation);
		$("#services").css("top","100%").css("left","-100%");
		$("#work").stop(true).animate({top:"-100%",left:"100%"},1000,"easeOutExpo");
		$("#services").stop(true).animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	});

	$(".newsServices").on("tap",function(event){
		event.preventDefault();
		pageLocation = "services";
		console.log(pageLocation);
		$("#services").css("top","0px");
		$("#news").stop(true).animate({top:"0%",left:"100%"},1000,"easeOutExpo");
		$("#services").stop(true).animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	});




	$(".newsButton").on("tap",function(event){
		event.preventDefault();
		pageLocation = "news";
		console.log(pageLocation);
		$("#home").stop(true).animate({top:"-100%",left:"-100%"},1000,"easeOutExpo");
		$("#news").stop(true).animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	});

	$(".newsHome").on("tap",function(event){
		event.preventDefault();
		pageLocation = "home";
		console.log(pageLocation);
		$("#news").stop(true).animate({top:"100%",left:"100%"},1000,"easeOutExpo");
		$("#home").stop(true).animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	});

	$(".aboutNews").on("tap",function(event){
		event.preventDefault();
		pageLocation = "news";
		console.log(pageLocation);
		$("#news").css("top","100%").css("left","100%");
		$("#about").stop(true).animate({top:"-100%",left:"-100%"},1000,"easeOutExpo");
		$("#news").stop(true).animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	});

	$(".workNews").on("tap",function(event){
		event.preventDefault();
		pageLocation = "news";
		console.log(pageLocation);
		$("#news").css("left","0px");
		$("#work").stop(true).animate({top:"-100%",left:"0%"},1000,"easeOutExpo");
		$("#news").stop(true).animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	});

	$(".servicesNews").on("tap",function(event){
		event.preventDefault();
		pageLocation = "news";
		console.log(pageLocation);
		$("#news").css("top","0px");
		$("#services").stop(true).animate({top:"0%",left:"-100%"},1000,"easeOutExpo");
		$("#news").stop(true).animate({top:"0px",left:"0px"},1000,"easeOutExpo");
	});

	
	
});