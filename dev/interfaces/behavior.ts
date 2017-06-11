interface Behavior {
    pika:Pika;
    controls: Controls;
    performBehavior() : void;

    onPet() : void;
    onSleeping() : void;
    onTraining(b: Number) : void;
}
