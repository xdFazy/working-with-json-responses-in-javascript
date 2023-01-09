//User Story 1

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then((data) => {
        document.querySelector("#completed").innerHTML = data.completed;
        document.querySelector("#id").innerHTML = data.id;
        document.querySelector("#title").innerHTML = data.title;
        document.querySelector("#userId").innerHTML = data.userId;
        console.log(data);
    })
    .catch((error) => console.log(error));
