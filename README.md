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

# Peer review Robin week 7

## Toepassingen

- Klassendiagram: In je UML zijn een paar onderdelen minder goed zichtbaar. Er staan wat lege plusjes en minnetjes in. Je hebt 2x een Subject in je UML staan en geen Observer. 1 Daarvan moet Observer zijn. In je Subject rechtsboven staat niet of die functies public, private of protected zijn.
- Speelbare game met begin en eind: Game is speelbaar met een einde (XP of als je doodgaat).
- Library: HowlerJS gebruikt.
- Encapsulation: Encapsulation is op een goede manier gebruikt.
- Composition: Composition is juist toegepast in de code.
- Inheritance: Pika is een Pokepet. Overerving is goed gebruikt.
- Singleton: Singleton wordt juist gemaakt in game.ts en gebruikt in idle.ts.
- Observer: Observer is juist gebruikt met Observer + Subject en de functies die erbij horen.
- Strategy: Strategy Pattern is juist gebruikt. Een gedrag wordt de hele tijd uitgevoerd tenzij je op een andere knop drukt.
- Interface: Interface is goed geimplementeerd
- Static: Static wordt op een goede manier gebruikt in sound.ts.
- Abstract: Abstracte class is gebruikt in pokepet.ts. 
- Namespaces: Namespaces wordt bij 1 class gebruikt (sound.ts). Met namespaces kan je verschillende classes met dezelfde naam een aparte namespace meegeven. Voor 1 class heeft het niet heel veel zin.
- Polymorphisme: Zoals je al zei roept o.notify() elke observer aan.
- Enumerations: Enumerations is goed gebruikt in keys.ts.
- Game Loop: GameLoop zit in game.ts

## Feedback

- Je code ziet er overzichtelijk uit hoe het er nu staat. De game werkt ook goed.
- Als je code schrijft is het handig als je commentaar schrijft bij je code. Als je je code over een lange tijd weer gaat bekijken weet je zo waar het over gaat. Ook anderen weten gelijk wat alle code betekent.
- Zonder uitleg was het niet zo duidelijk hoe de game precies werkte. Na je uitleg was het goed te volgen.
- Laat mensen niet zo stressen met het indrukken van de toetsen ;)

Project is een voldoende!