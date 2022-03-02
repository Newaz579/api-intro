function addPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => setPhoto(data))
}
addPhotos();

function setPhoto(photos) {
    const photoContainer = document.getElementById('photo-container');
    for (const photo of photos) {
        const img = document.createElement('img');
        img.src = photo.url;
        photoContainer.appendChild(img);
        const p = document.createElement('p');
        p.innerHTML = "photo added";
        photoContainer.appendChild(p);
        const imgThumbnail = document.createElement('img');
        imgThumbnail.src = photo.thumbnailUrl;
        photoContainer.appendChild(imgThumbnail);
        const pThumbnail = document.createElement('p');
        pThumbnail.innerHTML = 'Image Thumbnail Added';
        photoContainer.appendChild(pThumbnail);
        // console.log(photo.url);
    }
}