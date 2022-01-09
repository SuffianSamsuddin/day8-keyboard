
var audioOne = document.getElementById("audioOne");
var audioTwo = document.getElementById("audioTwo");
var audioThree = document.getElementById("audioThree");
var audioFour = document.getElementById("audioFour");

document.addEventListener("keydown", keyPressed);
document.addEventListener("keyup", keyReleased);

// document.addEventListener("keydown", keyDown);
// document.addEventListener("keyup", keyUp);

function keyPressed (evt) {
    console.log(evt.keyCode);

    if (evt.keyCode == 65) {
        audioOne.play();
        var key = document.getElementsByClassName("key");
        console.log('key...', key);
        key[0].style.backgroundColor = "red";
    }

    if (evt.keyCode == 66) {
        audioTwo.play();
        var key = document.getElementsByClassName("key");
        key[1].style.backgroundColor = "red";
    }

    if (evt.keyCode == 67) {
        audioThree.play();
        var key = document.getElementsByClassName("key");
        console.log('key...', key);
        key[2].style.backgroundColor = "red";
    }

    if (evt.keyCode == 68) {
        audioFour.play();
        var key = document.getElementsByClassName("key");
        console.log('key...', key);
        key[3].style.backgroundColor = "red";
    }

}

function keyReleased(evt) {
    if (evt.keyCode == 65) {
        var key = document.getElementsByClassName("key");
        key[0].style.backgroundColor = "white";
    }

    if (evt.keyCode == 66) {
        var key = document.getElementsByClassName("key");
        key[1].style.backgroundColor = "white";
    }

    if (evt.keyCode == 67) {
        var key = document.getElementsByClassName("key");
        key[2].style.backgroundColor = "white";
    }

    if (evt.keyCode == 68) {
        var key = document.getElementsByClassName("key");
        key[3].style.backgroundColor = "white";
    }

}


// function keyUp(evt) {
//     if (evt.keyCode == 65) {
//         var key = document.getElementsByClassName("key");
//         key[1].style.backgroundColor = "white";
//     }

//     if (evt.keyCode == 66) {
//         var key = document.getElementsByClassName("key");
//         key[2].style.backgroundColor = "white";
//     }

//     if (evt.keyCode == 67) {
//         var key = document.getElementsByClassName("key");
//         key[3].style.backgroundColor = "white";
//     }

//     if (evt.keyCode == 68) {
//         var key = document.getElementsByClassName("key");
//         key[4].style.backgroundColor = "white";
//     }
// }

// function keyDown(evt) {
//     if (evt.keyCode == 65) {
//         var key = document.getElementsByClassName("key");
//         key[1].style.backgroundColor = "white";
//     }

//     if (evt.keyCode == 66) {
//         var key = document.getElementsByClassName("key");
//         key[2].style.backgroundColor = "white";
//     }

//     if (evt.keyCode == 67) {
//         var key = document.getElementsByClassName("key");
//         key[3].style.backgroundColor = "white";
//     }

//     if (evt.keyCode == 68) {
//         var key = document.getElementsByClassName("key");
//         key[4].style.backgroundColor = "white";
//     }
// }

