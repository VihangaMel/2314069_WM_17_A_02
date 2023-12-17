var imageArray = [];
imageArray[0] = "assets/dice face 1.png";
imageArray[1] = "assets/dice face 2.png";
imageArray[2] = "assets/dice face 3.png";
imageArray[3] = "assets/dice face 4.png";
imageArray[4] = "assets/dice face 5.png";
imageArray[5] = "assets/dice face 6.png";

function shuffle1() {
    var num = Math.floor(Math.random() * imageArray.length);
    document.getElementById("image1").src = imageArray[num];
}
function shuffle2() {
    var num = Math.floor(Math.random() * imageArray.length);
    document.getElementById("image2").src = imageArray[num];
}

