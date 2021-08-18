# Redux tutorial
Prosta aplikacja napisana w TS wykorzystująca biblioteki z rodziny Redux. Jej przeznaczeniem jest zapoznanie programisty z wymienioną technologią oraz innymi składającymi się na ekosystem Reakta, a także z przyjętymi przez autora wzorcami projektowymi.
## Działanie aplikacji
Na program składa się interfejs z trzema odróżnialnymi wizualnie modułami. Górna belka z przyciskami umożliwia podgląd w konsoli przeglądarki zapamiętanego stosu danych oraz jego wyczyszczenie. Poniżej znajduje się lista filmów, uzupełniana przy każdym odświeżeniu witryny po 5 sekundach do trzech podejść. Ponadto, również przy każdym przeładowaniu, po odstępie 8 sekund do listy dodawana jest ciekawostka na temat losowej liczby pobrana z zewnętrznego API. Każdy element listy można usunąć klikając weń dwukrotnie. Na samym dole znajduje się input typu tekstowego oraz drugi panel z przyciskami - odpowiednio do czyszczenia listy, dodawania do niej wpisanego tytułu oraz jego usunięcia.
## Instalacja i uruchomienie
Projekt jest do pobrania lub sklonowania z GitHub'a. Celem włączenia aplikacji należy wykonać po sobie następujące czynności:
1. Wpisać w terminalu i wykonać komendę `npm install`.
2. Wpisać w terminalu i wykonać komendę `npm start` do uruchomienia w trybie deweloperskim.  
**LUB**
3. Wpisać w terminalu i wykonać komendę `npm run build` do zbudowania produkcyjnej wersji.
4. Uruchomić plik `index.html` z katalogu `build` w dowolnej przeglądarce.