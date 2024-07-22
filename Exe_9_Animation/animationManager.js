var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

let cabinMargin = 85;

var rotFactor = 0;
var open = true;
var doorAnimate = false;

//character
var sadChar = new Image(50,50);
sadChar.src = "cynicism_3771075.png";

var happyChar = new Image(50,50);
happyChar.src = "smile-emoticon_3771069.png";

var elementsInAnimation = [];

var element_1 = new animateableObject(happyChar);
elementsInAnimation.push(element_1);
var element_2 = new animateableObject(happyChar);
elementsInAnimation.push(element_2);
var element_3 = new animateableObject(happyChar);
elementsInAnimation.push(element_3);
var element_4 = new animateableObject(happyChar);
elementsInAnimation.push(element_4);

var element_5 = new animateableObject(happyChar);
elementsInAnimation.push(element_5);
var element_6 = new animateableObject(happyChar);
elementsInAnimation.push(element_6);
var element_7 = new animateableObject(happyChar);
elementsInAnimation.push(element_7);
var element_8 = new animateableObject(happyChar);
elementsInAnimation.push(element_8);

var element_9 = new animateableObject(sadChar);
elementsInAnimation.push(element_9);

var element_10 = new animateableObject(happyChar);
elementsInAnimation.push(element_10);
var element_11 = new animateableObject(happyChar);
elementsInAnimation.push(element_11);

var element_12 = new gate();

//righh
element_1.posArray.push([330,330],[535,330],[270,-50],[130,180],[130,230],[130,280],[130,330],[-100,330]);//R1-R0-M-L4-L3-L2-L1-L0
element_1.posKeyframe.push([1.5,0.3],[5.1,0.1],[5.6,0.9],[6.8,0.6],[7.11,0.4],[14.7,0.2],[21.9,0.5]);
element_1.rotArray.push(0);

element_2.posArray.push([330,280],[330,330],[535,330],[270,-50],[130,130],[130,180],[130,230],[330,230],[330,280],[330,330],[535,330]);//R2-R1-R0-M-L5-L4-L3-R3-R2-R1-R0
element_2.posKeyframe.push([1.6,0.2],[5,0.5],[7,0.1],[7.3,0.5],[7.11,0.8],[14.7,0.6],[17.7,0.5],[19.8,0.4],[20.5,0.2],[21.6,0.5]);
element_2.rotArray.push(0);

element_3.posArray.push([330,230],[330,280],[330,330],[130,330],[-100,330]);//R3-R2-R1-L1-L0
element_3.posKeyframe.push([1.6,0.4],[5.3,0.2],[12.3,0.5],[14.5,0.5]);
element_3.rotArray.push(0);

element_4.posArray.push([330,180],[330,230],[330,280],[330,330],[535,330]);//R4-R3-R2-R2-R1-R0
element_4.posKeyframe.push([1.6,0.6],[5.3,0.4],[12.6,0.2],[19.5,0.5]);
element_4.rotArray.push(0);
//left
element_5.posArray.push([130,330],[-100,330],[270,-50],[130,230],[130,280],[130,330],[-100,330]);//L1-L0-M-L3-L2-L1-L0
element_5.posKeyframe.push([2.7,0.5],[4.11,0.1],[5.1,0.9],[6.8,0.4],[7.11,0.2],[12.1,0.5]);
element_5.rotArray.push(0);

element_6.posArray.push([130,280],[130,330],[-100,330],[270,-50],[130,130],[130,180],[130,230],[130,280],[330,280],[330,330],[535,330]);//L2-L1-L0-M-L5-L4-L3-L2-R2-R1-R0
element_6.posKeyframe.push([2.9,0.2],[5,0.5],[6,0.1],[6.3,0.6],[6.11,0.4],[7.11,0.6],[14.7,0.4],[17.7,0.5],[19.8,0.2],[20.2,0.5]);
element_6.rotArray.push(0);

element_7.posArray.push([130,230],[130,280],[130,330],[-100,330]);//L3-L2-L1-L0
element_7.posKeyframe.push([2.9,0.3],[5.3,0.2],[6.6,0.5]);
element_7.rotArray.push(0);

