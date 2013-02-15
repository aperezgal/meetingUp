/**
 * User: Alberto Perez
 * Date: 15/02/13
 * Time: 10:12
 */


window.onload = function(){


	/**************************************************************************
	*
	*					global vars
	*
	***************************************************************************/
	var controls;



	/**************************************************************************
	*
	*					functions
	*
	***************************************************************************/

	function onInitConnection(evt) {
		evt.stopPropagation();
	    evt.preventDefault();

	    alert('Initialize components');


		controls = new MEETING_UP.MeetingUp(document.getElementById( 'containerConnection' ), document.getElementById( 'videoElement' ));
		controls.initialize();


	}


	/**************************************************************************
	*
	*					initialize elements
	*
	***************************************************************************/
	var initButton = document.getElementById('initButton');

	initButton.addEventListener('click', onInitConnection, false);
}
