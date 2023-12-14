
function play() {
    var playerRandomNumber = Math.floor(Math.random() * 6) + 1;
    var computerRandomNumber = Math.floor(Math.random() * 6) + 1;

    var playerRandomImage = "img/dice" + playerRandomNumber + ".png"
    var computerRandomImage = "img/dice" + computerRandomNumber + ".png"

    var imageSrcRandom = document.querySelectorAll("img")[0];

    imageSrcRandom.setAttribute("src", playerRandomImage);

    document.querySelectorAll("img")[2].setAttribute("src", computerRandomImage);

    if (playerRandomNumber > computerRandomNumber) {
        document.querySelector("h1").innerHTML = "🚩 Cong... You Win"
    }
    else if (computerRandomNumber > playerRandomNumber) {
        document.querySelector("h1").innerHTML = " Sorry... You Loose 🚩"
    }
    else {
        document.querySelector("h1").innerHTML = " It's Draw 🎌"
   }
}
