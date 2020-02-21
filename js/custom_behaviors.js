	function openMainNav(){
		if($("#navigation").is(":visible")){
			$("#navigation h3, #navigation h4").animate({opacity:0},500,function(){
				$("#navigation h3, #navigation h4").css("display", "none");
			});
			$("#navigation").animate({width:"0px"},500,"easeInOutQuart",function(){
				$("#navigation").css("display", "none");
			});			
			$(".top").css("zindex", "1000");	
		} else{
			$(".top").css("zindex", "-1");		
			$("#navigation, #navigation h3, #navigation h4").css("display", "block");		
			$("#navigation").animate({width:"39vw"},500,"easeInOutQuart");		
			$("#navigation h3, #navigation h4").animate({opacity:1},500);		
		};
	};


	function openMainNavMobile(){
		if($("#navigation").is(":visible")){
			$("#navigation h3, #navigation h4").animate({opacity:0},500,function(){
				$("#navigation h3, #navigation h4").css("display", "none");
			});
			$("#navigation").animate({width:"0px"},500,"easeInOutQuart",function(){
				$("#navigation").css("display", "none");
			});			
			$(".top").css("zindex", "1000");	
		} else{
			$(".top").css("zindex", "-1");		
			$("#navigation, #navigation h3, #navigation h4").css("display", "block");		
			$("#navigation").animate({width:"91vw"},500,"easeInOutQuart");		
			$("#navigation h3, #navigation h4").animate({opacity:1},500);		
		};
	};


	function openSideNav(){
		$("#leftFrameTop").stop(true).animate({height:"26vh", top:"3vh"},500,"easeInQuart");
		$("#leftFrameBot").stop(true).animate({height:"26vh", bottom:"9vh"},500,"easeInQuart");
		// $("#sideNav a").stop(true).animate({},function(){	
		for(i=0;i<$("#sideNav .projectNLN").length;i++){
			$("#sideNav .projectNLN").stop(true).delay(75*i).animate({height:"25px"},500);			
		};	
		// });	
	};

	function closeSideNav(){
		$("#leftFrameTop").stop(true).animate({height:"0vh", top:"3vh"},500,"easeInQuart");
		$("#leftFrameBot").stop(true).animate({height:"88vh"},500,"easeInQuart");
		for(i=0;i<$("#sideNav .projectNLN").length;i++){
			$("#sideNav .projectNLN").stop(true).delay(75*i).animate({height:"0px"},500);
		};	
	};





$(document).ready(function() {


	// INITIALIZATION				
navigator.sayswho= (function(){
	var ua= navigator.userAgent, tem, 
	M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	if(/trident/i.test(M[1])){
		tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
		return 'IE '+(tem[1] || '');
	}

	if(M[0]=== 'msie'){
	alert("Internet Explorer does not support this website, please download another web browser like Google Chrome or Mozilla Firefox");
    window.location = "https://www.google.com/intl/en/chrome/browser/desktop/index.html#brand=CHMB&utm_campaign=en&utm_source=en-ha-na-us-sk&utm_medium=ha";
		tem= ua.match(/\bOPR\/(\d+)/)
		if(tem!= null) return 'msie '+tem[1];
	}
	
	M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
	if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
	return M.join(' ');
})();	


	//======= SCROLL TOP ON REFRESH =======
    $('html').animate({scrollTop:0}, 1);
    $('body').animate({scrollTop:0}, 1);	


	var projectArray = $("#projectSection").find(".project");
	var projectHeight = ($(".project").height()*6.63);


	

//========================= NAV EASING ================
	$('#navigation a').on("tap",function(event){
		event.preventDefault();
		openMainNav();
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000,'easeInOutQuart');
	});		


	$('.projectNLN').on("tap",function(event){
		event.preventDefault();
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top-40
		}, 600,'easeInOutQuart');
	});		



	$('#frameNavigation').on('tap', function(event){
		event.preventDefault();
		openMainNav();
	});

	$('#mobileFrameNavigation').on('tap', function(event){
		event.preventDefault();
		openMainNavMobile();
	});



//========================= START PARTY ================
// 	function startParty(){
// $("#botFrameRight").stop(true).animate({width:"10vw"},1500,"easeInOutQuart",function(){
// 	$("#rightFrameTop").stop(true).animate({height:"88vh"},1500,"easeInOutQuart",function(){

