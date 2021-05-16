$(document).ready(function() {
		
	var radioPlayer = document.getElementById('radioPlayer');
	
	var KPBXradio = 'http://173.192.70.138:8700/;';
	var KSFCradio = 'http://173.192.70.138:8710/;';
	var KPBZradio = 'http://173.192.70.138:8720/;';
		
	$(".playPause").click(function () {
		var playerName = $(this).attr('id');
		$('.ppIndicator').removeClass("fa-pause"); 

		if (eval(playerName) == radioPlayer.src) {	//stop playback
			radioPlayer.pause();
			radioPlayer.src = null;
			radioPlayer.load();
			return "stop";
		}

		radioPlayer.src = eval(playerName);
		radioPlayer.load();
		radioPlayer.play();
		//$('#' + playerName + '>.ppIndicator').html("&#9724;");
		$("#" + playerName + '>.ppIndicator').addClass("fa-pause"); 
		console.log(radioPlayer.networkState);
	});
	
	
	
	$('#radioPlayer').on('error', function failed(e) {
   // audio playback failed - show a message saying why
   // to get the source of the audio element use $(this).src
   switch (e.target.error.code) {
     case e.target.error.MEDIA_ERR_ABORTED:
       alert('You aborted the video playback.');
       break;
     case e.target.error.MEDIA_ERR_NETWORK:
       alert('A network error caused the audio download to fail.');
       break;
     case e.target.error.MEDIA_ERR_DECODE:
       alert('The audio playback was aborted due to a corruption problem or because the video used features your browser did not support.');
       break;
     case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
       alert('The video audio not be loaded, either because the server or network failed or because the format is not supported.');
       break;
     default:
       alert('An unknown error occurred.');
       break;
   }
 }, true);
 
 	$('audio').on('playing', function playing(e) {
   // audio playback failed - show a message saying why
   // to get the source of the audio element use $(this).src
       console.log('Audio playing.');
   });

 
 
});

