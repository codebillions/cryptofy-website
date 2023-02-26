/* =================================
------------------------------------
	Cryptocurrency - Landing Page Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


$( window ).on( 'load', function () {
	/*------------------
		Preloder
	--------------------*/
	$( ".loader" ).fadeOut();
	$( "#preloder" ).delay( 400 ).fadeOut( "slow" );

} );

( function ( $ ) {

	/*------------------
		Navigation
	--------------------*/
	$( '.responsive-bar' ).on( 'click', function ( event ) {
		$( '.main-menu' ).slideToggle( 400 );
		event.preventDefault();
	} );


	/*------------------
		Background set
	--------------------*/
	$( '.set-bg' ).each( function () {
		var bg = $( this ).data( 'setbg' );
		$( this ).css( 'background-image', 'url(' + bg + ')' );
	} );


	/*------------------
		Review
	--------------------*/
	var review_meta = $( ".review-meta-slider" );
	var review_text = $( ".review-text-slider" );


	review_text.on( 'changed.owl.carousel', function ( event ) {
		review_meta.trigger( 'next.owl.carousel' );
	} );


	review_text.owlCarousel( {
		loop: true,
		nav: true,
		dots: false,
		items: 1,
		margin: 20,
		autoplay: true,
		navText: [ '<i class="ti-angle-left"><i>', '<i class="ti-angle-right"><i>' ],

	} );



	/*------------------
	   Contact Form
   --------------------*/
	$( ".check-form" ).focus( function () {
		$( this ).next( "span" ).addClass( "active" );
	} );
	$( ".check-form" ).blur( function () {
		if ( $( this ).val() === "" ) {
			$( this ).next( "span" ).removeClass( "active" );
		}
	} );


} )( jQuery );

var btn = document.getElementsByClassName( "btn" );

var slide = document.getElementByid( "slide" );

btn[ 0 ].onclick = function () {

	slide.style.transform = "translateX( 0px )";

}

btn[ 1 ].onclick = function () {

	slide.style.transform = "translateX( -800px )";

}

btn[ 2 ].onclick = function () {

	slide.style.transform = "translateX( -1600px )";

}


