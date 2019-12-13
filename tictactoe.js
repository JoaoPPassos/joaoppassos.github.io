var criarMapaTTT = function() {
    var canvas = document.getElementById("gameField");
    var ctx = canvas.getContext('2d');

    ctx.beginPath();

    ctx.moveTo(canvas.clientWidth / 3, 10);
    ctx.lineTo(canvas.clientWidth / 3, canvas.clientHeight - 10);

    ctx.moveTo((2 * canvas.clientWidth) / 3, 6);
    ctx.lineTo((2 * canvas.clientWidth) / 3, canvas.clientHeight - 10);

    ctx.moveTo(10, canvas.clientHeight / 3);
    ctx.lineTo(canvas.clientWidth - 10, canvas.clientHeight / 3);

    ctx.moveTo(10, (2 * canvas.clientHeight) / 3);
    ctx.lineTo(canvas.clientWidth - 10, (2 * canvas.clientHeight) / 3);

    ctx.stroke();
}