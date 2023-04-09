fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(data =>{
        data.map(user => {

            const markup = `<li>${user.name}</li>`;
            document.querySelector('ul').insertAdjacentHTML('afterbegin', markup)
        });
    })
    