// 	})
// })
// }
	
	var firstFrame = false;

	function startFrame(){
		if (document.documentElement.clientWidth > 1499) {	
			$("#frameWord").stop(true).delay(0).animate({right:"20vw",opacity:1},1000,"easeInQuart");
			$("#mobileFrameNavigation").stop(true).delay(0).animate({right:"16vw",opacity:1},1000,"easeInQuart");		
			$("#botFrameLeft").stop(true).delay(950).animate({width:"66vw"},500,"easeInQuart");				
			$("#topFrameLeft").stop(true).delay(950).animate({width:"93vw"},500);
		}else if (document.documentElement.clientWidth > 699 && document.documentElement.clientWidth < 1500) {	
			$("#frameWord").stop(true).delay(0).animate({right:"20vw",opacity:1},1000,"easeInQuart");
			$("#mobileFrameNavigation").stop(true).delay(0).animate({right:"16vw",opacity:1},1000,"easeInQuart");		
			$("#botFrameLeft").stop(true).delay(950).animate({width:"66vw"},500,"easeInQuart");	
			$("#topFrameLeft").stop(true).delay(950).animate({width:"94vw"},500);		
		}else if (document.documentElement.clientWidth < 700) {
			$("#frameWord").stop(true).delay(0).animate({right:"28vw",opacity:1},1000,"easeInQuart");
			$("#mobileFrameNavigation").stop(true).delay(0).animate({right:"18vw",opacity:1},1000,"easeInQuart");		
			$("#botFrameLeft").stop(true).delay(950).animate({width:"44vw", right:"51vw"},500,"easeInQuart");	
			$("#topFrameLeft").stop(true).delay(950).animate({width:"94vw"},500);		
		}			

		$("#leftFrameBot").stop(true).delay(1450).animate({height:"88vh"},500);
		$("#rightFrameTop").stop(true).delay(1450).animate({height:"88vh"},500);
		$("#botFrameRight").stop(true).delay(950).animate({width:"10vw"},500);
		$("#frameNavigation").stop(true).delay(0).animate({right:"16vw",opacity:1},1000,"easeInQuart");
		var tweenTitle = TweenLite.to("#headerSection h1", 1, {text:"DO IT FOR THE STORY", delay: 1.85, ease:Linear.easeNone});
		firstFrame = true;
	};

	// function startFrame(){
	// 	$("#frameWord").stop(true).delay(0).animate({right:"20vw",opacity:1},1000,"easeInQuart");
	// 	$("#botFrameLeft").stop(true).delay(940).animate({width:"66vw"},500,"easeInQuart");
	// 	$("#leftFrameBot").stop(true).delay(1450).animate({height:"88vh"},500);
	// 	$("#topFrameLeft").stop(true).delay(1950).animate({width:"94vw"},500);
	// 	$("#rightFrameTop").stop(true).delay(2450).animate({height:"88vh"},500);
	// 	$("#botFrameRight").stop(true).delay(2950).animate({width:"10vw"},500);
	// 	$("#frameNavigation").stop(true).delay(3050).animate({right:"16vw",opacity:1},500);
	// 	var tweenTitle = TweenLite.to("#headerSection h1", 1, {text:"DO IT FOR THE STORY", delay: 3.2, ease:Linear.easeNone});
	// 	firstFrame = true;
	// };

	// function startFrame(){
	// 	$("#frameWord").stop(true).delay(0).animate({right:"20vw",opacity:1},1000,"easeInQuart",function(){
	// 	$("#botFrameLeft").stop(true).animate({width:"66vw"},500,"easeInQuart",function(){
	// 	$("#leftFrameBot").stop(true).animate({height:"88vh"},500,function(){
	// 	$("#topFrameLeft").stop(true).animate({width:"94vw"},500,function(){
	// 	$("#rightFrameTop").stop(true).animate({height:"88vh"},500,function(){
	// 	$("#botFrameRight").stop(true).animate({width:"10vw"},500,function(){
	// 	$("#frameNavigation").stop(true).animate({right:"16vw",opacity:1},500,function(){
	// 	var tweenTitle = TweenLite.to("#headerSection h1", 1, {text:"DO IT FOR THE STORY", ease:Linear.easeNone});
	// 	});	});	});	});	});	});	});
	// 	firstFrame = true;
	// };


	startFrame();

