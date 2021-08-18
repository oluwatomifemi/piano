var note, img;
var userAnswer;
var points = 0;


function test(){
    if (document.getElementById("button").value == "Start"){
        document.getElementById("button").value = "Enter";
        randomImage();
    }
    else if (document.getElementById("button").value == "Enter"){
        if (document.getElementById("answer").value == "")
        {
            window.alert("Type in an answer")
        }
        else {
            chckAns();
            document.getElementById("image").src = img;
            document.getElementById("button").value = "Next";
            if (points == 100)
            {
                document.getElementById("image").src = "win.jpg";
                document.getElementById("footer").innerHTML = "You've won. Restart the page to try again!!!"
                points = 0
            }
        }
        
    }
    else{
        document.getElementById("button").value = "Enter";
        randomImage();
    };


};

function randomImage()
{
    x = Math.ceil(Math.random()*22);
    if (x == 1) {
        img = "Bass - A1.JPG";
        note = "A";
    }
    else if (x == 2) {
        img = "Bass - A2.JPG";
        note = "A";
    }
    else if (x == 3) {
        img = "Bass - B1.JPG";
        note = "B";
    }
    else if (x == 4) {
        img = "Bass - B2.JPG";
        note = "B";
    }
    else if (x == 5) {
        img = "Bass - C1.JPG";
        note = "C";
    }
    else if (x == 6) {
        img = "Bass - C2.JPG";
        note = "C";
    }
    else if (x == 7) {
        img = "Bass - D1.JPG";
        note = "D";
    }
    else if (x == 8) {
        img = "Bass - E1.JPG";
        note = "E";
    }
    else if (x == 9) {
        img = "Bass - F1.JPG";
        note = "F";
    }
    else if (x == 10) {
        img = "Bass - G1.JPG";
        note = "G";
    }
    else if (x == 11) {
        img = "Bass - G2.JPG";
        note = "G";
    }
    else if (x == 12) {
        img = "Treble - A1.JPG";
        note = "A";
    }
    else if (x == 13) {
        img = "Treble - B1.JPG";
        note = "B";
    }
    else if (x == 14) {
        img = "Treble - C1.JPG";
        note = "C";
    }
    else if (x == 15) {
        img = "Treble - C2.JPG";
        note = "C";
    }
    else if (x == 16) {
        img = "Treble - D1.JPG";
        note = "D";
    }
    else if (x == 17) {
        img = "Treble - D2.JPG";
        note = "D";
    }
    else if (x == 18) {
        img = "Treble - E1.JPG";
        note = "E";
    }
    else if (x == 19) {
        img = "Treble - E2.JPG";
        note = "E";
    }
    else if (x == 20) {
        img = "Treble - F1.JPG";
        note = "F";
    }
    else if (x == 21) {
        img = "Treble - F2.JPG";
        note = "F";
    }
    else if (x == 22) {
        img = "Treble - G1.JPG";
        note = "A";
    };
    document.getElementById("image").src = img
};

// function whenToCall() {
//     if (img == "background.jpg"){
//         document.getElementById("image").src = img;
//         window.alert(userAnswer);
//         document.getElementById("button").value = "Enter"
//     }
//     else if (img == "Right.JPG"){
//         document.getElementById("image").src = img;
//         document.getElementById("button").value = "Enter"
//     }
//     else if (img == "Wrong.JPG"){
//         document.getElementById("image").src=img;
//         document.getElementById("button").value = "Enter"
//     }
//     else{
//         document.getElementById("image").src=img;
//         window.alert(userAnswer);
//         chckAns();
//         document.getElementById("button").value = "Next"
//     };
// }

function chckAns() {
    userAnswer = document.getElementById("answer").value;
    userAnswer = userAnswer.toUpperCase();
    if (userAnswer == note){
        document.getElementById("answer").value = "";
        points = points + 10;
        img = "Right.JPG";
        document.getElementById("footer").innerHTML = "You have " + points + " points";
    }

    else {
        document.getElementById("answer").value = "";
        points = points - 10;
        img = "Wrong.JPG";
        document.getElementById("footer").innerHTML = "You have " + points + " points";
    }
};