export function drawCanvasBlocks() {
    let canvas = document.createElement("canvas");
    canvas.className = "canvasWindow";
    let ctx = canvas.getContext("2d");
    canvas.width = 1920;
    canvas.height = 1080;
    document.body.appendChild(canvas);

    let canvasPlayer1 = document.createElement("canvas");
    let userCanvas = canvas.getContext("2d");
    canvasPlayer1.className = "canvasPlayer1";
    canvasPlayer1.width = 250;
    canvasPlayer1.height = 450;
    document.body.appendChild(canvasPlayer1);

    let canvasPlayer2 = document.createElement("canvas");
    let enemyCanvas = canvas.getContext("2d");
    canvasPlayer2.className = "canvasPlayer2";
    canvasPlayer2.width = 250;
    canvasPlayer2.height = 450;
    document.body.appendChild(canvasPlayer2);

    return {
        userCanvas,
        enemyCanvas,
        ctx
    }
}
