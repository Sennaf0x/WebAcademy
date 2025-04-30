const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

// Classe Ball
function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
};

Ball.prototype.update = function () {
    if (this.x + this.size >= width || this.x - this.size <= 0) {
        this.velX = -this.velX;
    }
    if (this.y + this.size >= height || this.y - this.size <= 0) {
        this.velY = -this.velY;
    }
    this.x += this.velX;
    this.y += this.velY;
};

Ball.prototype.collisionDetect = function () {
    for (let j = 0; j < shapes.length; j++) {
        if (!(this === shapes[j])) {
            const dx = this.x - shapes[j].x;
            const dy = this.y - shapes[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < this.size + shapes[j].size) {
                shapes[j].color = this.color = "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")";
            }
        }
    }
};

// Classe Square
function Square(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

Square.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.rect(this.x, this.y, this.size, this.size);
    ctx.fill();
};

Square.prototype.update = function () {
    if (this.x + this.size >= width || this.x <= 0) {
        this.velX = -this.velX;
    }
    if (this.y + this.size >= height || this.y <= 0) {
        this.velY = -this.velY;
    }
    this.x += this.velX;
    this.y += this.velY;
};

Square.prototype.collisionDetect = function () {
    for (let j = 0; j < shapes.length; j++) {
        if (!(this === shapes[j])) {
            const dx = this.x + this.size / 2 - (shapes[j].x + shapes[j].size / 2);
            const dy = this.y + this.size / 2 - (shapes[j].y + shapes[j].size / 2);
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < this.size + shapes[j].size) {
                shapes[j].color = this.color = "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")";
            }
        }
    }
};

// Classe Triangle
function Triangle(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

Triangle.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x - this.size, this.y + this.size);
    ctx.lineTo(this.x + this.size, this.y + this.size);
    ctx.closePath();
    ctx.fill();
};

Triangle.prototype.update = function () {
    if (this.x + this.size >= width || this.x - this.size <= 0) {
        this.velX = -this.velX;
    }
    if (this.y + this.size >= height || this.y - this.size <= 0) {
        this.velY = -this.velY;
    }
    this.x += this.velX;
    this.y += this.velY;
};

Triangle.prototype.collisionDetect = function () {
    for (let j = 0; j < shapes.length; j++) {
        if (!(this === shapes[j])) {
            const dx = this.x - shapes[j].x;
            const dy = this.y - shapes[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < this.size + shapes[j].size) {
                shapes[j].color = this.color = "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")";
            }
        }
    }
};

let shapes = [];
while (shapes.length < 25) {
    let size = random(10, 20);
    let type = random(1, 3); // 1 para bola, 2 para quadrado, 3 para triângulo
    let shape;

    if (type === 1) {
        shape = new Ball(
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7),
            random(-7, 7),
            "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")",
            size
        );
    } else if (type === 2) {
        shape = new Square(
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7),
            random(-7, 7),
            "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")",
            size
        );
    } else {
        shape = new Triangle(
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7),
            random(-7, 7),
            "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")",
            size
        );
    }
    shapes.push(shape);
}

function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);
    for (let i = 0; i < shapes.length; i++) {
        shapes[i].draw();
        shapes[i].update();
        shapes[i].collisionDetect();
    }
    requestAnimationFrame(loop);
}

loop();