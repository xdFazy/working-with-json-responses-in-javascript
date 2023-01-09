
//User Story 2
fetch('../OpenJsonData.json')
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        //User Story 3
        document.getElementById("JobButton").addEventListener("click", function () {
            let job = data[Math.floor(Math.random()*data.length)];
            let output = "" + job.Titel;
            document.getElementById("JobOutput").innerHTML = output;
        });
    })
    .catch((error) => console.log(error));