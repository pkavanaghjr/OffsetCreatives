var controller;


$(document).ready(function() {


	var controller = new ScrollMagic();

	var projectArray = $("#projectSection").find(".project");

	var projectHeight = ($(".project").height()*6.63);


//=================================================================
//=================================================================
//======================= SCROLL SCENES ===========================
//=================================================================
//=================================================================




//========================= FMA - SCROLL MAGIC SCENE ================
	// Create the Scene and trigger when visible with ScrollMagic
	var headerScroll = new ScrollScene({
		triggerElement: '#headerSection',
		offset: 0, /* offset the trigger 150px below #scene's top */
		triggerHook: .8,
		duration: $("#headerSection").height()
	})
	.addTo(controller);

	headerScroll.on("enter", function (event) {
		TweenLite.to("#frameWord", .5, {text:"OFFSET", ease:Linear.easeNone});
		if (document.documentElement.clientWidth > 1499) {
			$("#botFrameLeft").stop(true).animate({width:"66vw", right:"30vw"},500,"easeInQuart");		
		}else if (document.documentElement.clientWidth > 977 && document.documentElement.clientWidth < 1500) {	
			$("#botFrameLeft").stop(true).animate({width:"66vw", right:"31vw"},500,"easeInQuart");		
		}else if (document.documentElement.clientWidth < 978 && document.documentElement.clientWidth > 699) {
			$("#botFrameLeft").stop(true).animate({width:"64vw", right:"33vw"},500,"easeInQuart");		
		}else if (document.documentElement.clientWidth < 700) {
			$("#botFrameLeft").stop(true).animate({width:"44vw", right:"51vw"},500,"easeInQuart");		
			$("#frameWord").stop(true).animate({right:"28vw",opacity:1},1000,"easeInQuart");
		}
	});


//========================= ABOUT - SCROLL MAGIC SCENE ================
	// Create the Scene and trigger when visible with ScrollMagic
	var aboutScroll = new ScrollScene({
		triggerElement: '#aboutSection',
		offset: 0, /* offset the trigger 150px below #scene's top */
		triggerHook: .8,
		duration: 500
	})
	.addTo(controller);

	aboutScroll.on("enter", function (event) {
		TweenLite.to("#frameWord", .5, {text:"ABOUT", ease:Linear.easeNone});
		if (document.documentElement.clientWidth > 1499) {
			$("#botFrameLeft").stop(true).animate({width:"67vw", right:"29vw"},450,"easeInQuart");
		}if (document.documentElement.clientWidth > 977 && document.documentElement.clientWidth < 1500) {	
			$("#botFrameLeft").stop(true).animate({width:"67vw", right:"30vw"},450,"easeInQuart");
		}else if (document.documentElement.clientWidth < 978 && document.documentElement.clientWidth > 699) {
			$("#botFrameLeft").stop(true).animate({width:"65vw", right:"32vw"},450,"easeInQuart");
		}else if (document.documentElement.clientWidth < 700) {
			$("#botFrameLeft").stop(true).animate({width:"44vw", right:"51vw"},500,"easeInQuart");		
			$("#frameWord").stop(true).animate({right:"28vw",opacity:1},1000,"easeInQuart");
		}
	});



//========================= PROJECTS - SCROLL MAGIC SCENE ================
	// Create the Scene and trigger when visible with ScrollMagic
	var projectScroll = new ScrollScene({
		triggerElement: '#projectSection',
		offset: 0, /* offset the trigger 150px below #scene's top */
		triggerHook: .8,
		duration: projectHeight
	})
	.addTo(controller);

	projectScroll.on("enter", function (event) {
		TweenLite.to("#frameWord", .5, {text:"PROJECTS", ease:Linear.easeNone});
		if (document.documentElement.clientWidth > 1499) {
			openSideNav();
			$("#botFrameLeft").stop(true).animate({width:"63vw", right:"33vw"},450,"easeInQuart");
		}else if (document.documentElement.clientWidth > 977 && document.documentElement.clientWidth < 1500) {	
			openSideNav();
			$("#botFrameLeft").stop(true).animate({width:"63vw", right:"34vw"},450,"easeInQuart");
		}else if (document.documentElement.clientWidth < 978 && document.documentElement.clientWidth > 699) {
			$("#botFrameLeft").stop(true).animate({width:"60vw", right:"37vw"},450,"easeInQuart");
		}else if (document.documentElement.clientWidth < 700) {
			$("#botFrameLeft").stop(true).animate({width:"35vw", right:"60vw"},500,"easeInQuart");		
			$("#frameWord").stop(true).animate({right:"28vw",opacity:1},1000,"easeInQuart");
		}
	});

	projectScroll.on("leave", function (event) {
		closeSideNav();
	});



//========================= SERVICES - SCROLL MAGIC SCENE ================
	// Create the Scene and trigger when visible with ScrollMagic
	var serviceScroll = new ScrollScene({
		triggerElement: '#serviceSection',
		offset: 0, /* offset the trigger 150px below #scene's top */
		triggerHook: .8,
		duration: 500
	})
	.addTo(controller);

	serviceScroll.on("enter", function (event) {
		TweenLite.to("#frameWord", .5, {text:"SERVICES", ease:Linear.easeNone});
		if (document.documentElement.clientWidth > 1499) {
			$("#botFrameLeft").stop(true).animate({width:"64vw", right:"32vw"},450,"easeInQuart");
		}else if (document.documentElement.clientWidth > 977 && document.documentElement.clientWidth < 1500) {	
			$("#botFrameLeft").stop(true).animate({width:"64vw", right:"33vw"},450,"easeInQuart");
		}else if (document.documentElement.clientWidth < 978 && document.documentElement.clientWidth > 699) {
			$("#botFrameLeft").stop(true).animate({width:"61vw", right:"36vw"},450,"easeInQuart");
		}else if (document.documentElement.clientWidth < 700) {
			$("#botFrameLeft").stop(true).animate({width:"36vw", right:"59vw"},500,"easeInQuart");		
			$("#frameWord").stop(true).animate({right:"28vw",opacity:1},1000,"easeInQuart");
		}
	});



//========================= CONTACT - SCROLL MAGIC SCENE ================
	// Create the Scene and trigger when visible with ScrollMagic
	var contactScroll = new ScrollScene({
		triggerElement: '#footerSection',
		offset: 0, /* offset the trigger 150px below #scene's top */
		triggerHook: .8,
		duration: $("#footerSection").height()
	})
	.addTo(controller);

	contactScroll.on("enter", function (event) {
		TweenLite.to("#frameWord", .5, {text:"CONTACT", ease:Linear.easeNone});
		if (document.documentElement.clientWidth > 1499) {
			$("#botFrameLeft").stop(true).animate({width:"63vw", right:"33vw"},450,"easeInQuart");
		}else if (document.documentElement.clientWidth > 977 && document.documentElement.clientWidth < 1500) {	
			$("#botFrameLeft").stop(true).animate({width:"64vw", right:"33vw"},450,"easeInQuart");
		}else if (document.documentElement.clientWidth < 978 && document.documentElement.clientWidth > 699) {
			$("#botFrameLeft").stop(true).animate({width:"60vw", right:"37vw"},450,"easeInQuart");
		}else if (document.documentElement.clientWidth < 700) {
			$("#botFrameLeft").stop(true).animate({width:"35vw", right:"60vw"},500,"easeInQuart");		
			$("#frameWord").stop(true).animate({right:"28vw",opacity:1},1000,"easeInQuart");
		}
	});







//=================================================================
//=================================================================
//======================= TWEEN SCENES ===========================
//=================================================================
//=================================================================




//========================= FMA - SCROLL MAGIC SCENE ================
if (document.documentElement.clientWidth > 977) {		
	// Create Animation for 0.5s
	var tweenFma = new TimelineMax ().add([
		TweenLite.to('#headerSection h1', 2.5, {top: "60%"}),	
		TweenLite.to('#headerImg img', 2.5, {top: "30%"}),	
		TweenLite.to('#offsetLogo', 2.5, {top: "55%"})
	])
	// Create the Scene and trigger when visible with ScrollMagic
	var sceneFma = new ScrollScene({
		triggerElement: '#headerSection',
		offset: 0,
		// offset: ($("#headerSection").height() / 10)*8, /* offset the trigger 150px below #scene's top */
		triggerHook: 0,
		duration: $("#headerSection").height()
	})
	.setTween(tweenFma)
	.addTo(controller);

	// sceneFma.on("enter", function (event) {
	//     console.log("FMA Scene Enter");
	// 	TweenLite.to("#frameWord", .5, {text:"HOME", ease:Linear.easeNone});
	// });
}

//========================= ABOUT - SCROLL MAGIC SCENE ================
		
	// Create Animation for 0.5s
	var tweenAbout = new TimelineMax ().add([
		TweenLite.to('#aboutSection h2', 1.2, {opacity:1,left:"10%"},'easeInOutQuart'),	
		TweenLite.to('#aboutSection p', 1.2, {delay:.2,opacity:1,left:"10%"},'easeInOutQuart')
	])
	// Create the Scene and trigger when visible with ScrollMagic
	var sceneAbout = new ScrollScene({
		triggerElement: '#aboutSection',
		offset: 0, /* offset the trigger 150px below #scene's top */
		triggerHook: .8,
		// duration: 500
	})
	.setTween(tweenAbout)
	.addTo(controller);


//========================= PROJECTS - SCROLL MAGIC SCENE ================
		
	// Create Animation for 0.5s
	var tweenProjects = new TimelineMax ().add([
		TweenLite.to('#projectSection h2', 1.2, {opacity:1,left:"10%"},'easeInOutQuart'),	
		TweenLite.to('#projectSection p', 1.2, {delay:.2,opacity:1,left:"10%"},'easeInOutQuart')
	])
	// Create the Scene and trigger when visible with ScrollMagic
	var sceneProject = new ScrollScene({
		triggerElement: '#projectSection',
		offset: 0, /* offset the trigger 150px below #scene's top */
		triggerHook: .8,
		// duration: $("#projectSection").height()
	})
	.setTween(tweenProjects)
	.addTo(controller);

	// sceneProject.on("enter", function (event) {
	//     console.log("Project Scene Enter");
	// 	TweenLite.to("#frameWord", .5, {text:"PROJECTS", ease:Linear.easeNone});
	// });


//========================= SERVICES - SCROLL MAGIC SCENE ================
		
	// Create Animation for 0.5s
	var tweenService = new TimelineMax ().add([
		TweenLite.to('#serviceSection h2', 1.2, {opacity:1,left:"10%"},'easeInOutQuart'),	
		TweenLite.to('#serviceSection p', 1.2, {delay:.2,opacity:1,left:"10%"},'easeInOutQuart'),
		TweenLite.to('.serviceButton', 1.2, {delay:.2,opacity:1,left:"10%"},'easeInOutQuart')
	])
	// Create the Scene and trigger when visible with ScrollMagic
	var sceneService = new ScrollScene({
		triggerElement: '#serviceSection',
		offset: 0, /* offset the trigger 150px below #scene's top */
		triggerHook: .8,
		// duration: $("#ServiceSection").height() * 1.2
	})
	.setTween(tweenService)
	.addTo(controller);

	// sceneService.on("enter", function (event) {
	//     console.log("Project Scene Enter");
	// 	TweenLite.to("#frameWord", .5, {text:"SERVICES", ease:Linear.easeNone});
	// });


//========================= CONTACT - SCROLL MAGIC SCENE ================
		
	// Create Animation for 0.5s
	var tweenFooter = new TimelineMax ().add([
		TweenLite.to('#footerSection h2', 1.2, {opacity:1,left:"10%"},'easeInOutQuart'),	
		TweenLite.to('#footerSection .sectionCaption', 1.2, {opacity:1,left:"10%"},'easeInOutQuart'),	
		TweenLite.to('#contactForm', 1.2, {delay:.2,opacity:1,left:"10%"},'easeInOutQuart'),
		TweenLite.to('.contactButton', 1.2, {delay:.2,opacity:1,},'easeInOutQuart')		
		// TweenLite.to('#copyright', 1.2, {delay:.2,opacity:1},'easeInOutQuart')
		// TweenLite.to('#copyright', 1.2, {delay:.5,opacity:1},'easeInOutQuart')
		// TweenLite.to('#thankYou', 1.2, {delay:.2,opacity:1,left:"10%"},'easeInOutQuart')
	])
	// Create the Scene and trigger when visible with ScrollMagic
	var sceneFooter = new ScrollScene({
		triggerElement: '#footerSection',
		offset: 0, /* offset the trigger 150px below #scene's top */
		triggerHook: .8,
		// duration: $("#footerSection").height() * 1.2
	})
	.setTween(tweenFooter)
	.addTo(controller);

	// sceneFooter.on("enter", function (event) {
	//     console.log("Project Scene Enter");
	// 	TweenLite.to("#frameWord", .5, {text:"CONTACT", ease:Linear.easeNone});
	// });




// ========================= SCROLL MAGIC INDICATORS ================
	// sceneFma.addIndicators({zindex: 100000, colorStart:"#f0ff00", suffix: "FMA"});	
	// sceneAbout.addIndicators({zindex: 100000, colorStart:"#0fff00", suffix: "ABOUT"});	
	// sceneProject.addIndicators({zindex: 100000, colorStart:"#0f0ff0", suffix: "PROJECT"});	
	// sceneService.addIndicators({zindex: 100000, colorStart:"#0f0f0f", suffix: "SERVICE"});	
	// sceneFooter.addIndicators({zindex: 100000, colorStart:"#00f0ff", suffix: "CONTACT"});	
	
});