			function drag(ev){
				ev.dataTransfer.effectAllowed = 'move';
				ev.dataTransfer.setData("text/plain", ev.target.getAttribute('id'));
				ev.dataTransfer.setDragImage(ev.target, 0, 0);
				return true;
			}
			
			function dragOver(ev){
				ev.preventDefault();
			}

			function drop(ev){
				ev.preventDefault();
				var data=ev.dataTransfer.getData("Text");
				ev.target.appendChild(document.getElementById(data));
				ev.preventDefault();
				var artist = document.getElementById("artist");
				artist.innerHTML = data;
			}
			
			function dropReturn(ev){
				ev.preventDefault();
				var data=ev.dataTransfer.getData("Text");
				ev.target.appendChild(document.getElementById(data));
				ev.preventDefault();

				var artist = document.getElementById("artist");
				artist.innerHTML = "";
				var song = document.getElementById("music");
				song.innerHTML = "";
			}
			
			function dragEnd(ev) {
				return true;
			}
			
			function startMusic(){
				var song = document.getElementById("music");
				var artistName = document.getElementById("artist").innerHTML;
				var artistDisplay = document.getElementById("artist");
				if(artistName == "vaccines"){
					song.innerHTML = "<embed src='./Vaccines_BadMood.mp3' hidden=false autostart=true loop=false>";
					artist.innerHTML = "The Vaccines - Bad Mood";
					//song.innerHTML = "<audio src='./Vaccines_BadMood.mp3' controls autoplay>Your browser does not support the audio tag.</audio>";
				}
				else if(artistName == "rockon"){
					song.innerHTML = "<embed src='./RockOn_Blondie.mp3' hidden=false autostart=true loop=false>";
					artist.innerHTML = "Rock On - Blondie";				
				}
				else{
					song.innerHTML = "error - song not loaded";
				}
				
			}