function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data));
}
loadPosts();

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        postsContainer.appendChild(div);
    }
}

function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'POST',
        body: JSON.stringify({
            title: 'My new Post',
            body: 'This is my post',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
}
