## Pika

Pichu is een kleine pokémon die jij moet gaan trainen om een Raichu te worden. 

- Trainen: Hiermee krijgt pichu meer XP zodat hij kan evolven. Van het trainen wordt hij wel moe. 
- Aaien: Door met de muis op pichu te klikken geef je hem aandacht en wordt hij blij, anders rent hij bij je weg. 
- Slapen: Van al het trainen wordt Pichu moe. Na even slapen wilt hij weer trainen. Als je toch traint als pichu moe is wordt hij daar niet blij van. 

## UML

UML geeft de game weer zoals hij nu is. Hij is zo opgesteld dat er gemakkelijk nieuw behavior toegevoegd kan worden. 

![UML](https://github.com/UnicornInReverse/Pika/blob/master/docs/PokepetUML.png)

## Programmeer principes

Deelproduct

- Interface: behavior van Pichu, Observer en Subject
- Static Utility Method: SoundBuilder voor het makkelijk aanmaken van geluidjes
- Singleton: Game is een singleton zodat gameOver() makkelijk aangesproken kan worden
- Strategy: als pika peformBehavior aanroept wordt altijd het huidige gedrag uitgevoerd
- Composition: Game heeft een pika, pika heeft een behavior

Eindproduct

- Abstract class: Pokepet. Door deze class kunnen er in te toekomst meerdere pokémons toegevoegd worden
- State machine: Op basis van de staat van je pokepet (Pichu, Pikachu, Raichu) veranderen geluiden en sprites
- Library: HowlerJS
- Polymorphisme: bijv. o.notify() roept elke observer aan, maar er zijn verschillende observers

Installatie

- Clone repo
- Open Visual Studio Code/Webstorm/Iets wat daar op lijkt
- Run npm install Howler in je terminal
- Open index.html in je browser

Controls 

- UP - W
- DOWN - S
- LEFT - A
- RIGHT - D
- A-BUTTON - J
- B-BUTTON - K



