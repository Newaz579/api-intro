function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => displayAlbums(data))
}
loadAlbum();

function displayAlbums(albums) {
    const albumContainer = document.getElementById('album-container');
    for (const album of albums) {
        const p = document.createElement('p');
        p.innerHTML = album.title;
        albumContainer.appendChild(p);
    }
}