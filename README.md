# PRG08-Week3-oefening2

## Jibby

Jibby is een [tamagotchi](https://en.wikipedia.org/wiki/Tamagotchi) die je in leven zal moeten houden. Dit doe je door hem aandacht te geven, eten te geven en schoon te houden. Wanneer je je aandacht laat wegzakken en Jibby niet goed onderhoudt zal Jibby doodongelukkig worden en uiteindelijk dood gaan door een gebrek aan eten, aandacht of hygiene. Wat kan je doen om dit te voorkomen?

- Douchen. Hiervan wordt jibby schoon en blij. 
- Eten. Hiervan wordt jibby blij en minder hongerig.
- Aaien. Door met de muis op Jibby te klikken geef je hem aandacht en wordt hij blij. 
- Slapen. Als er een tijdje niks gebeurt valt Jibby in slaap. Daarvan wordt hij blij, maar als hij wakker is heeft hij wel honger.

## Opdracht deel 1

- Gebruik het strategy pattern om het Idle en Dead gedrag te bouwen. Implementeer de bestaande interface.
- In de game loop roep je de update functie van jibby aan. Jibby roept daarna de update functie van zijn huidige gedrag aan.
- Het idle gedrag vermindert bij elke update de health, food en happyness waarden.
- Als een van die waarden te laag wordt kan je het texture van Jibby veranderen in hungry, dirty of angry.
- Als een van die waarden op 0 komt krijgt Jibby het 'Dead' gedrag. Bekijk de voorbeeldcode om te zien hoe je vanuit Idle naar een ander gedrag kan gaan.
- Als je dit gedeelte werkend hebt kan je verder met deel 2.

## Opdracht deel 2

- Maak de nieuwe gedragingen: Eating, Washing, Happy
- Voeg de methods `onEat()`, `onWash()` en `onPet()` toe aan de interface
- Implementeer die methods in de gedragingen Idle, Sleeping, Eating, Washing, Dead en Happy
- Zie het code voorbeeld voor het aanroepen van de functies nadat er geklikt is.
- Programmeer hoe Jibby op de drie knoppen reageert, maak dit afhankelijk van het huidige gedrag! Bijvoorbeeld: wat gebeurt er als je Jibby aait terwijl hij aan het eten is? Of als je hem onder de douche zet terwijl hij slaapt?

## Opdracht deel 3

Maak een nieuw gedrag `Sleeping`. Geef elk gedrag een timer waarde. In de update van elk gedrag verminder je die waarde. Als de timer op 0 staat verander je van gedrag. Zie de voorbeeldcode.

- Idle gaat naar Sleeping 
- Sleeping, Eating, Showering en Happy gaan naar Idle. 
- Dead reageert niet op de timer

## Nog meer gedrag?

- Kan je zelf een gedrag toevoegen?

## Inheritance of interface?

- Zou het handig zijn om met inheritance te werken voor het gedrag?

## Resultaat

![Jibby](jibbyresult.png?raw=true "Jibby")

[Speel de Jibby Game](https://hr-cmgt.github.io/PRG08-Week3-oefening2-completed/)

### Strategy Pattern

```
class Jibby {
    public behavior:Behavior;
    constructor(){
        this.behavior = new Sleeping(this);
    }
    public update(){
        this.behavior.update();
    }
}

class Sleeping implements Behavior {
    public jibby : Jibby;
    constructor(j:Jibby){
        this.jibby = j;
    }
    public update(){
        // hier het sleeping gedrag programmeren
    }
}

interface Behavior {
    jibby:Jibby;
    update() : void;
}
```

### Idle gedrag Voorbeeld

In dit voorbeeld zie je hoe 'Idle' telkens de happyness van Jibby verlaagt, en hoe je naar een ander gedrag kan springen.
```
public update(){
    this.jibby.happyness--;
    this.jibby.behavior = new Sleeping(this.jibby);
}
        
```

### Timer Voorbeeld

In dit voorbeeld zie je hoe een gedrag kan bijhouden hoe lang dat gedrag al duurt.
```
private timer:number = 100;
public update(){
    this.timer--;
    if(this.timer < 1){
        // iets doen als de tijd op is
    }
}
```

### Button Listeners 

In dit voorbeeld zie je hoe je het gedrag van de drie buttons ook in de strategy pattern kan plaatsen. De event listeners kunnen in de Jibby class blijven.

```
class Jibby {
    constructor(){
        washButton.addEventListener("click", (e:MouseEvent) => this.onWash(e));
    }

    private onWash(e:MouseEvent):void {
        this.behavior.onWash();
    }
}
```
### Afbeeldingen aanpassen

`this.jibby.div.style.backgroundImage = "url('idle.png')"`
