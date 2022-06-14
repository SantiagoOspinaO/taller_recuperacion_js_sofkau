export class ball {

    constructor(width, height, color, borderColor) {
        this.width = width;
        this.height = height;
        this.borderColor = borderColor;
        this.color = color;
        this.movement = 20;
    }

    setAtributes(balldom) {
        balldom.style.width = this.width + 'px';
        balldom.style.height = this.height + 'px';
        balldom.style.backgroundColor = this.color;
        balldom.style.borderColor = this.borderColor;
    }

    moveBall(balldom) {
        switch (balldom.state) {
            case 1: // derecha, abajo
                balldom.style.left = (balldom.offsetLeft + this.movement) + "px";
                balldom.style.top = (balldom.offsetTop + this.movement) + "px";
                break;
            case 2: // derecha, arriba
                balldom.style.left = (balldom.offsetLeft + this.movement) + "px";
                balldom.style.top = (balldom.offsetTop - this.movement) + "px";
                break;
            case 3: // izquierda, abajo
                balldom.style.left = (balldom.offsetLeft - this.movement) + "px";
                balldom.style.top = (balldom.offsetTop + this.movement) + "px";
                break;
            case 4: // izquierda, arriba
                balldom.style.left = (balldom.offsetLeft - this.movement) + "px";
                balldom.style.top = (balldom.offsetTop - this.movement) + "px";
                break;
        }
    }

    collidePlayer1(balldom, bar1) {
        if (balldom.offsetLeft <= (bar1.clientWidth) &&
            balldom.offsetTop >= bar1.offsetTop &&
            balldom.offsetTop <= (bar1.offsetTop + bar1.clientHeight)) {
            return true;
        }
        return false;
    }

    collidePlayer2(balldom, bar2, width) {
        if (balldom.offsetLeft >= (width - bar2.clientWidth) &&
            balldom.offsetTop >= bar2.offsetTop &&
            balldom.offsetTop <= (bar2.offsetTop + bar2.clientHeight)) {
            return true;
        }
        return false;
    }

    checkStateBall(balldom, collide1, collide2, height) {
        if (collide2) {
            balldom.direction = 2;
            if (balldom.state == 1) balldom.state = 3;
            if (balldom.state == 2) balldom.state = 4;
        } else if (collide1) {
            balldom.direction = 1;
            if (balldom.state == 3) balldom.state = 1;
            if (balldom.state == 4) balldom.state = 2;
        }
        if (balldom.direction === 1) {
            if (balldom.offsetTop >= height) balldom.state = 2;
            else if (balldom.offsetTop <= 0) balldom.state = 1;
        } else {
            if (balldom.offsetTop >= height) balldom.state = 4;
            else if (balldom.offsetTop <= 0) balldom.state = 3;
        }
    }

    checkIfLost(balldom, width, stop) {
        if (balldom.offsetLeft >= width) {
            balldom.direction = 2
            if (balldom.state == 1) balldom.state = 3;
            if (balldom.state == 2) balldom.state = 4;
            stop();
        }
        if (balldom.offsetLeft <= 0) {
            balldom.direction = 1;
            if (balldom.state == 3) balldom.state = 1;
            if (balldom.state == 4) balballdomdom.state = 2;
            stop();
        }
    }
}

