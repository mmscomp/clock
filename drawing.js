var canvas, ctx;
var x = 500,
    y = 300,
    r = 150;
var id;
//var myTime = setInterval(init, 1000);
function init() {
    canvas = document.getElementById('Canvas1');
    //Get the context
    ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgba(255,255,255,1)"
    ctx.fillRect(0, 0, 1200, 800);
    //var myTime = setInterval(draw,1000);
    startAnimation();
};
// function draw(){
function animationLoop(timeStamp) {
    ctx.save();
    ctx.fillStyle = "rgba(255,255,255,1)"
    ctx.fillRect(0, 0, 1200, 800);

    ctx.font = "30pt Calibri";
    ctx.lineWidth = 2;
    ctx.strokeStyle = "brown";
    ctx.strokeText("12", x - 20, y - 195); //2*195);
    ctx.strokeText("1", x + 50, y - 180); //2*180);
    ctx.strokeText("2", x + 85, y - 145); //2*145);
    ctx.strokeText("3", x + 95, y - 85); //2*85);
    ctx.strokeText("4", x + 85, y - 35); //2*35);
    ctx.strokeText("5", x + 50, y + 5); //2*5);
    ctx.strokeText("6", x - 10, y + 25); //50);
    ctx.strokeText("7", x - 65, y + 5); //2*5);
    ctx.strokeText("8", x - 110, y - 30); //2*30);
    ctx.strokeText("9", x - 115, y - 85); //2*85);
    ctx.strokeText("10", x - 115, y - 145); //2*145);
    ctx.strokeText("11", x - 75, y - 185); //2*185);    
    ctx.restore();

    ctx.beginPath();
    ctx.lineWidth = 15;
    ctx.arc(x, y - 100, r, 0, Math.PI * 2);
    for (var i = 0; i < 60; i++) {
        ctx.save();
        ctx.translate(x + r * Math.sin(Math.PI / 30 * i), y - 250 + r * (1 - Math.cos(Math.PI / 30 * i)));
        ctx.rotate(Math.PI / 30 * i);
        if (i != 0 && i != 15 && i != 30 && i != 45) {
            if (i != 5 && i != 10 && i != 20 && i != 25 && i != 35 && i != 40 && i != 50 && i != 55)
                ctx.scale(0.3, 0.3);
            else
                ctx.scale(0.5, 0.5);
        }
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 40);
        ctx.stroke();
        ctx.restore();

        var dat = new Date();
        ctx.beginPath();
        ctx.save();
        ctx.translate(x, y - 100);
        ctx.rotate(-Math.PI / 2 + Math.PI / 30 * (dat.getMinutes() - 1));
        ctx.moveTo(0, 0);
        ctx.lineTo(90, 0);
        ctx.lineCap = "pointed";

        ctx.strokeStyle = "rgba(255,255,255,1)";
        ctx.stroke();
        ctx.restore();

        ctx.beginPath();
        ctx.save();
        ctx.translate(x, y - 100);
        ctx.rotate(-Math.PI / 2 + Math.PI / 30 * dat.getMinutes());
        ctx.moveTo(0, 0);
        ctx.lineTo(80, 0);
        ctx.lineCap = "pointed";
        ctx.strokeStyle = "rgba(255, 0, 255, 1)";
        ctx.stroke();
        ctx.restore();

        if (dat.getSeconds() % 3 === 0) {
            ctx.beginPath();
            ctx.save();
            ctx.translate(x, y - 100);
            ctx.rotate(-Math.PI / 2 + Math.PI / 30 * (dat.getSeconds() - 1));
            ctx.moveTo(0, 0);
            ctx.lineTo(85, 0);
            ctx.lineCap = "round";

            ctx.strokeStyle = "rgba(255,255,255,1)";
            ctx.stroke();
            ctx.restore();

            ctx.beginPath();
            ctx.save();
            ctx.translate(x, y - 100);
            ctx.rotate(-Math.PI / 2 + Math.PI / 30 * dat.getSeconds());
            ctx.moveTo(0, 0);
            ctx.lineTo(85, 0);
            ctx.lineCap = "round";
            ctx.strokeStyle = "rgba(0, 0, 255, 1)";
            ctx.stroke();
            ctx.restore();
        } else if (dat.getSeconds() % 3 == 2) {
            ctx.beginPath();
            ctx.save();
            ctx.translate(x, y - 100);
            ctx.rotate(-Math.PI / 2 + Math.PI / 30 * (dat.getSeconds() - 1));
            ctx.moveTo(0, 0);
            ctx.lineTo(85, 0);
            ctx.lineCap = "round";

            ctx.strokeStyle = "rgba(255,255,255,1)";
            ctx.stroke();
            ctx.restore();

            ctx.beginPath();
            ctx.save();
            ctx.translate(x, y - 100);
            ctx.rotate(-Math.PI / 2 + Math.PI / 30 * dat.getSeconds());
            ctx.moveTo(0, 0);
            ctx.lineTo(85, 0);
            ctx.lineCap = "round";
            ctx.strokeStyle = "rgba(0, 255, 0, 1)";
            ctx.stroke();
            ctx.restore();

        } else {
            ctx.beginPath();
            ctx.save();
            ctx.translate(x, y - 100);
            ctx.rotate(-Math.PI / 2 + Math.PI / 30 * (dat.getSeconds() - 1));
            ctx.moveTo(0, 0);
            ctx.lineTo(85, 0);
            ctx.lineCap = "round";

            ctx.strokeStyle = "rgba(255,255,255,1)";
            ctx.stroke();
            ctx.restore();

            ctx.beginPath();
            ctx.save();
            ctx.translate(x, y - 100);
            ctx.rotate(-Math.PI / 2 + Math.PI / 30 * dat.getSeconds());
            ctx.moveTo(0, 0);
            ctx.lineTo(85, 0);
            ctx.lineCap = "round";
            ctx.strokeStyle = "rgba(255, 0, 0, 1)";
            ctx.stroke();
            ctx.restore();
        }


        ctx.beginPath();
        ctx.save();
        ctx.translate(x, y - 100);
        ctx.rotate(-Math.PI / 2 + Math.PI / 6 * dat.getHours() + Math.PI / 360 * (dat.getMinutes() - 1));
        ctx.moveTo(0, 0);
        ctx.lineTo(60, 0);
        ctx.lineCap = "round";

        ctx.strokeStyle = "rgba(255,255,255,1)";
        ctx.stroke();
        ctx.restore();


        ctx.beginPath();
        ctx.save();
        ctx.translate(x, y - 100);
        ctx.rotate(-Math.PI / 2 + Math.PI / 6 * dat.getHours() + Math.PI / 360 * dat.getMinutes());
        ctx.moveTo(0, 0);
        ctx.lineTo(60, 0);
        ctx.lineCap = "round";
        ctx.strokeStyle = "green";
        ctx.stroke();
        ctx.restore();

    }
    id = requestAnimationFrame(animationLoop);
}

id = requestAnimationFrame(animationLoop);

function startAnimation() {
    id = requestAnimationFrame(animationLoop);
}