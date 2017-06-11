class Controls implements Subject{
    private button87: Element = document.getElementsByTagName("up-button")[0];
    private button83: Element = document.getElementsByTagName("down-button")[0];
    private button65: Element = document.getElementsByTagName("left-button")[0];
    private button68: Element = document.getElementsByTagName("right-button")[0];
    private button74: Element = document.getElementsByTagName("a-button")[0];
    private button75: Element = document.getElementsByTagName("b-button")[0];
   
    public observers:Array<Observer>;
    
    constructor() {
        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e));
        this.observers = new Array();
    }

    subscribe(o:Observer):void {
        this.observers.push(o);
    }

    unsubscribe(o:Observer) {
        this.observers.splice(0, 1);
    }

    public onKeyDown(event: KeyboardEvent):void {
        let button = "button" + event.keyCode;

        if(this[button] == undefined) {
        } else {
             this[button].classList.add("active");
             this.action(event.keyCode);
        }
    }

   private action(b: Number) {
        this.observers.forEach(function(o) {
            o.notify(b);
        });
    }

    public onKeyUp(event: KeyboardEvent) {
        let button = "button" + event.keyCode;
        if(this[button] == undefined) {

        } else {
            this[button].classList.remove("active");    
        }
    }
}