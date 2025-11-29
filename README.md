# Dierenquiz Bordspel
## Overzicht
Een interactief online bordspel met Nederlandse dierenvragen, geïnspireerd door Outsmarted. Spelers gooien een dobbelsteen, bewegen over het bord en beantwoorden vragen over verschillende dierencategorieën.

## Functies
- Online Multiplayer: Speel met vrienden op verschillende apparaten via een 6-cijferige PIN-code
- Lokaal Spelen: 1-4 spelers op hetzelfde apparaat
- Virtueel speelbord met gekleurde categorie-vakjes
- Dobbelsteen met animatie
- 60 Nederlandse dierenvragen in 6 categorieën:
  -Zoogdieren (rood)
  - Vogels (blauw)
  - Vissen (turquoise)
  - Reptielen (paars)
  - Insecten (oranje)
  - Huisdieren (roze)
- Bonusvakjes voor extra punten
- Score tracking per speler
- Winnaar bepaling aan het einde

## Hoe te spelen
### Online Multiplayer (meerdere apparaten)
1. Host: Klik op "Nieuw Spel Maken", voer je naam in
2. Host: Deel de 6-cijferige PIN met je vrienden
3. Anderen: Klik op "Deelnemen met PIN", voer naam en PIN in
4. Host: Klik op "Start Spel" wanneer iedereen klaar is
5. Iedereen speelt op zijn eigen apparaat!

### Lokaal Spelen (1 apparaat)
1. Klik op "Lokaal Spelen (1 apparaat)"
2. Voer spelernamen in (minimaal 1, maximaal 4)
3. Klik op "Start Spel"
4. Geef het apparaat door aan de volgende speler

## Spelregels
1. Gooi de dobbelsteen om je pion te verplaatsen
2. Beantwoord de vraag van de categorie waar je landt
3. Goed antwoord = 1 punt (2 punten op bonusvakjes)
4. Eerste speler die 10 punten heeft, wint!

## Technische Structuur
server.py - Python Flask backend met WebSocket (Flask-SocketIO) voor real-time multiplayer
index.html - Hoofdpagina met spelstructuur en lobby
style.css - Styling voor bord, kaarten en animaties
script.js - Spellogica, vragen, game mechanics en WebSocket connectie

## Server Configuratie
Het spel draait op een Python Flask server met Flask-SocketIO voor real-time communicatie op poort 5000.
