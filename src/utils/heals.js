

export class Heals {
    constructor(contex, moveToX, moveToY, lineToX, lineToY, lineWidth, strokeStyle, lineCap, font, fillText, fillTextX, fillTextY) {
        this.contex = contex;
        this.moveToX = moveToX;
        this.moveToY = moveToY;
        this.lineToX = lineToX;
        this.lineToY = lineToY;
        this.lineWidth = lineWidth;
        this.strokeStyle = strokeStyle;
        this.lineCap = lineCap;
        this.font = font;
        this.fillText = fillText;
        this.fillTextX = fillTextX;
        this.fillTextY = fillTextY;
    }

    drawHeals() {
        this.contex.beginPath();
        this.contex.moveTo(this.moveToX, this.moveToY);
        this.contex.lineTo(this.lineToX,this.lineToY);
        this.contex.lineWidth = this.lineWidth;
        this.contex.strokeStyle = this.strokeStyle;
        this.contex.lineCap = this.lineCap;
        this.contex.font = this.font;
        this.contex.fillText(this.fillText, this.fillTextX, this.fillTextY);
        this.contex.stroke();
    }

}

// let youHeals = new Heals(200, 200, 400, 200, 50, 'gold', 'round', '40px solid', 'YOU', 240, 170);
// youHeals.drawHeals();
// let enemyHeals = new Heals(1100, 200, 1300, 200, 50, 'gold', 'round', '40px solid', 'ENEMY', 1130, 170);
// enemyHeals.drawHeals();

// enemyHeals() {
//     secondPlayer.beginPath();
//     secondPlayer.moveTo(1100, 200);
//     secondPlayer.lineTo(1300,200);
//     secondPlayer.lineWidth = 50;
//     secondPlayer.strokeStyle = "gold";
//     secondPlayer.lineCap = "round";
//     secondPlayer.font = "40px solid";
//     secondPlayer.fillText('ENEMY', 1130, 170);
//     secondPlayer.stroke();
// }
