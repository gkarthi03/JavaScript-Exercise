function draw()
{
    let rowInput = document.getElementById("rowCount");
    let columnInput = document.getElementById("columnCount");

    let rowCount = parseInt(rowInput.value);
    let columnCount = parseInt(columnInput.value);
    //var result = document.getElementById("result");
    //result.innerHTML = "";
    // for(let i = 0;i<columnCount;i++)
    // {
    //     for(let j=0;j<rowCount;j++)
    //     {
    //         result.innerHTML +='<img  class="spriteImage" src="1aA.png" width: 75px; height: 53px>';
    //         console.log("*");
    //     }
    //     result.innerHTML += `<br>`
    // }    

    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    let img = document.getElementById('img');
    let posX = 0;
    let posY = 0;
    if(rowCount != 0 && columnCount !=0)
    {
        for(let i = 0;i<columnCount;i++)
        {
            posX = 0;
            for(let j=0;j<rowCount;j++)
            {
                context.drawImage(img,posX,posY,75,53);
                posX += 75;
            }
            posY += 53;
        }
    }
    else if(rowCount != 0)
    {
        posX = 0;
        posY = 0;
        for(let j=0;j<rowCount;j++)
        {
            context.drawImage(img,posX,posY,75,53);
            posX += 75;
        }
    }
    else if(columnCount != 0)
        {
            posX = 0;
            posY = 0;
            for(let j=0;j<columnCount;j++)
            {
                context.drawImage(img,posX,posY,75,53);
                posY += 75;
            }
        }    
}