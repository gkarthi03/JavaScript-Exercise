
var data = {};
function getDetails()
{
    getBrowserDetails();
    getScreenDetails();
    createTable();
}

function getBrowserDetails()
{
    let browserData = navigator.userAgent;
    let browserNames = ["Chrome","Firefox","Safari"];
    for(let i = 0;i<browserNames.length;i++)
    {
        if(browserData.indexOf(browserNames[i]) > -1)
            {
                data.browserName = browserNames[i];
                break; 
            }
    }
    let dataArray = browserData.split(" ");
    dataArray.forEach(element => {
        if(element.includes(data.browserName))
        {
            data.browserVersion = element.split("/")[1];
        }
    });
    console.log(data.browserName + " : "+ data.browserVersion);
}

function getScreenDetails()
{
    data.screenHeight = screen.height;
    data.screenWidth = screen .width;
    console.log(screen.height+" : "+ screen.width);
}

function createTable()
{
    var table = document.createElement("tr");
    var td = `<table><tr>`
    for(const [key, value] of Object.entries(data))
    {
        td += `<td>${key}</td><td>${value}</td></tr>`;
        
    }
    td +=`</table>`
    var div = document.getElementById("table");
    div.innerHTML = td;
}