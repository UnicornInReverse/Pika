## Jibby

Jibby is een [tamagotchi](https://en.wikipedia.org/wiki/Tamagotchi) die je in leven zal moeten houden. Dit doe je door hem aandacht te geven, eten te geven en schoon te houden. Wanneer je je aandacht laat wegzakken en Jibby niet goed onderhoudt zal Jibby doodongelukkig worden en uiteindelijk dood gaan door een gebrek aan eten, aandacht of hygiene. Wat kan je doen om dit te voorkomen?

- Douchen. Hiervan wordt jibby schoon en blij. 
- Eten. Hiervan wordt jibby blij en minder hongerig.
- Aaien. Door met de muis op Jibby te klikken geef je hem aandacht en wordt hij blij. 
- Slapen. Als er een tijdje niks gebeurt valt Jibby in slaap. Daarvan wordt hij blij, maar als hij wakker is heeft hij wel honger.

## UML

UML geeft de game weer zoals hij nu is. Hij is zo opgesteld dat er gemakkelijk nieuw behavior toegevoegd kan worden. 

https://unicorninreverse.github.io/Jibby/JibbyUML.png

## Programmeer principes

- Interface: behavior van Jibby
- Static Utility Method: nog niet geïmplementeerd, gaat een class worden die berekeningen doet van Jibby's status
- Singleton: nog niet geïmplementeerd, gaat gebruikt worden om de gameOver() aan te spreken
- Strategy: als Jibby peformBehavior aanroept wordt altijd het huidige gedrag uitgevoerd
- Composition: Game heeft een Jibby, Jibby heeft een behavior

