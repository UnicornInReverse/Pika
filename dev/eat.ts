class Eat implements Behavior {
    jibby: Jibby;
    
    constructor(j: Jibby) {
        this.jibby = j;
    }

    performBehavior(): void {
        this.jibby.div.style.backgroundImage = "url('images/dead.png')"
    }

    onWash(): void {

    }

    onEat(): void {

    }

    onPet(): void {
        
    }
    
}