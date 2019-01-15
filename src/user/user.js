
import {getObservable} from '../utils/observable';

export default class User  {
    constructor(canvas) {
        this.x = 400;
        this.y = 730;
        this.dx = 3;
        this.dy = 3;
        this.img = new Image();
        // this.canvas = canvas;
        this.observable = getObservable();
        this.observable.on('Player:swing', this.swing.bind(this));
    }

    head() {
        this.canvas.drawImage(this.img,0,0);
        this.canvas.beginPath();
        this.canvas.arc(300, 700, 30, 0, 2 * Math.PI);
        this.canvas.lineWidth = 8;
        this.canvas.strokeStyle = "darkgreen";
        this.canvas.lineCap = "round";
        this.canvas.stroke();
    }

    face() {
        this.canvas.beginPath();
        this.canvas.lineWidth = 5;
        this.canvas.arc(290, 695, 3, 0, 2 * Math.PI);
        this.canvas.stroke();
        this.canvas.beginPath();
        this.canvas.arc(310, 695, 3, 0, 2 * Math.PI);
        this.canvas.stroke();
        this.canvas.beginPath();
        this.canvas.arc(300, 695, 20, Math.PI*0.75, Math.PI*0.25 ,Math.PI, false);
        this.canvas.stroke();
    }

    drawBody() {
        this.canvas.beginPath();
        this.canvas.moveTo(300, 730);
        this.canvas.lineTo(300,830);
        this.canvas.stroke();
    }

    drawLeftLeg() {
        this.canvas.beginPath();
        this.canvas.moveTo(300,830);
        this.canvas.lineTo(260,930);
        this.canvas.stroke();
    }

    drawRightLeg() {
        this.canvas.beginPath();
        this.canvas.moveTo(300,830);
        this.canvas.lineTo(340,930);
        this.canvas.stroke();
    }

    drawLeftHand() {
        this.canvas.beginPath();
        this.canvas.moveTo(300,760);
        this.canvas.lineTo(260,820);
        this.canvas.stroke();
    }

    drawRightHand() {
        this.canvas.beginPath();
        this.canvas.moveTo(300,760);
        this.canvas.lineTo(340,820);
        this.canvas.stroke();
    }

    drawSword() {
        this.canvas.beginPath();
        this.canvas.moveTo(340,820);
        this.canvas.lineWidth = 8;
        this.canvas.strokeStyle = "darkgreen";
        this.canvas.lineCap = "round";
        this.canvas.lineTo(this.x, this.y);
        this.canvas.stroke();
    }

    

    swing() {        
        const intervalId = setInterval(() => {
            this.canvas.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.drawPlayer();
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 420 && this.y > 750) {
                clearInterval(intervalId);

            }
        }, 30);
    }
    
    drawPlayer() {
        this.head();
        this.drawBody();
        this.drawLeftLeg();
        this.drawRightLeg();
        this.drawRightHand();
        this.drawLeftHand();
        this.face();
        this.drawSword();
        
    }
}
