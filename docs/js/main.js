var Fled = (function () {
    function Fled(p) {
        this.pika = p;
        Game.getInstance().gameOver(false);
        this.performBehavior();
    }
    Fled.prototype.notify = function () {
        console.log("Fuck this shit I'm out");
    };
    Fled.prototype.performBehavior = function () {
        this.pika.div.style.backgroundImage = "none";
    };
    Fled.prototype.onPet = function () {
    };
    Fled.prototype.onSleeping = function () {
    };
    Fled.prototype.onTraining = function () {
    };
    return Fled;
}());
var Idle = (function () {
    function Idle(p, c) {
        var _this = this;
        this.first = true;
        c.subscribe(this);
        this.pika = p;
        console.log(this.pika.state);
        this.controls = c;
        this.pika.div.addEventListener("click", function () { return _this.onPet(); });
    }
    Idle.prototype.performBehavior = function () {
        if (this.first == true) {
            this.pika.div.style.backgroundImage = "url('images/" + this.pika.state + "/idle.gif')";
            var sound = new Howl({
                src: ['sounds/' + this.pika.state + '.wav'],
                volume: 0.2
            });
            sound.play();
            this.first = false;
        }
        this.pika.sleep += 0.002;
    };
    Idle.prototype.notify = function (b) {
        switch (b) {
            case 87:
            case 65:
            case 68:
            case 83:
                console.log("arrows");
                break;
            case 74:
                this.onTraining();
                break;
            case 75:
                this.onSleeping();
                break;
            default:
                break;
        }
    };
    Idle.prototype.onPet = function () {
        this.pika.happiness += 1;
    };
    Idle.prototype.onSleeping = function () {
        this.pika.behavior = new Sleeping(this.pika, this.controls);
        this.controls.unsubscribe(this);
    };
    Idle.prototype.onTraining = function () {
        if (this.pika.sleep > 69) {
            this.pika.happiness -= 20;
        }
        this.pika.behavior = new Training(this.pika, this.controls);
        this.controls.unsubscribe(this);
    };
    return Idle;
}());
var Pet = (function () {
    function Pet(p) {
        this.pika = p;
    }
    Pet.prototype.notify = function () {
        console.log(":D");
    };
    Pet.prototype.performBehavior = function () {
        this.pika.div.style.backgroundImage = "url('images/dead.png')";
    };
    Pet.prototype.onPet = function () {
    };
    Pet.prototype.onSleeping = function () {
    };
    Pet.prototype.onTraining = function () {
    };
    return Pet;
}());
var Sleeping = (function () {
    function Sleeping(p, c) {
        this.pika = p;
        this.controls = c;
        this.controls.subscribe(this);
    }
    Sleeping.prototype.notify = function (b) {
        if (b == 75) {
            this.onSleeping();
        }
    };
    Sleeping.prototype.performBehavior = function () {
        this.pika.div.style.backgroundImage = "url('images/" + this.pika.state + "/sleeping.gif')";
        this.pika.sleep -= 0.02;
    };
    Sleeping.prototype.onPet = function () {
    };
    Sleeping.prototype.onSleeping = function () {
        this.pika.behavior = new Idle(this.pika, this.controls);
        this.controls.unsubscribe(this);
    };
    Sleeping.prototype.onTraining = function () {
    };
    return Sleeping;
}());
var Training = (function () {
    function Training(p, c) {
        var _this = this;
        this.pika = p;
        this.controls = c;
        this.Buttons = new Array(87, 83, 65, 68, 74, 75);
        this.training = document.createElement("countdown");
        var parent = document.getElementById("container");
        parent.appendChild(this.training);
        this.training.style.display = "block";
        setTimeout(function () {
            _this.training.style.background = "none";
            _this.onTraining();
        }, 2500);
    }
    Training.prototype.notify = function (b) {
        this.userButton = b;
    };
    Training.prototype.performBehavior = function () {
    };
    Training.prototype.onPet = function () {
    };
    Training.prototype.onSleeping = function () {
    };
    Training.prototype.onTraining = function () {
        var _this = this;
        this.score = 0;
        var count = 0;
        this.pika.div.style.transform = "translate(200px, 40px)";
        this.pika.div.style.backgroundImage = "url('images/" + this.pika.state + "/attack-1.gif')";
        this.controls.subscribe(this);
        this.createRandomButton();
        var trainInterval = setInterval(function () {
            count++;
            _this.checkTraining(count, trainInterval);
        }, this.pika.speed);
    };
    Training.prototype.createRandomButton = function () {
        var number = Math.floor(Math.random() * 6);
        this.training_key = this.Buttons[number];
        this.training.style.background = "url('images/buttons/" + this.training_key + ".png')";
    };
    Training.prototype.checkTraining = function (count, trainInterval) {
        console.log(this.score);
        if (this.training_key == this.userButton) {
            this.score++;
            console.log('yea');
            var right_1 = new Howl({
                src: ['sounds/right.wav']
            });
            right_1.play();
            right_1.on('end', function () {
                right_1.stop();
            });
        }
        else {
            this.score--;
            console.log('noh');
            var wrong_1 = new Howl({
                src: ['sounds/wrong.wav']
            });
            wrong_1.play();
            wrong_1.on('end', function () {
                wrong_1.stop();
            });
        }
        if (count > 9) {
            clearInterval(trainInterval);
            this.training.style.background = "none";
            this.pika.div.style.transform = "translate(282px, 140px)";
            this.controls.unsubscribe(this);
            this.pika.sleep += 10;
            this.pika.xp += this.score.valueOf();
            this.pika.behavior = new Idle(this.pika, this.controls);
        }
        else {
            this.createRandomButton();
        }
    };
    return Training;
}());
var Controls = (function () {
    function Controls() {
        var _this = this;
        this.button87 = document.getElementsByTagName("up-button")[0];
        this.button83 = document.getElementsByTagName("down-button")[0];
        this.button65 = document.getElementsByTagName("left-button")[0];
        this.button68 = document.getElementsByTagName("right-button")[0];
        this.button74 = document.getElementsByTagName("a-button")[0];
        this.button75 = document.getElementsByTagName("b-button")[0];
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        this.observers = new Array();
    }
    Controls.prototype.subscribe = function (o) {
        this.observers.push(o);
    };
    Controls.prototype.unsubscribe = function (o) {
        this.observers.splice(0, 1);
    };
    Controls.prototype.onKeyDown = function (event) {
        var button = "button" + event.keyCode;
        if (this[button] == undefined) {
        }
        else {
            this[button].classList.add("active");
            this.action(event.keyCode);
        }
    };
    Controls.prototype.action = function (b) {
        this.observers.forEach(function (o) {
            o.notify(b);
        });
    };
    Controls.prototype.onKeyUp = function (event) {
        var button = "button" + event.keyCode;
        if (this[button] == undefined) {
        }
        else {
            this[button].classList.remove("active");
        }
    };
    return Controls;
}());
var Pika = (function () {
    function Pika(parent, c) {
        this.div = document.createElement("pika");
        this.state = "Pichu";
        parent.appendChild(this.div);
        this.x = 0;
        this.y = 220;
        this.xp = 5;
        this.sleep = 0;
        this.happiness = 30;
        this.behavior = new Idle(this, c);
    }
    Object.defineProperty(Pika.prototype, "behavior", {
        get: function () {
            return this._behavior;
        },
        set: function (b) {
            this._behavior = b;
        },
        enumerable: true,
        configurable: true
    });
    Pika.prototype.update = function () {
        if (this.sleep < 0) {
            this.sleep = 0;
        }
        if (this.happiness < 10) {
            this.behavior = new Fled(this);
        }
        if (this.xp > 1 && this.xp < 19) {
            this.state = "Pichu";
            this.speed = 2500;
        }
        else if (this.xp > 100) {
            Game.getInstance().gameOver(true);
        }
        else if (this.xp > 19 && this.xp < 39) {
            this.state = "Pikachu";
            this.speed = 800;
        }
        else if (this.xp > 49) {
            this.state = "Raichu";
            this.speed = 600;
        }
        else if (this.xp < 1) {
            this.behavior = new Fled(this);
        }
        if (this.happiness > 100) {
            this.happiness = 100;
        }
        this.behavior.performBehavior();
    };
    return Pika;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        var container = document.getElementById("container");
        this.controls = new Controls();
        this.pika = new Pika(container, this.controls);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.pika.update();
        this.updateUI();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.updateUI = function () {
        document.getElementsByTagName("xp")[0].innerHTML = Math.round(this.pika.xp).toString() + "xp";
        document.getElementsByTagName("sleep")[0].innerHTML = Math.round(this.pika.sleep).toString() + "Zzz";
        document.getElementsByTagName("happiness")[0].innerHTML = Math.round(this.pika.happiness).toString() + ":)";
    };
    Game.prototype.gameOver = function (w) {
        if (w == true) {
            console.log('You win!');
        }
        else {
            console.log("Game over");
        }
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = Game.getInstance();
});
//# sourceMappingURL=main.js.map