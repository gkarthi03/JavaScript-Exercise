class animateableObject
{
    constructor(imgsrc)
    {
        this.img = imgsrc;
        this.posArray = [];
        this.posKeyframe = [];
        this.rotArray = [];
        this.rotKeyframe =[];
        this.size = 50;
        this.currentPos =[];
        this.currentRot = 0;
        this.currentPosIndex = 1;
        this.currentRotIndex = 1
    }
}

class gate
{
    constructor()
    {
        this.rotArray = [];
        this.rotKeyframe =[]
        this.currentRot = 0;
        this.currentRotIndex = 1;
    }
}