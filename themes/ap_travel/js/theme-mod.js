jQuery( document ).ready(function() {
 
	jQuery("#center_column > .clearfix > .row").last().css("display" , "none");
	jQuery("#center_column > .clearfix").find(".row:nth-child(2)").find(".widget:nth-child(2)").css("display" , "none");
	jQuery("#center_column > .clearfix").find(".row:nth-child(2)").find(".widget:nth-child(1)").removeClass("col-md-9");
	jQuery("#center_column > .clearfix").find(".row:nth-child(2)").find(".widget:nth-child(1)").removeClass("col-lg-9");
	jQuery("#center_column > .clearfix").find(".row:nth-child(2)").find(".widget:nth-child(1)").removeClass("col-md-12");
	jQuery("#center_column > .clearfix").find(".row:nth-child(2)").find(".widget:nth-child(1)").removeClass("col-lg-12");
	jQuery("#newsletter-input").attr("placeholder" , "Introduzca su email ;)");
	jQuery(".megamenu").find("li:nth-child(3)").css("display" , "none");
	jQuery(".megamenu").find("li:nth-child(7)").css("display" , "none");

	jQuery(".myaccount-link-list > li > a").hover(function() {

		//jQuery(this).find(span).css("");
	});
});

var boxMoveActivated = false;
var previousX;
var previousY;

function centerElement( element ){

	var $window = $( window );
	var width = $window.width();
	var height = $window.height();
	var $box = $( element );

	$box.css( "position" , "relative" );
	$box.css( "top" , "" + ( ( height / 2 ) - ( $box.height() / 2 )  ) + "px" );
	$box.css( "left" , "" + ( ( width / 2 ) - ( $box.width() / 2 )  ) + "px" );

}

function toggleBoxActivation(){

	if ( boxMoveActivated == true ) {

		boxMoveActivated = false;

	} else {

		boxMoveActivated = true;

	}
}