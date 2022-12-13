function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    let size = 100;

    context.fillStyle = "rgba(255,0,0,.5)";
    context.fillRect(canvasWidth *.5 - size * .75,canvasHeight * .5 - size * .75,size,size);
    
    context.fillStyle = "rgba(0,0,255,.5)";
    context.fillRect(canvasWidth *.5 - size * .25,canvasHeight * .5 - size * .255,size,size);  

}

window.addEventListener("load", pageLoaded);