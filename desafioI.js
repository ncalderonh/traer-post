async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        displayPosts(data);
    } catch (error) {
        console.error('Error al obtener los posts:', error);
    }
}

function displayPosts(posts) {
    const postList = document.getElementById('post-data');
    postList.innerHTML = '<h2>Posts:</h2>';
    const ul = document.createElement('ul');
    posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.title;
        ul.appendChild(li);
    });
    postList.appendChild(ul);
}