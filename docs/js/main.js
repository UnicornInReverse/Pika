var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        for (var i = 0; i < this.observers.length; i++) {
            if (this.observers[i] == o) {
                this.observers.splice(i, 1);
            }
        }
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
var Pokepet = (function () {
    function Pokepet() {
    }
    Object.defineProperty(Pokepet.prototype, "behavior", {
        get: function () {
            return this._behavior;
        },
        set: function (b) {
            this._behavior = b;
        },
        enumerable: true,
        configurable: true
    });
    Pokepet.prototype.update = function () {
        if (this.sleep < 0) {
            this.sleep = 0;
        }
        if (this.xp > 1 && this.xp < 19) {
            this.cur_state = this.states[0];
            this.speed = 2500;
        }
        else if (this.xp > 19 && this.xp < 39) {
            this.cur_state = this.states[1];
            this.speed = 800;
        }
        else if (this.xp > 49) {
            this.cur_state = this.states[2];
            this.speed = 600;
            if (this.happiness > 100) {
                this.happiness = 100;
            }
            if (this.happiness < 0) {
                this.happiness = 0;
            }
        }
        this.behavior.performBehavior();
    };
    return Pokepet;
}());
var Pika = (function (_super) {
    __extends(Pika, _super);
    function Pika(parent, c) {
        _super.call(this);
        this.div = document.createElement("pika");
        this.states = new Array("Pichu", "Pikachu", "Raichu");
        parent.appendChild(this.div);
        this.xp = 5;
        this.sleep = 0;
        this.happiness = 30;
        this.behavior = new Idle(this, c);
    }
    return Pika;
}(Pokepet));
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
        if (w) {
            this.pika.div.style.transform = "translate(219px, 118px)";
            this.pika.div.style.backgroundImage = "url('images/you-won.png')";
        }
        else {
            this.pika.div.style.transform = "translate(215px, 140px)";
            this.pika.div.style.backgroundImage = "url('images/game-over.gif')";
        }
        window.addEventListener("keydown", function (e) {
            if (e.keyCode == 75) {
                location.reload();
            }
        });
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = Game.getInstance();
});
var Keys;
(function (Keys) {
    Keys[Keys["UP"] = 87] = "UP";
    Keys[Keys["DOWN"] = 83] = "DOWN";
    Keys[Keys["LEFT"] = 65] = "LEFT";
    Keys[Keys["RIGHT"] = 68] = "RIGHT";
    Keys[Keys["A"] = 74] = "A";
    Keys[Keys["B"] = 75] = "B";
})(Keys || (Keys = {}));
var SoundBuilder;
(function (SoundBuilder_1) {
    var SoundBuilder = (function () {
        function SoundBuilder() {
        }
        SoundBuilder.getSound = function (name) {
            var sound = new Howl({
                src: ['sounds/' + name + '.wav'],
                volume: 0.2
            });
            sound.play();
        };
        SoundBuilder.getSoundOnce = function (name) {
            var sound = new Howl({
                src: ['sounds/' + name + '.wav']
            });
            sound.play();
            sound.on('end', function () {
                sound.stop();
            });
        };
        return SoundBuilder;
    }());
    SoundBuilder_1.SoundBuilder = SoundBuilder;
})(SoundBuilder || (SoundBuilder = {}));
var Util = (function () {
    function Util() {
    }
    Util.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return Util;
}());
var Fled = (function () {
    function Fled(p, c) {
        this.pika = p;
        this.controls = c;
        this.controls.subscribe(this);
        Game.getInstance().gameOver(false);
        this.performBehavior();
    }
    Fled.prototype.notify = function () {
        console.log("Fuck this shit I'm out");
    };
    Fled.prototype.performBehavior = function () {
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
        this.controls = c;
        this.pika.div.addEventListener("click", function () { return _this.onPet(); });
    }
    Idle.prototype.performBehavior = function () {
        if (this.first) {
            this.pika.div.style.backgroundImage = "url('images/" + this.pika.cur_state + "/idle.gif')";
            var sound = SoundBuilder.SoundBuilder.getSound(this.pika.cur_state);
            this.first = false;
        }
        this.pika.sleep += 0.002;
        if (this.pika.xp < 1 || this.pika.happiness < 25) {
            this.pika.behavior = new Fled(this.pika, this.controls);
            this.controls.unsubscribe(this);
        }
        else if (this.pika.xp > 99) {
            this.controls.unsubscribe(this);
            Game.getInstance().gameOver(true);
        }
    };
    Idle.prototype.notify = function (b) {
        switch (b) {
            case Keys.RIGHT:
                console.log("arrows");
                break;
            case Keys.B:
                this.onTraining();
                break;
            case Keys.A:
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
            this.pika.happiness -= 10;
        }
        this.pika.behavior = new Training(this.pika, this.controls);
        this.controls.unsubscribe(this);
    };
    return Idle;
}());
var Sleeping = (function () {
    function Sleeping(p, c) {
        this.pika = p;
        this.controls = c;
        this.controls.subscribe(this);
    }
    Sleeping.prototype.notify = function (b) {
        if (b == Keys.A) {
            this.onSleeping();
        }
    };
    Sleeping.prototype.performBehavior = function () {
        this.pika.div.style.backgroundImage = "url('images/" + this.pika.cur_state + "/sleeping.gif')";
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
        this.pika.div.style.backgroundImage = "url('images/" + this.pika.cur_state + "/attack-1.gif')";
        this.controls.subscribe(this);
        this.createRandomButton();
        var trainInterval = setInterval(function () {
            count++;
            _this.checkTraining(count, trainInterval);
        }, this.pika.speed);
    };
    Training.prototype.createRandomButton = function () {
        this.training_key = this.Buttons[Util.random(0, 5)];
        this.training.style.background = "url('images/buttons/" + this.training_key + ".png')";
    };
    Training.prototype.checkTraining = function (count, trainInterval) {
        console.log(this.score);
        if (this.training_key == this.userButton) {
            this.score++;
            console.log('yea');
            SoundBuilder.SoundBuilder.getSoundOnce('right');
        }
        else {
            this.score--;
            console.log('noh');
            SoundBuilder.SoundBuilder.getSoundOnce('wrong');
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
//# sourceMappingURL=main.js.map