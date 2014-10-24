/* playlist.js */

window.onload = init;

function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;

    var ul = document.getElementById("playlist");



	loadPlaylist();
}

function handleButtonClick(e) {
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
    var songName = stripHTML(songName);

	if (songName == "") {
		alert("Please enter a song");
	}
	else {
		var li = createPlaylistItem(songName);
		var ul = document.getElementById("playlist");
		ul.appendChild(li);

		// for Ready Bake
		save(songName);
	}
}

function createPlaylistItem(songName) {
    var li = document.createElement("li");
        var button = document.createElement("button");
        button.setAttribute('class', 'remove-item');
        button.onclick = removeItem;
        button.innerHTML = 'Remove';
        li.innerHTML = songName;
        li.appendChild(button);

    return li;
}

function removeItem() {
    deleteItem(this.previousSibling);

    var ul = document.getElementById("playlist");
    ul.removeChild(this.parentNode);
}

function stripHTML(html) {
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}