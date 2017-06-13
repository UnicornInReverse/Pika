class Training implements Behavior, Observer {
    public pika: Pika;
    public controls: Controls;
    private Buttons: Array<Number>;
    private training: HTMLElement;
    private userButton: Number;
    private training_key: Number;
    private score: number;
    
    constructor(p: Pika, c: Controls) {
        this.pika = p;
        this.controls = c;

        this.Buttons = new Array(87, 83, 65, 68, 74, 75)

        this.training = document.createElement("countdown");
        let parent = document.getElementById("container");
        parent.appendChild(this.training);
        this.training.style.display = "block";
        
        setTimeout(() => {
            this.training.style.background = "none"; 
            this.onTraining();
        }, 2500);
    }

    public notify(b: Number): void {
        this.userButton = b;       
    }

    public performBehavior(): void {
        
    }

    public onPet() : void {
        
    }
    public onSleeping() : void {

    }
    public onTraining() : void {
        this.score = 0;
        var count = 0;

        this.pika.div.style.transform = "translate(200px, 40px)";
        this.pika.div.style.backgroundImage = "url('images/" + this.pika.cur_state + "/attack-1.gif')";

        this.controls.subscribe(this);
        this.createRandomButton();                  

         var trainInterval = setInterval(()=>{

            count++;
            this.checkTraining(count, trainInterval);

          }, this.pika.speed)
                           
    }

    private createRandomButton() {
        let number = Math.floor(Math.random()* 6);
        this.training_key = this.Buttons[number];

        this.training.style.background = "url('images/buttons/" + this.training_key + ".png')";
    }

    private checkTraining(count : number, trainInterval : any) {
        console.log(this.score)
        if(this.training_key == this.userButton) {
            this.score++;
            console.log('yea')
            SoundBuilder.SoundBuilder.getSoundOnce('right');
        } else {
            this.score--;
            console.log('noh')
            SoundBuilder.SoundBuilder.getSoundOnce('wrong');
        }  

        if(count > 9) {
            clearInterval(trainInterval);
            this.training.style.background = "none";
            this.pika.div.style.transform = "translate(282px, 140px)";
            this.controls.unsubscribe(this);
            this.pika.sleep += 10;
            this.pika.xp += this.score.valueOf();

            this.pika.behavior = new Idle(this.pika, this.controls);   
        } else {
            this.createRandomButton();
        }                   
    }  
}