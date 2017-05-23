var Dead = (function () {
    function Dead(j) {
        this.jibby = j;
        this.performBehavior();
    }
    Dead.prototype.performBehavior = function () {
        this.jibby.div.style.backgroundImage = "url('images/dead.png')";
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
    function Eat(j) {
        this.jibby = j;
    }
    Eat.prototype.performBehavior = function () {
        this.jibby.div.style.backgroundImage = "url('images/dead.png')";
    };
    Eat.prototype.onWash = function () {
    };
    Eat.prototype.onEat = function () {
    };
    Eat.prototype.onPet = function () {
    };
    return Eat;
}());
var Jibby = (function () {
    function Jibby(parent) {
        var _this = this;
        this.div = document.createElement("jibby");
        parent.appendChild(this.div);
        this.x = 0;
        this.y = 220;
        this.hygiene = this.food = this.happiness = 50;
        this.div.addEventListener("click", function () { return _this.onPet(); });
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", function () { return _this.onEat(); });
        document.getElementsByTagName("washbutton")[0].addEventListener("click", function () { return _this.onWash(); });
        this.behavior = new Idle(this);
        this.div.style.backgroundImage = "url('images/idle.png')";
    }
    Object.defineProperty(Jibby.prototype, "behavior", {
        get: function () {
            return this._behavior;
        },
        set: function (b) {
            this._behavior = b;
        },
        enumerable: true,
        configurable: true
    });
    Jibby.prototype.update = function () {
        this.behavior.performBehavior();
        this.hygiene -= 0.01;
        this.food -= 0.02;
        this.happiness -= 0.015;
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
    Jibby.prototype.onPet = function () {
        console.log("you clicked on jibby!");
        this.div.style.backgroundImage = "url('images/happy.png')";
    };
    Jibby.prototype.onWash = function () {
        console.log("washing jibby!");
        this.behavior.onWash();
    };
    Jibby.prototype.onEat = function () {
        console.log("jibby is eating!");
        this.behavior.onEat;
    };
    return Jibby;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        var container = document.getElementById("container");
        this.jibby = new Jibby(container);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.jibby.update();
        this.updateUI();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.updateUI = function () {
        document.getElementsByTagName("food")[0].innerHTML = Math.round(this.jibby.food).toString();
        document.getElementsByTagName("happyness")[0].innerHTML = Math.round(this.jibby.happiness).toString();
        document.getElementsByTagName("hygiene")[0].innerHTML = Math.round(this.jibby.hygiene).toString();
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = new Game();
});
var Idle = (function () {
    function Idle(j) {
        this.jibby = j;
    }
    Idle.prototype.performBehavior = function () {
    };
    Idle.prototype.onWash = function () {
        this.jibby.behavior = new Wash(this.jibby);
    };
    Idle.prototype.onPet = function () {
    };
    Idle.prototype.onEat = function () {
    };
    return Idle;
}());
var Pet = (function () {
    function Pet(j) {
        this.jibby = j;
    }
    Pet.prototype.performBehavior = function () {
        this.jibby.div.style.backgroundImage = "url('images/dead.png')";
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
    function Wash(j) {
        this.jibby = j;
    }
    Wash.prototype.performBehavior = function () {
        this.jibby.div.style.backgroundImage = "url('images/washing.png')";
    };
    Wash.prototype.onWash = function () {
    };
    Wash.prototype.onPet = function () {
    };
    Wash.prototype.onEat = function () {
        this.jibby.div.style.backgroundImage = "url('images/angry.png')";
    };
    return Wash;
}());
//# sourceMappingURL=main.js.map