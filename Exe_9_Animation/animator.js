function animation()
{
    context.reset();
    context.beginPath();
    
    //leftmargin
    context.moveTo(0, canvas.height-cabinMargin);
    context.lineTo(canvas.width/5, canvas.height-cabinMargin);

    context.moveTo(0,canvas.height-cabinMargin-10);
    context.lineTo(canvas.width/5, canvas.height-cabinMargin-10);

    //rightmargin
    context.moveTo(canvas.width, canvas.height-cabinMargin);
    context.lineTo(canvas.width/5*4, canvas.height-cabinMargin);

    context.moveTo(canvas.width,canvas.height-cabinMargin-10);
    context.lineTo(canvas.width/5*4, canvas.height-cabinMargin-10);

    //leftMarginToWall
    context.moveTo(canvas.width/20, canvas.height-cabinMargin);
    context.lineTo(canvas.width/20, canvas.height);

    context.moveTo(canvas.width/5, canvas.height-cabinMargin);
    context.lineTo(canvas.width/5, canvas.height);

    //rightMarginToWall
    context.moveTo(canvas.width/5*4, canvas.height-cabinMargin);
    context.lineTo(canvas.width/5*4, canvas.height);

    context.moveTo(canvas.width/20*19, canvas.height-cabinMargin);
    context.lineTo(canvas.width/20*19, canvas.height);

    //leftcabintable
    context.moveTo(canvas.width/5, canvas.height-cabinMargin);
    context.lineTo(canvas.width/5, canvas.height-cabinMargin-30);
    context.lineTo(canvas.width/5*2, canvas.height-cabinMargin-30);
    context.lineTo(canvas.width/5*2, canvas.height-cabinMargin+20);
    context.lineTo(canvas.width/5, canvas.height-cabinMargin+20);

    //rightcabintable
    context.moveTo(canvas.width/5*4, canvas.height-cabinMargin);
    context.lineTo(canvas.width/5*4, canvas.height-cabinMargin-30);
    context.lineTo(canvas.width/5*3, canvas.height-cabinMargin-30);
    context.lineTo(canvas.width/5*3, canvas.height-cabinMargin+20);
    context.lineTo(canvas.width/5*4, canvas.height-cabinMargin+20);

    //cabinDoorHolderLeft
    context.moveTo(canvas.width/5*2, canvas.height-cabinMargin-20);
    context.lineTo(canvas.width/5*2.2, canvas.height-cabinMargin-20);
    context.lineTo(canvas.width/5*2.2, canvas.height-cabinMargin-10);
    context.lineTo(canvas.width/5*2, canvas.height-cabinMargin-10);

    //cabinDoorHolderRight
    context.moveTo(canvas.width/5*3, canvas.height-cabinMargin-20);
    context.lineTo(canvas.width/5*2.8, canvas.height-cabinMargin-20);
    context.lineTo(canvas.width/5*2.8, canvas.height-cabinMargin-10);
    context.lineTo(canvas.width/5*3, canvas.height-cabinMargin-10);

    context.stroke();

    //leftcabinDesign
    context.beginPath();
    context.setLineDash([5,5]);
    context.moveTo(canvas.width/5, canvas.height-cabinMargin-15);
    context.lineTo(canvas.width/5*2, canvas.height-cabinMargin-15);

    //rightCabinDesign
    context.moveTo(canvas.width/5*4, canvas.height-cabinMargin-15);
    context.lineTo(canvas.width/5*3, canvas.height-cabinMargin-15);

    context.stroke();

    //cabinmatLeft
    context.setLineDash([]);
    context.beginPath();
    context.arc(canvas.width/5*1.5, canvas.height-cabinMargin/2.5, 20, 0, 2 * Math.PI);
    context.stroke();

    //cabinmatLeft
    context.setLineDash([]);
    context.beginPath();
    context.arc(canvas.width/5*3.5, canvas.height-cabinMargin/2.5, 20, 0, 2 * Math.PI);
    context.stroke();

    //doorHolder
    context.beginPath();
    context.arc(canvas.width/5*2.8, canvas.height-cabinMargin-15, 3, 0, 2 * Math.PI);
    context.fill();
    context.stroke();

    //characters
    for(let i =0;i<elementsInAnimation.length;i++)
    {
        if(elementsInAnimation[i].rotArray[0] == 0)
        {
            context.drawImage(elementsInAnimation[i].img,elementsInAnimation[i].currentPos[0],elementsInAnimation[i].currentPos[1],elementsInAnimation[i].size,elementsInAnimation[i].size);
        }
        else
        {
            //rotateCanvas(elementsInAnimation[i].currentPos,elementsInAnimation[i].rotArray[elementsInAnimation[i].currentRotIndex-1]);
            //context.drawImage(elementsInAnimation[i].img,0,0,elementsInAnimation[i].size,elementsInAnimation[i].size);
            //restCanvasRotation(elementsInAnimation[i].currentPos,elementsInAnimation[i].rotArray[elementsInAnimation[i].currentRotIndex-1]);

            var dummyCanvas = document.createElement('canvas');
            var dummyCtx = dummyCanvas.getContext('2d');

            let w = elementsInAnimation[i].img.naturalWidth;
            let h = elementsInAnimation[i].img.naturalHeight;
            let index = elementsInAnimation[i].currentRotIndex-1;
            let rot = elementsInAnimation[i].rotArray[index];
            if(w!=0)
            {
                dummyCanvas.width = w;
                dummyCanvas.height = h;
            }
            else
            {
                dummyCanvas.width = 10;
                dummyCanvas.height = 10;
            }

            dummyCtx.translate(w/2,h/2);
            dummyCtx.rotate(rot*(Math.PI/180));
            dummyCtx.translate(-w/2,-h/2);
            dummyCtx.drawImage(elementsInAnimation[i].img,0,0);
            dummyCtx.restore();

            context.drawImage(dummyCanvas,elementsInAnimation[i].currentPos[0],elementsInAnimation[i].currentPos[1],elementsInAnimation[i].size,elementsInAnimation[i].size);
        }
    }  

    //door
    context.beginPath();
    rotateCanvas([canvas.width/5*2.8, canvas.height-cabinMargin-15],element_12.currentRot);
    context.moveTo(0,0);
    context.lineTo(0,5);
    context.lineTo(-58,5);
    context.lineTo(-58,-5);
    context.lineTo(0,-5);
    context.stroke();
    restCanvasRotation([canvas.width/5*2.8, canvas.height-cabinMargin-15],element_12.currentRot);
}

function rotateCanvas(pos,rot)
{
    context.translate(pos[0],pos[1]);
    context.rotate((rot*Math.PI)/180);
}

function restCanvasRotation(pos,rot)
{
    context.rotate((-rot*Math.PI)/180);
    context.translate(-pos[0],-pos[1]);
}