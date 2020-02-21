$(document).ready(function() {
			
	var clientArray = new Array(".fadeOne",".fadeTwo",".fadeThree");

//========================= PAGE LOAD ANIMATION ================
	function startParty(){
		$("#fmaLogo").animate({opacity:1},2000)
		$("#contact").delay(1150).animate({opacity:1},1000)
		for(i=0;i<clientArray.length;i++){
			$(clientArray[i]).stop(true).delay(350*i).animate({opacity:1},1000);	
		};			
	}

	startParty();

	
});