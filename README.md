Her er svar til opgaven movie-app-del 2 og til del 3

Del 1
1a.
Hvor mange <article class="movie-card"> elementer har du? 8
Hvilket element indeholder alle movie cards? section
Hvilke CSS klasser bliver brugt? filterbar, movie-card, movie-poster, movie-info, movie-year, movie-genre, movie-rating, movie-director, dialog-details, movie-description

1b.
Hver movie card består af:
En container: <article class="movie-card">
Et billede: <img class="movie-poster">
En info sektion: <div class="movie-info">
Titel + år: <h3> med <span class="movie-year">
Genre: <p class="movie-genre">
Rating: <p class="movie-rating">
Instruktør: <p class="movie-director">

2b.
Resize dit browser vindue - hvordan opfører movie cards sig? de tilpasser sig skærmens størrelse 
Er der spacing mellem cards? nej
Hvor bred er hver card? de tilpasser sig til skærmen 

Del 2
4a. Forstå fr enheden
1fr = 1 fraction (andel) af tilgængeligt plads
1fr 1fr = 2 lige store kolonner
1fr 2fr = Første kolonne 1/3, anden kolonne 2/3
Dette bruges til at lave kolonner på siden / man kan få ting til at stå ved siden af hinanden 

Del 3 - trin 7
Fordele	Ulemper
Faste breakpoints	Præcis kontrol, forudsigelig, lettere at debugge	Flere kodelinjer, skal vedligeholdes
Auto-fit	Mindre kode, fleksibel, tilpasser sig automatisk	Mindre kontrol, kan give uventede resultater

Dette er det sammen som ovenover:

Brug faste breakpoints når:

Du vil have specifik kontrol over layout
Design kræver præcise antal kolonner
Du skal matche et design system

Brug auto-fit når:

Du vil have maksimal fleksibilitet
Du har meget dynamisk content
Du vil minimere vedligeholdelse

Del 4

Trin 10 - godt at vide om billeders størrelse 
/* Forskellige object-fit værdier */
object-fit: cover; /* Fylder hele området, kan croppe kanter */
object-fit: contain; /* Viser hele billedet, kan efterlade whitespace */
object-fit: fill; /* Strækker til at fylde (forvrænger billedet!) */
object-fit: scale-down; /* Som contain, men aldrig større end original */

cover: Fylder hele containeren, cropper top/bund hvis nødvendigt ✅ (Vores valg!)
contain: Viser hele plakaten, men med whitespace på siderne ❌
fill: Strækker plakaten så den bliver bred og flad ❌❌

✅ Fylder hele card området - ingen whitespace
✅ Bevarer billedproportioner - ingen forvrængning
✅ Konsistent visuelt udtryk - alle cards ser ens ud
✅ Professionelt look - som Netflix, IMDb, osv.