element_8.posArray.push([130,180],[130,230],[130,280],[130,330],[-100,330]);//L4-L3-L2-L1-L0
element_8.posKeyframe.push([2.9,0.4],[5.3,0.4],[6.8,0.2],[7.8,0.5]);
element_8.rotArray.push(0);
//main
element_9.posArray.push([330,130],[130,130],[270,155],[210,155],[280,155],[220,170],[270,170],[180,210],[330,230],[180,300],[180,180],[130,180],[200,230],[150,280],[75,280],[75,330],[75,280],[200,310]);
element_9.posKeyframe.push([1,1],[2.5,0.8],[3.5,0.3],[3.9,0.4],[4.2,0.5],[4.8,0.5],[5.2,0.9],[6,0.6],[13.8,0.5],[15.3,0.5],[15.9,0.2],[18.4,0.5],[19,0.5],[19.9,0.5],[20.2,0.5],[21,0.5],[21.6,1]);
element_9.rotArray.push(0);
//rightCabin
element_10.posArray.push([330,440],[220,440],[220,-50],[220,440],[330,440],[220,440],[220,-100]);
element_10.posKeyframe.push([8.11,0.5],[9.5,1.2],[16,1.1],[17.2,0.5],[21.9,0.5],[22.3,1]);
element_10.rotArray.push(180,90,90,180,180,0,0,-90,180,90,90,180,180);
//leftcabin
element_11.posArray.push([130,440],[220,440],[220,-100]);
element_11.posKeyframe.push([22,0.5],[22.6,1]);
element_11.rotArray.push(180,-90,-90,180,180);

//gate
element_12.rotArray.push(0,120,-30,0,-120,30,0,120,-30,0);
element_12.rotKeyframe.push([9.4,0.5],[9.11,1],[10.12,1],[16.9,0.4],[17.2,0.5],[17.8,0.8],[22.3,0.5],[22.9,0.8],[23.6,0.8]);

//timeControls
let frame = 0;
let fps = 12;
setInterval(time,1000/fps);
time();
function time()
{
    console.log("Frame No.:"+frame);
    if(frame == 0)
    {
        for(let i=0;i<elementsInAnimation.length;i++)
        {
            elementsInAnimation[i].currentPos[0] = elementsInAnimation[i].posArray[0][0];
            elementsInAnimation[i].currentPos[1] = elementsInAnimation[i].posArray[0][1];
        }
    }

    for(let i=0;i<elementsInAnimation.length;i++)
    {
        let posKeyframe = elementsInAnimation[i].posKeyframe;
        let currentPosIndex = elementsInAnimation[i].currentPosIndex;
        let posArray =elementsInAnimation[i].posArray;
        if(posKeyframe.length > currentPosIndex-1)
        {
            let startFrame = calFrames(posKeyframe[currentPosIndex-1][0]);
            let endFrame = startFrame + calFrames(posKeyframe[currentPosIndex-1][1]);
            console.log("start :"+ startFrame +"/"+"end :"+endFrame);
            if(frame >= startFrame && 
                frame < endFrame)
            {
                console.log("Animating");
                let initialPos = posArray[currentPosIndex-1];
                let endPos = posArray[currentPosIndex];
                let duration = endFrame - startFrame;
                changePos(elementsInAnimation[i],initialPos,endPos,duration);
            }
            let rotArray = elementsInAnimation[i].rotArray;
            let currentRotIndex = elementsInAnimation[i].currentRotIndex;
            if(rotArray.length > currentRotIndex)
            {
                if(frame == startFrame)
                {
                    elementsInAnimation[i].currentRotIndex++;
                }
                else if(frame == endFrame-1)
                {
                    elementsInAnimation[i].currentRotIndex++;
                }
                elementsInAnimation[i].currentRot = rotArray[elementsInAnimation[i].currentRotIndex-1];
            }

            if(frame == endFrame)
            {
                elementsInAnimation[i].currentPosIndex++;
                //console.log(elementsInAnimation[i].currentPosIndex);
            }
        }
    }

    if(element_12.currentRotIndex <= element_12.rotKeyframe.length)
    {
        let startFrame = calFrames(element_12.rotKeyframe[element_12.currentRotIndex -1][0]);
        let endFrame = startFrame + calFrames(element_12.rotKeyframe[element_12.currentRotIndex -1][1]);
        
        if(frame >= startFrame && frame < endFrame)
        {
            console.log("GateRotating");
            let initialRot = element_12.rotArray[element_12.currentRotIndex-1];
            let endRot = element_12.rotArray[element_12.currentRotIndex];
            let duration = endFrame - startFrame;
            console.log(initialRot+"/"+endRot+"/"+duration);
            changeGateRot(element_12,initialRot,endRot,duration);

        }

        if(frame == endFrame)
        {
            element_12.currentRotIndex++;
        }
    }

    animation();
    frame++;
}

function calFrames(input)
{
    let value = input.toString();
    if(value.includes("."))
    {
        let values = value.split(".");
        return((fps*Number(values[0]))+Number(values[1]));
    }
    else
    {
        return fps*input;
    }
}

function changePos(element,initialPos,endPos,duration)
{
    console.log(initialPos+"/"+endPos);
    let diffX = endPos[0] - initialPos[0];
    let diffY = endPos[1] - initialPos[1];

    console.log(diffX+"/"+diffY);
    if(diffX != 0)
        element.currentPos[0] += (diffX/duration);
    if(diffY != 0)
        element.currentPos[1] += (diffY/duration);
}

function changeGateRot(element,initialRot,endRot,duration)
{
    let diffAngle = endRot - initialRot;
    element.currentRot += diffAngle/duration;
}