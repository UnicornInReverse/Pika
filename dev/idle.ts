class Idle implements Behavior {
    jibby: Jibby;
    
    constructor(j: Jibby) {
        this.jibby = j;
    }

    performBehavior(): void {
        // this.jibby.hygiene -= 0.01;
        // this.jibby.food -= 0.02;
        // this.jibby.happiness -= 0.015;

        if(this.jibby.hygiene < 20) {
            this.jibby.div.style.backgroundImage = "url('images/dirty.png')"
        }

        if(this.jibby.food < 30) {
            this.jibby.div.style.backgroundImage = "url('images/hungry.png')"
        }

        if(this.jibby.happiness < 10) {
            this.jibby.div.style.backgroundImage = "url('images/sad.png')"
        }

        if(this.jibby.hygiene < 0 || this.jibby.food < 0 || this.jibby.happiness < 0) {
            this.jibby.behavior = new Dead(this.jibby);
        }

        
    }

    onWash(): void {
        this.jibby.behavior = new Wash(this.jibby);
    }

    onPet(): void {

    }

    onEat(): void {
        
    }
    
}