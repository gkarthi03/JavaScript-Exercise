var posFactor = 0;
var factor = 0;
function startMove()
{
    factor = 1;
}

function pauseMove()
{
    factor = 0;
}

function resetPos()
{
    factor = 0;
    document.getElementById("img").style.transform = "translate(-"+posFactor+"px,0px)";
    posFactor = 0;
}

setInterval(move,25);

function move()
{
    posFactor += factor;
    document.getElementById("img").style.transform = "translate("+posFactor+"px,0px)";
}