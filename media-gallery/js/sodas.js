cover = document.getElementById("cover");
coverImg = document.getElementById("cover-img")
coverTitle = document.getElementById("cover-title")
coverText = document.getElementById("cover-text")
coverOn = false;
cover.onclick = function(){toggleCover};

sodas = [
    "bang",
    "monster",
    "nos",
    "red_bull",
    "rockstar",
    "starbucks"
]

names = {
    bang: "Bang",
    monster: "Monster",
    nos: "NOS",
    red_bull: "Red Bull",
    rockstar: "Rockstar",
    starbucks: "Starbucks"
}

for(soda in sodas) {
    let name = sodas[soda];
    document.getElementById(name + "-img").onclick = function(){toggleCover(name)};
    document.getElementById(name + "-heart").onclick = function(){clickLike(name)};
}

liked = {
    bang: false,
    monster: false,
    nos: false,
    red_bull: false,
    rockstar: false,
    starbucks: false
}

text = {
    bang: "Best energy drink in the world!",
    monster: "Iconic, classy, delicious.",
    nos: "Named after NO2 bottle.",
    red_bull: "World-class motorsports participation.",
    rockstar: "Delicious, diverse flavoring.",
    starbucks: "Classic American coffee."
}

function clickLike(name) {
    liked[name] = !liked[name];
    setHeart(name);
    console.log(name + " clicked!");
}

function setHeart(name) {
    heart = document.getElementById(name + "-heart");
    if(liked[name]) {
        heart.innerText = "💔";
        heart.parentElement.parentElement.style.backgroundColor = "#fcf3e0";
    } else {
        heart.innerText = "❤️";
        heart.parentElement.parentElement.style.backgroundColor = "#ffffff";
    }
}

function toggleCover(soda) {
    coverOn = !coverOn;
    setCover(soda);
}

function setCover(soda) {
    coverImg.src = "img/" + soda + ".png";
    coverTitle.innerText = names[soda] + "™";
    coverText.innerText = text[soda];
    if(coverOn) {
        cover.style.display = "flex";
        cover.style.visibility = "visible";
        cover.onclick = function(){toggleCover(soda);};
    } else {
        cover.style.display = "none";
        cover.style.visibility = "hidden";
    }
}