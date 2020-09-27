	var volume;
	var id = 0;
	var player = "#player";
	var song = new Map();

	song.set(0, {
		title: "Shiki No Uta",
		artist: "Minmi",
		gif: "images/sc.gif",
		message: "Closing theme song for one of my favorite animes"
	});

	song.set(1, {
		title: "Apricot Princess",
		artist: "Rex Orange County",
		gif: "images/ap.gif",
		message: "Song just gives me life!!!"
	});
	song.set(2, {
		title: "UNFAIR",
		artist: "Victor Internet",
		gif: "images/u.gif",
		message: "Whenever im sad this is the song I turn to."
	});

	song.set(3, {
		title: "Cherry Blossom Kiss",
		artist: "Chieko Kawabe",
		gif: "images/oh.gif",
		message: "Discovered this song in middleschool along with my siblings we watched all of Ouran highchool anime"
	});

	song.set(4, {
		title: "Hot Tub Time Machine",
		artist: "Tobi Lou",
		gif: "images/tlh.gif",
		message: "Discovered this song in middleschool along with my siblings we watched all of Ouran highchool anime"
	});

	song.set(5, {
		title: "If This Is Love",
		artist: "Xavier Omar",
		gif: "images/xo.gif",
		message: "I discovered this in middle school and would play it everyday for 6 months."
	});

	song.set(6, {
		title: "Rocketeer",
		artist: "Far East Movement",
		gif: "images/fem.gif",
		message: "I dont remeber when i first heard this song but it was was maybe around elementary and it just makes me so calm and happy."
	});

	song.set(7, {
		title: "Both Of Us",
		artist: "B.O.B & Taylor Swift",
		gif: "images/bou.gif",
		message: "This is the song me and my sibling used to all sing to 4 of us would sing and my late brother zenavie would rap."
	});
  song.set(8, {
		title: "like My Mom",
		artist: "Tobi Lou",
		gif: "images/lmm.gif",
		message: "I discovered this on spotify sometime near mothers day and it just inspires me and reminds me off my mom I LOVE HER SO MUCH!!!."
	});
	var main = function () {

		//The Next Button
		$('#next').click(function () {
			$(player + id).trigger("pause");
			if (id == song.size - 1) {
				id = 0;
				playSelectSong(id);
				return false;
			}
			id++;
			playSelectSong(id)
			$('#message').text("New Song");
		});

		//The PLAY button
		$('#play').click(function () {
			$('#message').text("Track Playing");
			$(player + id).trigger("play");
		});

		//Pause button
		$('#pause').click(function () {
			//console.log(player + id);
			$('#message').text("Track paused");
			$(player + id).trigger("pause");
		});


		//This will assign the variable muted with true or false
//		muted = $(player + id).prop('muted');

		//Mute button
		$('#mute').click(function () {
       muted = $(player + id).prop('muted');

			if (muted == true) {
				$('#message').text("Track un-muted");
				$(player + id).prop('muted', false);
			}
			else {
				$('#message').text("Track muted");
				$(player + id).prop('muted', true);
				console.log("in else" + muted);
			}

		});


		//Stop button
		$('#stop').click(function () {
			$('#message').text("Track Stoped");
			$(player + id).trigger("pause");
			$(player + id).prop('currentTime', 0);
		});

		//Volume Up Button
		$('#volup').click(function () {
			$(player + id).prop('volume', $(player + id).prop('volume') + 0.1);
		});

		//Volume down button
		$('#voldwn').click(function () {
			$(player + id).prop('volume', $(player + id).prop('volume') - 0.1);
		});

	};

	$(document).ready(main);

	function playSelectSong(inId) {
		$(player + id).trigger("pause");
		console.log("inid: " + inId);
		id = inId;
		document.getElementById("visual_box").style.backgroundImage = "url(" + song.get(id).gif + ")";
		console.log("updated id:" + id);

		var div = `<div class="vs_txt">
               <h1>${song.get(id).title} by ${song.get(id).artist}</h1>
               <span>${song.get(id).message}</span>
               </div>`;

		document.getElementById("visual_box").innerHTML = div;

	};

	function loadSongs() {
		var ul = "<ul>";
		for (let key of song.keys()) {
			ul += "<li><button onclick=playSelectSong(" + key + ")>" + song.get(key).title + "</button></li>";
		}
		ul += "</ul>";
		document.getElementById("song_directory").innerHTML = ul;
	};
