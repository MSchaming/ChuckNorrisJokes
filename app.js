document.querySelector('.get-jokes').addEventListener
('click', getJokes);


function getJokes(e){
    console.log('Go Time!');

    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function(){
        if(this.status === 200){
            console.log('Good to Go Mike');

            const response = JSON.parse(this.responseText);

            console.log(response);

            let output = '';

            if(response.type === 'success'){
                response.value.forEach(function(jokes){
                    output += `<li>${jokes.joke}</li>`;
                });
                
            } else {
                output += `<li>something went wrong</li>`;
            }

            document.querySelector('.jokes').innerHTML = output;

            
        }
    }

    xhr.send();

    console.log(number);

    e.preventDefault();
}