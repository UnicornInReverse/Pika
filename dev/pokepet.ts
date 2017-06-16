abstract class Pokepet {
    public xp:number;
    public sleep:number;
    public happiness:number;

    public div:HTMLElement;

    public states: Array<String>;
    public speed: number;
    public cur_state: String;

    public _behavior:Behavior;

    public get behavior():Behavior {
        return this._behavior
    }

    public set behavior(b : Behavior) {
        this._behavior = b;
    }

    public update():void {
            if(this.sleep < 0) {
                this.sleep = 0;
            } 

            if(this.xp > 1 && this.xp < 19) {
                this.cur_state = this.states[0];
                this.speed = 2500;
            }
            else if (this.xp > 19 && this.xp < 39) {
                this.cur_state = this.states[1]
                this.speed = 800
            } else if(this.xp > 49) {
                this.cur_state = this.states[2]
                this.speed = 600;

            if(this.happiness > 100) {
                this.happiness = 100;
            }

            if(this.happiness < 0 ) {
                this.happiness = 0;
            }
        }
        this.behavior.performBehavior();        
    }
}