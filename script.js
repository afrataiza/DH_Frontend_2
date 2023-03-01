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