class Controls {
    private upButton: Element = document.getElementsByTagName("up-button")[0];
    private downButton: Element = document.getElementsByTagName("down-button")[0];
    private leftButton: Element = document.getElementsByTagName("left-button")[0];
    private rightButton: Element = document.getElementsByTagName("right-button")[0];
    private aButton: Element = document.getElementsByTagName("a-button")[0];
    private bButton: Element = document.getElementsByTagName("b-button")[0];
    
    constructor() {
        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e));
    }

    public onKeyDown(event: KeyboardEvent):void {
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

    }

    public onKeyUp(e) {
        var buttons = document.getElementsByClassName("button");
        var i = 0;

        while (i < 7) {
            buttons[i].classList.remove("active");
            i ++;
        }

    }

}