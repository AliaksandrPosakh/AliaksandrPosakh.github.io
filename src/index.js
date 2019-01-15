import {
    drawCanvasBlocks
} from './utils/canvas';

import { getTaskWindow } from './utils/questions';

import User from './user/user';
import Enemy from './enemy/enemy';
import Heals from './utils/heals';

const canvasList = drawCanvasBlocks();

const user = new User(canvasList.userCanvas);
const enemy = new Enemy(canvasList.enemyCanvas);

user.drawPlayer();
enemy.drawPlayer();

const youHeals = new Heals(canvasList.userCanvas, 200, 200, 400, 200, 50, 'gold', 'round', '40px solid', 'YOU', 240, 170);
const enemyHeals = new Heals(canvasList.enemyCanvas, 1100, 200, 1300, 200, 50, 'gold', 'round', '40px solid', 'ENEMY', 1130, 170);

youHeals.drawHeals();
enemyHeals.drawHeals();
const questionForm = getTaskWindow();

document.body.appendChild(questionForm);

