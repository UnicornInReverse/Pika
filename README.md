## Code review

Klassendiagram:
Klassendiagram klopt niet helemaal:
Onderaan heb je de interface Subject dat moet Observer zijn.
de interface behavior mist onTraining.
Bij Game is er iets niet helemaal te lezen.
Controls mist de action functie.
Idle mist first bij de vars en onSleeping() en onTrainging() bij de methods.
fled mist ook onSleeping() onTraining().
Training mist Score : number en checkTraining(),
Sleeping mist onSleeping() en onTraining().


Encapulation:
Is bijna overal te vinden namelijk elke functie of variabele is Public of Private

Composition (has a relatie): 
Terug gevonden bij bijvoorbeeld game die Pika en Controls heeft.

Inheritance (is a relatie):
Teruggevonden bij bijvoorbeeld idle wat een behavior is of Pika wat een PokePet is.

Singleton:
Singleton is te vinden aan het begin van de Game Class.

Stratagy:
Stratagy is terug gevonden bij Piki die de behaviors Sleeping Training idle en fled heeft.

Observer:
Observer is teruggevonden met controls als subject en alle behaviors als observers, die een "melding" krijgen als action wordt uitgevoerd. 

Interface:
Interfaces worden gebruikt bij Observer en Stratagy.

Static:
Static komt terug in singleton. 

Abstract:
Abstract class teruggevonden in de class Pokepet.

Namespaces:
Namespaces is teruggevonden in sound.ts bij de Soundbuilder class.

Polymorphism:
Polymorphism komt meerdere keren terug bijvoorbeeld bij de keyBoardEvents.

Enumerations:
Enumerations is terug gevonden in keys.ts als versimpeling van de toestscombies.

Game loop:
De Game loop is te vinden in Game.

Library:
De library die gebruikt is howler.

#conclusie

Je heb alles wat je moet hebben alleen klopt je UML nog niet helemaal verder is t helemaal mooi 👍🏽
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



