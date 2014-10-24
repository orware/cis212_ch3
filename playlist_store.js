/* playlist_store.js
 *
 * Ready-bake code to store and retrieve playlist items
 */

function save(item) {
	var playlistArray = getSavedSongs();
	playlistArray.push(item);
	localStorage.setItem("playlist", JSON.stringify(playlistArray));
}

function loadPlaylist() {
	var playlistArray = getSavedSongs();
	var ul = document.getElementById("playlist");
	if (playlistArray != null) {
		for (var i = 0; i < playlistArray.length; i++) {
            var li = createPlaylistItem(playlistArray[i]);
			ul.appendChild(li);
		}
	}
}

function getSavedSongs() {
	return getStoredArray("playlist");
}

function getStoredArray(key) {
	var playlistArray = localStorage.getItem(key);
	if (playlistArray == null || playlistArray == "") {
		playlistArray = new Array();
	}
	else {
		playlistArray = JSON.parse(playlistArray);
	}
	return playlistArray;
}

function deleteItem(el) {
    var playlistArray = getSavedSongs();

    var songName = el.data;
    var songIndex = playlistArray.indexOf(songName);

    if (songIndex >= 0)
    {
        playlistArray.splice(songIndex, 1);

        localStorage.setItem("playlist", JSON.stringify(playlistArray));
    }
}