//========================= OPEN PROJECT ================

	function closeProjectModal() {
		var index = $(this).parent().children().index(this);
		console.log(index);
		// var amount = index * 30;
		// console.log(amount);
		if (document.documentElement.clientWidth > 977) {
			openSideNav();
		}

		$(this).removeClass("open");
		$("body").css("overflow","scroll");			
		$(".closeProject").stop(true).animate({opacity:0},500,function(){
			$(".closeProject").css("display","none");
		});			
		$(".hiddenContent").stop(true).animate({height:"0vh"}, 500, "easeInOutQuart",function(){
			$(".hiddenContent").css("display", "none");
		});			
		$(this).delay(500).animate({height:"80vh"}, 750, "easeInOutQuart");
		projectArray.splice(index,0,this);
		console.log(projectArray);
		$(projectArray).css("display","block");
		$("#frameNavigation,#mobileFrameNavigation, #frameWord").stop(true).animate({opacity:1},750);
	}


	$('.project').on("tap",function(event){
		var index = $(this).parent().children().index(this);
		console.log(index);


    	if($(this).hasClass("open")){
			if (document.documentElement.clientWidth > 977) {
    			openSideNav();
    		}

			$(this).removeClass("open");
			$("body").css("overflow","scroll");			
			$(".closeProject").stop(true).animate({opacity:0},500,function(){
				$(".closeProject").css("display","none");
			});			
			$(".hiddenContent").stop(true).animate({height:"0vh"}, 500, "easeInOutQuart",function(){
				$(".hiddenContent").css("display", "none");
			});			
			$(this).delay(500).animate({height:"80vh"}, 750, "easeInOutQuart");
			projectArray.splice(index,0,this);
			console.log(projectArray);
			$(projectArray).css("display","block");
			$("#frameNavigation,#mobileFrameNavigation, #frameWord").stop(true).animate({opacity:1},750);

    	}else{
    		if($("#navigation").is(":visible")){
    			openMainNav();
    		};
    		closeSideNav();    		
			$('html, body').stop(true).animate({
				scrollTop: $(projectArray[index]).offset().top
			}, 1000,'easeInOutQuart');
			console.log(projectArray);
			$(projectArray[index]).addClass("open");
			$("body").css("overflow","hidden");
			$(".closeProject").css("display","block");
			$(".closeProject").stop(true).animate({opacity:1},500);
			$(projectArray[index]).animate({height:"20vh"}, 750, "easeInOutQuart");
			projectArray.splice(index,1);
			$(projectArray).css("display","none");
			$("#frameNavigation,#mobileFrameNavigation, #frameWord").stop(true).animate({opacity:0},750);
			$(".hiddenContent").stop(true).delay(500).css("display", "block").animate({opacity:1, height:"80vh"}, 750, "easeInOutQuart");		
		}
	});



//========================= VIEW NEXT PROJECT ================
	$('.nextProject').on("tap",function(event){
		event.preventDefault();
		closeProjectModal();

		var $anchor = $(this);
		$('html, body').stop().delay(600).animate({
			scrollTop: $($anchor.attr('href')).offset().top-40
		}, 1000,'easeInOutQuart');

	});		

//========================= BUTTON HOVER ================
	$(".serviceButton").mouseover(function(){
		TweenLite.to(".serviceButton h3", .5, {text:"DO IT", ease:Linear.easeNone});
	}).mouseout(function(){
		TweenLite.to(".serviceButton h3", .5, {text:"SERVICES", ease:Linear.easeNone});
	});


	$(".contactButton").mouseover(function(){
		TweenLite.to(".contactButton h3", .5, {text:"DO IT", ease:Linear.easeNone});
	}).mouseout(function(){
		TweenLite.to(".contactButton h3", .5, {text:"SUBMIT", ease:Linear.easeNone});
	});


	$(".websiteButton").mouseover(function(){
		TweenLite.to(".websiteButton h3", .5, {text:"ENTER THE MATRIX", ease:Linear.easeNone});
	}).mouseout(function(){
		TweenLite.to(".websiteButton h3", .5, {text:"VISIT WEBSITE", ease:Linear.easeNone});
	});



// _______________________ BERT EMAIL FORM _____________________________________
	// VARIABLES
	var name = $("#name");
	var email = $("#email");
	var comments = $("#comments");
	// var button = $("input[type=button]");
	var button = $(".contactButton");
	
	// EVENT HANDLERS
	button.on("tap", function(event){
		event.preventDefault();

		var nameForm = name.val();
		var emailForm = email.val();
		var commentsForm = comments.val();
		
		var validEmail = validateForm(emailForm);

		if(validEmail == true){
			
			$.ajax({
				url: "contact.php",
				type:'POST',
				data:
				{
					nameForm: nameForm,
					emailForm: emailForm,					
					commentsForm: commentsForm,
				},
				success: showConfirmation()    
			});
		} else {
			input.addClass("invalid");
		};

		writeTextToPage(nameForm+"!","#nameHolder");

		hideForm();

	});
	
	$("#submit").mouseover(function(){		
		TweenLite.to("#submit", .5, {text:"DO IT", ease:Linear.easeNone});
	}).mouseout(function(){		
		TweenLite.to("#submit", .5, {text:"SUBMIT", ease:Linear.easeNone});
	});



	function validateForm(email) {
		var atpos = email.indexOf("@");
		var dotpos = email.lastIndexOf(".");
		if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.length) {
			return false;
		};
		return true;
	};
	
	function showConfirmation(){
		console.log("Message sent!")
	}


	function hideForm(){		
		console.log("animate Out");
		$("#contactForm").stop(true).animate({opacity:0,left:"2%"},1000,function(){
			$("#contactForm").stop(true).delay(1000).css("display", "none");	
		});					
		$("#thankYou").stop(true).delay(350).css("display", "block");	
		$("#thankYou").stop(true).delay(350).animate({opacity:1, left:"10%"},1000);		
	};

// _______________________ WRITE QUERY STRING TO PAGE _____________________________________
	function writeTextToPage(textToWrite, destination){
		$(destination).html(textToWrite);
		
	};	

	
});