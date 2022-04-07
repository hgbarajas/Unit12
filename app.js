let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        run(e);
    }
});

userNum.focus();

let counter = 0;


function run() {
    document.getElementById("paragraph").innerHTML = "Hello World!";
    document.getElementById("paragraph").style.backgroundColor = "green";
    document.getElementById("paragraph").style.color = "white";
    document.getElementById("paragraph").style.padding = "20px";
    randomNum();
    userNumber();
    compareNumbers();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    return ran;
}

function userNumber() {
    let user = document.getElementById("getNumber").value;
    return user;
}

function compareNumbers() {
    let a = userNumber(); 
    let b = randomNum();
    let z = document.getElementById("compare");
    let c = document.getElementById("counter");

        if ( a!= b) {
            z.innerHTML = "Number are not the same. Computer got " + b + ", and user got " + a;
            z.style.color = "white";
            z.style.backgroundColor = "red";
            z.style.padding = "20px";
            z.style.textAlign = "center";
            counter++
            c.innerHTML = "You have tried " + counter + " times."
            c.style.color = "white";
            c.style.backgroundColor = "gray";
            c.style.padding = "20px";
            c.style.textAlign = "center";

        } else if (a == b) {
            z.innerHTML = "Number are the same. Computer got " + b + ", and user got " + a;
            z.style.color = "white";
            z.style.backgroundColor = "green";
            z.style.padding = "20px";
            z.style.textAlign = "center";
            c.innerHTML = "You have tried " + counter + " times to get it right."
            c.style.color = "white";
            c.style.backgroundColor = "gray";
            c.style.padding = "20px";
            c.style.textAlign = "center";
            counter = 0;
        }

        resetInput();
}

function resetInput() {
    document.getElementById("getNumber").value = "";
}