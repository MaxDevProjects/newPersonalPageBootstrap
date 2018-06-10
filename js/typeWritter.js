// var txt = "front-end";
// var dataTxt = ["HTML/CSS" , "Bootstrap" , "Javascript" , "Jquery"];
// var speed = 120;
// var i = 0;var j = 0; var k = 0;
// var intervalTime;
// var newTxt = false;


// function typeWriter() {
//     if(i < txt.length) {
//         document.getElementById("speciality").innerHTML += txt.charAt(i) + '<span aria-hidden="true"></span>';
//         i++;
//         setTimeout(typeWriter, speed);
//     }else{
//         setTimeout(eraseTxt, 150);
//     }
// }


// function eraseTxt() {
//     if (i >= 0) {
//         var temp = txt.substring(0, i);
//         document.getElementById('speciality').innerHTML = temp + '<span aria-hidden="true"></span>';
//         i--;
//         setTimeout(eraseTxt, 150);
//     } else {
//         setTimeout(typeWriter, speed);
//     }
    
// }

// typeWriter();




// timeInterval(60);

document.addEventListener('DOMContentLoaded', function (event) {
    // array with texts to type in typewriter 
    var dataText = [" HTML/CSS", " Bootstrap", " Javascript"];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.getElementById("speciality").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }

    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 5000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);
});