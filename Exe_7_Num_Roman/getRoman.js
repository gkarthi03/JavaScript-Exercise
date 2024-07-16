var result = document.getElementById("result");
function convert()
{
    let input = document.getElementById("input").value
    let num = Number(input);
    if(num == 0)
    {
        result.innerHTML=`<h3>Invalid Input</h3>`
    }
    else
    {
        result.innerHTML=`<h3>Value:`;
        let xValue = num/10;
        if(Math.floor(xValue) == 0)
        {
            calRem(num);
        }
        else
        {
            calXvalue(num);
            calRem(num%10);
        }
        result.innerHTML +=`</h3>`
    }

}

function calIvalue(num)
{
    for(let i = 0; i<num;i++)
    {
        result.innerHTML += `i`;
    }
}

function calVvalue(num)
{
    for(let i=0;i<num/5;i++)
    {
        result.innerHTML +=`v`;
    }
}

function calXvalue(num)
{
    for(let i=0;i<Math.floor(num/10);i++)
    {
        result.innerHTML +=`x`;
    }
}

function calRem(num)
{
    let vValue = num/5;
    if(Math.floor(vValue) == 0)
    {
        if(5 - num != 1)
        {
            calIvalue(num);
        }
        else
        {
            result.innerHTML += 'iv';
        }    
    }
    else
    {
        if(num%5 > 0)
        {
            if(10 - num != 1)
            {
                calVvalue(Math.floor(vValue));
                calIvalue(num%5);
            }
            else
            {
                result.innerHTML += 'ix';
            }
        }
        else
        {
            calVvalue(num);
        }
    }    
}

