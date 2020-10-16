//const root = document.querySelector('#root');

const fetchData = async () => {
    await fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
        
        const root = document.querySelector('#root');
        data.forEach(({id, login, avatar_url}) => {
            
            const div = document.createElement('div');
            div.className = "app__card";

            div.innerHTML = `
            
                <img src=${avatar_url} alt="" class="app__card_image">
                <div class="app__card_login">${login}</div>
                <h3 class="app__card_id">${id}</h3>
            
            ` ;

            root.appendChild(div);
            
        })


    })
}

fetchData();

