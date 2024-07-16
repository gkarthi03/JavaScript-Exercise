function getCount()
{
    let count = document.cookie.split(';').find(row=>row.startsWith('visitCount='));
    if(count)
    {
        return count.split("=")[1];
    }
    else
    {
        return 0;
    }
}

function setCount(count)
{
    document.cookie = `visitCount=${count};expires=Thu, 14 Jul 2025 12:00:00 UTC;path=/;domain=`;
}

function displayCount()
{
    let count = getCount();
    var ui = document.getElementById("data");
    ui.textContent = count;
    setCount(++count);
}
window.onload = displayCount();