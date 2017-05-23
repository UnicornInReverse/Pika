class Jibby {

    public hygiene:number;
    public food:number;
    public happiness:number;

    public div:HTMLElement;
    public x:number;
    public y:number;

    private _behavior:Behavior;

    public get behavior():Behavior {
        return this._behavior
    }

    public set behavior(b : Behavior) {
        this._behavior = b;
    }
          
    constructor(parent:HTMLElement) {
        this.div = document.createElement("jibby");
        parent.appendChild(this.div);

        // start instellingen
        this.x = 0;
        this.y = 220;
        this.hygiene = this.food = this.happiness = 50;

        // click listeners
        this.div.addEventListener("click", () => this.onPet());
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", () => this.onEat());
        document.getElementsByTagName("washbutton")[0].addEventListener("click", () => this.onWash());

        // hier het gedrag toekennen
        // this.behavior = ...
        this.behavior = new Idle(this);
        
        // afbeelding voor idle - verplaatsen naar idle gedrag
        this.div.style.backgroundImage = "url('images/idle.png')";
    }

    public update():void {
        // hier het gedrag updaten
        this.behavior.performBehavior();      

        this.hygiene -= 0.01;
        this.food -= 0.02;
        this.happiness -= 0.015;       
    }

    private onPet():void {
        console.log("you clicked on jibby!");
        this.div.style.backgroundImage = "url('images/happy.png')"
        // hier moet je de onPet functie van het gedrag aanroepen
    }

    private onWash():void {
        console.log("washing jibby!");        
        // hier moet je de onWash functie van het gedrag aanroepen
        this.behavior.onWash();
    }

    private onEat():void {
        console.log("jibby is eating!");
        // hier moet je de onEat functie van het gedrag aanroepen
        this.behavior.onEat;
    }


}
