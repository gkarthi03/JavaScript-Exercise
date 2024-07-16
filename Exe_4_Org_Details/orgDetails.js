let orgName = ["Design", "Company", "Bicycle", "Name Logo", "Lorem Ipsum", "Triangle", "Star", "VS", "Lorem MM", "CAMEL"];
let ceoName = ["karthik", "lakshmi", "Guru", "Roshan", "Divya", "Dharma", "Gowri", "lekha", "paramesh", "kumar"];
let yearStarted = [2000, 1990, 1980, 1970, 1960, 1950, 1940, 1930, 1920, 1910];

function showDetails(index)
{
    var details = document.getElementById("details");
    details.innerHTML = `<h2>${orgName[index]}</h2><h5>CEO:${ceoName[index]} ,Founded On:${yearStarted[index]}</h5>`;
}

let imgDivs = document.getElementsByClassName("images");

for(let i=0; i<imgDivs.length;i++)
{
    imgDivs[i].addEventListener("click", function(event){
        const leftClick = event.pageX;
        const topClick = event.pageY;
        var details = document.getElementById("details");
        details.innerHTML += `<h4>Mouse Button Clicked</h4><h5>Cooridinates(Left, Top): ${leftClick} ,${topClick}</h5>`
    });
}
