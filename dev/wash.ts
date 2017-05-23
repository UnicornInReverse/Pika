class Wash implements Behavior {
    jibby: Jibby;
    
    constructor(j: Jibby) {
        this.jibby = j;
    }s

    performBehavior(): void {
        this.jibby.div.style.backgroundImage = "url('images/washing.png')"
    }

    onWash(): void {

    }

    onPet(): void {

    }

    onEat(): void {
        this.jibby.div.style.backgroundImage = "url('images/angry.png')"        
    }
    
}