class Idle implements Behavior {
    jibby: Jibby;
    
    constructor(j: Jibby) {
        this.jibby = j;
    }

    performBehavior(): void {
        // this.jibby.hygiene -= 0.01;
        // this.jibby.food -= 0.02;
        // this.jibby.happiness -= 0.015;
    }

    onWash(): void {
        this.jibby.behavior = new Wash(this.jibby);
    }

    onPet(): void {

    }

    onEat(): void {
        
    }
    
}