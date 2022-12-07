var body = document.querySelector("body");
var buttonWeggaan = document.getElementById('buttonWeggaan');
var buttonDansen = document.getElementById('buttonDansen');
var buttonOnthulling = document.getElementById('buttonOnthulling');
var video = document.getElementById('myVideo');
var gif = document.getElementById('gif');


buttonWeggaan.addEventListener('click', WegGaan);
buttonDansen.addEventListener('click', Dansen);
buttonOnthulling.addEventListener('click', Onthulling);

window.onload = function () {
    setTimeout(function () {
        gif.src = "images/gif/Main.gif";

        setTimeout(function () {
            gif.src = "images/gif/IdleState.gif";
            body.classList.remove("Active");
        }, 19800);
    }, 5350);
};

function WegGaan() {
    // video.src = "images/video/Animatie1.mp4";
    gif.src = "images/gif/Animatie1.gif";
    body.classList.add("Active");

    setTimeout(function () {
        gif.src = "images/gif/IdleState.gif";
        body.classList.remove("Active");
    }, 21000);

    // document.querySelector('video').addEventListener('ended',function(){
    //     video.src = "images/video/IdleState.mov";
    //     gif.src= "images/gif/IdleState.gif";
    //     body.classList.remove("Active");
    //   }, false);
}

function Dansen() {
    // video.src = "images/video/Animatie2.mp4";
    gif.src = "images/gif/Animatie2.gif";
    body.classList.add("Active");

    setTimeout(function () {
        gif.src = "images/gif/IdleState.gif";
        body.classList.remove("Active");
    }, 9000);

    // document.querySelector('video').addEventListener('ended',function(){
    //     video.src = "images/video/IdleState.mov";
    //     gif.src= "images/gif/IdleState.gif";
    //     body.classList.remove("Active");
    //   }, false);
}

function Onthulling() {
    // video.src = "images/video/Animatie3.mov";
    gif.src = "images/gif/Animatie3.gif";
    body.classList.add("Active");

    setTimeout(function () {
        gif.src = "images/gif/IdleState.gif";
        body.classList.remove("Active");
    }, 8000);

    // document.querySelector('video').addEventListener('ended',function(){
    //     video.src = "images/video/IdleState.mov";
    //     gif.src= "images/gif/IdleState.gif";
    //     body.classList.remove("Active");
    //   }, false);
}