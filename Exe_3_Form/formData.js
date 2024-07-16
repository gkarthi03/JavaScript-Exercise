
var dob = document.getElementById("data");
var sex = document.getElementById("sex");
var mobileNo = document.getElementById("phNumbe");

var nameCheck = false;
var inputDateCheck = false;
var phNumberCheck = false

let validName = "";
function validateName()
{
    let name = document.getElementById("Name");
    let regex = /[@!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    let check = regex.test(name.value);
    
    if(check)
    {
        nameCheck = false;
        name.classList.add("invalid");
        window.alert("Name Can Have Letters/Numbers");
        name.value = validName;
    }
    else
    {
        nameCheck = true;
        name.classList.remove("invalid");
        validName = name.value;
        console.log(validName);
    }
    checkSubmit();
}

function validateNumber()
{
    let phNumber = document.getElementById("phNumber");
    let validNumber = "";
    for(let i = 0; i<phNumber.value.length;i++)
    {
        if(Number(phNumber.value[i]) + 48 >= 48 && Number(phNumber.value[i]) + 48 <= 57)
        {
            phNumberCheck = true;
            phNumber.classList.remove("invalid");
            validNumber += phNumber.value[i];
            if(phNumber.value.length >= 11)
            {
                window.alert("Mobile Number can contain 10 numbers");
                let num = "";
                for(let j = 0;j<=9;j++)
                {
                    num += phNumber.value[j];
                }
                phNumber.value = num;
            }

            if(phNumber.value.length <=9)
            {
                phNumberCheck = false;
                phNumber.classList.add("invalid");
            }
        }
        else
        {
            window.alert("Mobile Number Cant Have Letters/Symbols");
            phNumberCheck = false;
            phNumber.classList.add("invalid");
            phNumber.value = validNumber;
        }
    }
    if(phNumberCheck && phNumber.value.length == 10)
    {
        phNumberCheck = true;
        phNumber.classList.remove("invalid");
    }
    else
    {
        phNumberCheck = false;
        phNumber.classList.add("invalid");
    }
    checkSubmit();
}

function validateDate()
{
    let date = document.getElementById("dateInput");
    let regex = /^\d{2}\-\d{2}\-\d{4}$/;
    if(!regex.test(date.value))
    {
        date.classList.add("invalid");
        dateCheck = false;
        if(date.value.length > 10)
        {
            window.alert("Invalid DOB");
            date.value = "";
        }
    }
    else
    {
        let yearCheck = false;
        let monthCheck = false;
        let dateCheck = false;

        if(date.value.length == 10)
        {
            let dateData = date.value.split("-");
            let todayDate = new Date();

            if(Number(dateData[2]) > Number(todayDate.getFullYear()))
            {
                window.alert("Invalid year input in DOB");
                yearCheck = false;
                return;
            }
            else
            {
                yearCheck = true;
            }

            if(Number(dateData[0]) >= 1 && Number(dateData[0]) <= 12)
            {
                monthCheck = true;
                let month = Number(dateData[0]);
                let day = Number(dateData[1]);
                const monthSet1 = [1, 3, 5, 7, 8, 10, 12];
                const monthSet2 = [4, 6, 9, 11];
                if(month == 2)
                {
                    let year = Number(dateData[2]);
                    //checkLeapYear
                    if(day == 29)
                    {
                        if(year % 400 === 0)
                        {
                            dateCheck = true;
                        }
                        else if((year % 4 === 0) && (year % 100 !== 0))
                        {
                            dateCheck = true;
                        }
                        else
                        {
                            window.alert("Invalid Date input in DOB");
                            dateCheck = false;
                            return;
                        }
                    }
                    else if(day <= 28)
                    {
                        dateCheck = true;
                    }
                    else
                    {
                        dateCheck = false;
                        window.alert("Invalid Date input in DOB");
                        return;
                    }
                }
                else if(monthSet1.includes(month))
                {
                    if(day >= 1 && day <= 31)
                    {
                        dateCheck = true;
                    }
                    else
                    {
                        dateCheck = false;
                        window.alert("Invalid date input in DOB");
                        return;
                    }
                }
                else if(monthSet2.includes(month))
                {
                    if(day >= 1 && day <= 31)
                    {
                        dateCheck = true;
                        
                    }
                    else
                    {
                        dateCheck = false;
                        window.alert("Invalid date input in DOB");
                        return;
                    }
                }
                else
                {
                    dateCheck = false;
                    window.alert("Invalid date input in DOB");
                    return;
                }
            }
            else
            {
                window.alert("Invalid month input in DOB");
                monthCheck = false;
                return;
            }
        }
        if(yearCheck && monthCheck && dateCheck)
        {
            inputDateCheck = true;
            date.classList.remove("invalid");
        }
        else
        {
            date.classList.add("invalid");
            inputDateCheck = false;
        }
    }
    if(inputDateCheck && date.value.length == 10)
    {
        inputDateCheck = true;
        date.classList.remove("invalid");
    }
    else
    {
        inputDateCheck = false;
        date.classList.add("invalid");
    }
    checkSubmit();
}

function checkSubmit()
{
    let submitBtn = document.getElementById("submitbtn");
    if(nameCheck && inputDateCheck && phNumberCheck)
    {
        submitBtn.removeAttribute("disabled");
    }
    else
    {
        console.log("disable");
        submitBtn.setAttribute("disabled","");
    }
}


function resetData()
{
    event.preventDefault();
    location.reload();
}
