import listPosts from './post.js';

const themeButton = document.querySelector('#button-theme');
console.log(themeButton);
themeButton.addEventListener('click', (e) => {
    const body =  document.body;
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        e.target.textContent = 'toggle_off';
    } else {
        e.target.textContent = 'toggle_on';
    }
    
})

const container = document.querySelector('.container')

function createPost(image, title, description) {
    const div = document.createElement('div');
    div.className = 'item'
    
    const img = document.createElement('img');
    img.src = image;
    div.appendChild(img);

    const h2 = document.createElement('h2');
    h2.innerText = title;
    div.appendChild(h2);

    const p = document.createElement('p');
    p.innerText = description;
    div.appendChild(p);

    return div;
}


listPosts.forEach(({ imgUrl, title, description }) => {
   const post = createPost(imgUrl, title, description);
   container.appendChild(post);
})
