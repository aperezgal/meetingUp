/**
 * User: Alberto Perez
 * Date: 15/02/13
 * Time: 16:41
 */

/** @namespace */
/* -------------------------------------------------------------------
* define objects (name space) for this library.
* ----------------------------------------------------------------- */
if( typeof MEETING_UP == 'undefined' ) {
    MEETING_UP = new Object();
}

(function () {






/* -------------------------------------------------------------------
* constructor
* ----------------------------------------------------------------- */
MEETING_UP.MeetingUp = function ( object, video) {

    this.object = object;
    this.videoElement = video;
};


/* -------------------------------------------------------------------
* prototypes
* ----------------------------------------------------------------- */
    var proto = MEETING_UP.MeetingUp.prototype;

    proto.object;
   	proto.videoElement;


/* -------------------------------------------------------------------
* functions
* ----------------------------------------------------------------- */

	/**
    * initialize the component
    */
	proto.initialize = function( ) {
		 console.log('Initialize components properties!!');


		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
   		navigator.mozGetUserMedia || navigator.msGetUserMedia;

		var stream;
		var video = this.videoElement;

		var n = navigator.getUserMedia({audio: true, video: true}, function(localMediaStream) {
		  window.stream = localMediaStream;
		  
		  try {
		    video.src = window.URL.createObjectURL(localMediaStream);
		  } catch(e) {
		    try {
		      video.mozSrcObject = localMediaStream;
		      video.play();
		    } catch(e){
		      console.log("Error setting video src: ", e);
		    }
		  }
		}, function(error) {
		  console.log("navigator.getUserMedia error: ", error);
		});
	}



	

 	/**
    * To stop listening of the keyboard events
    */
    proto.destroy	= function(){
        // unbind keyEvents
       console.log("destroy");


    }

})();
