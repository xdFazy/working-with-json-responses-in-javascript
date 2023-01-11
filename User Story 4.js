fetch('OpenJsonData.json')
    .then(res => res.json())
    .then((data) => {
            console.log(data);
            document.getElementById("JobButton").addEventListener("click", function () {
                    let job = data[Math.floor(Math.random() * data.length)];
                    let outputTitle = job.Titel;
                    let outputPOW = job.Place + ", " + job.Province;
                    let outputDesc = job.Description;
                    document.getElementById("randomJobTitle").innerHTML = outputTitle;
                    document.getElementById("randomJobPOW").innerHTML = outputPOW;
                    document.getElementById("randomJobDescription").innerHTML = outputDesc;
            });
    })
    .catch((error) => console.log(error));