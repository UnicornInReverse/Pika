class Dead implements Behavior {
    jibby: Jibby;
    
    constructor(j: Jibby) {
        this.jibby = j;
        this.performBehavior();
    }

    performBehavior(): void {
        this.jibby.div.style.backgroundImage = "url('images/dead.png')"
    }

    onWash(): void {

    }

    onPet(): void {

    }

    onEat(): void {
        
    }
    
}