class Pika {

    public xp:number;
    public sleep:number;
    public happiness:number;

    public div:HTMLElement;
    public x:number;
    public y:number;

    public state: String;
    public speed: number;

    private _behavior:Behavior;

    public get behavior():Behavior {
        return this._behavior
    }

    public set behavior(b : Behavior) {
        this._behavior = b;
    }
          
    constructor(parent:HTMLElement, c:Controls) {
        this.div = document.createElement("pika");
        this.state = "Pichu";
        parent.appendChild(this.div);

        // start instellingen
        this.x = 0;
        this.y = 220;
        this.xp = 5;
        this.sleep = 0;
        this.happiness = 30;

        this.behavior = new Idle(this, c);
    }

    public update():void {
        if(this.sleep < 0) {
            this.sleep = 0;
        }

        if(this.happiness < 10) {
            this.behavior = new Fled(this);
        }   

        if(this.xp > 1 && this.xp < 19) {
            this.state = "Pichu";
            this.speed = 2500;
        } else if (this.xp > 100) {
            Game.getInstance().gameOver(true);
        } else if (this.xp > 19 && this.xp < 39) {
            this.state = "Pikachu"
            this.speed = 800
        } else if(this.xp > 49) {
            this.state = "Raichu"
            this.speed = 600;
        } else if (this.xp < 1) {
            this.behavior = new Fled(this)
        }

        if(this.happiness > 100) {
            this.happiness = 100;
        }

        this.behavior.performBehavior();        
    }
}
