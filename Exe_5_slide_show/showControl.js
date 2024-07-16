var imgDivs = document.getElementsByClassName("images");
var activeIndex = 0;
for(let i=0;i<imgDivs.length;i++)
{
    if(i == activeIndex)
    {
        imgDivs[i].classList.remove("hide");
        imgDivs[i].classList.add("inView");
    }
    else
    {
        imgDivs[i].classList.remove("inView");
        imgDivs[i].classList.add("hide");
    }
}

document.onkeydown = function(event)
{
    if(event.keyCode == 38 || event.keyCode == 33)
    {
        nextSlide();
    }
    else if(event.keyCode == 40 || event.keyCode == 34)
    {
        previousSlide();
    }
}

document.addEventListener("mouseup",(e) =>
{
    if(e.button == 0)
    {
        nextSlide();
    }
    if(e.button == 2)
    {
        previousSlide();
    }
});



function nextSlide()
{
    activeIndex++;
    if(activeIndex > imgDivs.length-1)
    {
        activeIndex = 0;
    }
    for(let i=0;i<imgDivs.length;i++)
    {
        if(i == activeIndex)
        {
            imgDivs[i].classList.remove("hide");
            imgDivs[i].classList.add("inView");
        }
        else
        {
            imgDivs[i].classList.remove("inView");
            imgDivs[i].classList.add("hide");
        }
    }
}

function previousSlide()
{
    activeIndex--;
    if(activeIndex < 0)
    {
        activeIndex = imgDivs.length-1;
    }
    for(let i=0;i<imgDivs.length;i++)
    {
        if(i == activeIndex)
        {
            imgDivs[i].classList.remove("hide");
            imgDivs[i].classList.add("inView");
        }
        else
        {
            imgDivs[i].classList.remove("inView");
            imgDivs[i].classList.add("hide");
        }
    }
}