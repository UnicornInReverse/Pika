var Controls = (function () {
    function Controls() {
        var _this = this;
        this.upButton = document.getElementsByTagName("up-button")[0];
        this.downButton = document.getElementsByTagName("down-button")[0];
        this.leftButton = document.getElementsByTagName("left-button")[0];
        this.rightButton = document.getElementsByTagName("right-button")[0];
        this.aButton = document.getElementsByTagName("a-button")[0];
        this.bButton = document.getElementsByTagName("b-button")[0];
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Controls.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case 87:
                console.log("up");
                this.upButton.classList.add("active");
                break;
            case 83:
                console.log("down");
                this.downButton.classList.add("active");
                break;
            case 65:
                console.log("left");
                this.leftButton.classList.add("active");
                break;
            case 68:
                console.log("right");
                this.rightButton.classList.add("active");
                break;
            case 74:
                console.log("b");
                this.aButton.classList.add("active");
                break;
            case 75:
                this.bButton.classList.add("active");
                console.log("a");
                break;
            default:
                break;
        }
    };
    Controls.prototype.onKeyUp = function (e) {
        var buttons = document.getElementsByClassName("button");
        var i = 0;
        while (i < 7) {
            buttons[i].classList.remove("active");
            i++;
        }
    };
    return Controls;
}());
var Dead = (function () {
    function Dead(p) {
        this.pika = p;
        this.performBehavior();
    }
    Dead.prototype.performBehavior = function () {
        this.pika.div.style.backgroundImage = "url('images/dead.png')";
    };
    Dead.prototype.onWash = function () {
    };
    Dead.prototype.onPet = function () {
    };
    Dead.prototype.onEat = function () {
    };
    return Dead;
}());
var Eat = (function () {
    function Eat(p) {
        this.pika = p;
    }
    Eat.prototype.performBehavior = function () {
        this.pika.div.style.backgroundImage = "url('images/dead.png')";
    };
    Eat.prototype.onWash = function () {
    };
    Eat.prototype.onEat = function () {
    };
    Eat.prototype.onPet = function () {
    };
    return Eat;
}());
var Pika = (function () {
    function Pika(parent) {
        var _this = this;
        this.div = document.createElement("pika");
        parent.appendChild(this.div);
        this.x = 0;
        this.y = 220;
        this.hygiene = this.food = this.happiness = 50;
        this.div.addEventListener("click", function () { return _this.onPet(); });
        this.behavior = new Idle(this);
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
        this.behavior.performBehavior();
        if (this.hygiene < 20) {
            this.div.style.backgroundImage = "url('images/dirty.png')";
        }
        if (this.food < 30) {
            this.div.style.backgroundImage = "url('images/hungry.png')";
        }
        if (this.happiness < 10) {
            this.div.style.backgroundImage = "url('images/sad.png')";
        }
        if (this.hygiene < 0 || this.food < 0 || this.happiness < 0) {
            this.happiness = 0;
            this.food = 0;
            this.hygiene = 0;
            this.behavior = new Dead(this);
        }
    };
    Pika.prototype.onPet = function () {
        console.log("you clicked on pika!");
        this.div.style.backgroundImage = "url('images/happy.png')";
    };
    Pika.prototype.onWash = function () {
        console.log("washing pika!");
        this.behavior.onWash();
    };
    Pika.prototype.onEat = function () {
        console.log("pika is eating!");
        this.behavior.onEat;
    };
    return Pika;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        var container = document.getElementById("container");
        this.pika = new Pika(container);
        this.controls = new Controls();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.pika.update();
        this.updateUI();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.updateUI = function () {
        document.getElementsByTagName("xp")[0].innerHTML = Math.round(this.pika.food).toString() + "xp";
        document.getElementsByTagName("sleep")[0].innerHTML = Math.round(this.pika.hygiene).toString() + "Zzz";
        document.getElementsByTagName("happiness")[0].innerHTML = Math.round(this.pika.happiness).toString() + ":)";
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = new Game();
});
var Idle = (function () {
    function Idle(j) {
        this.pika = j;
    }
    Idle.prototype.performBehavior = function () {
        this.pika.div.style.backgroundImage = "url('images/Pichu/idle.gif')";
    };
    Idle.prototype.onWash = function () {
        this.pika.behavior = new Wash(this.pika);
    };
    Idle.prototype.onPet = function () {
    };
    Idle.prototype.onEat = function () {
    };
    return Idle;
}());
var Pet = (function () {
    function Pet(p) {
        this.pika = p;
    }
    Pet.prototype.performBehavior = function () {
        this.pika.div.style.backgroundImage = "url('images/dead.png')";
    };
    Pet.prototype.onWash = function () {
    };
    Pet.prototype.onPet = function () {
    };
    Pet.prototype.onEat = function () {
    };
    return Pet;
}());
var Wash = (function () {
    function Wash(p) {
        this.pika = p;
    }
    Wash.prototype.performBehavior = function () {
        this.pika.div.style.backgroundImage = "url('images/washing.png')";
    };
    Wash.prototype.onWash = function () {
    };
    Wash.prototype.onPet = function () {
    };
    Wash.prototype.onEat = function () {
        this.pika.div.style.backgroundImage = "url('images/angry.png')";
    };
    return Wash;
}());
//# sourceMappingURL=main.js.map