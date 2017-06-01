## pika

pika is een [tamagotchi](https://en.wikipedia.org/wiki/Tamagotchi) die je in leven zal moeten houden. Dit doe je door hem aandacht te geven, eten te geven en schoon te houden. Wanneer je je aandacht laat wegzakken en pika niet goed onderhoudt zal pika doodongelukkig worden en uiteindelijk dood gaan door een gebrek aan eten, aandacht of hygiene. Wat kan je doen om dit te voorkomen?

- Douchen. Hiervan wordt pika schoon en blij. 
- Eten. Hiervan wordt pika blij en minder hongerig.
- Aaien. Door met de muis op pika te klikken geef je hem aandacht en wordt hij blij. 
- Slapen. Als er een tijdje niks gebeurt valt pika in slaap. Daarvan wordt hij blij, maar als hij wakker is heeft hij wel honger.

## UML

UML geeft de game weer zoals hij nu is. Hij is zo opgesteld dat er gemakkelijk nieuw behavior toegevoegd kan worden. 

https://unicorninreverse.github.io/pika/pikaUML.png

## Programmeer principes

- Interface: behavior van pika
- Static Utility Method: nog niet geïmplementeerd, gaat een class worden die berekeningen doet van pika's status
- Singleton: nog niet geïmplementeerd, gaat gebruikt worden om de gameOver() aan te spreken
- Strategy: als pika peformBehavior aanroept wordt altijd het huidige gedrag uitgevoerd
- Composition: Game heeft een pika, pika heeft een behavior

