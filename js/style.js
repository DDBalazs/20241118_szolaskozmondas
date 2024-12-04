//Random idézet generálása

//random elem kiválasztása
const tomb = [
    'Ha adnak, vedd el, ha ütnek, szaladj el.',
    'Amilyen az adjonisten, olyan a fogadjisten.',
    'Ajándék lónak ne nézd a fogát.',
    'Nem mindig az arat, aki vet.',
    'Nem babra megy a játék.',
    'Mindenkit érhet baleset.',
    'A betyárból lesz a legjobb pandúr.',
    'Bor be, ész ki.',
    'Borsot tör valakinek az orra alá.',
    'Nem egy nap alatt épült Buda vára.',
    'Egyszer volt Budán kutyavásár.',
    'A cél szentesíti az eszközt.',
    'A dió törve, az asszony verve jó.',
    'Dróton rángat valakit.',
    'Mint derült égből a villámcsapás.',
    'Ahány ember, annyi vélemény.',
    'Ember tervez, Isten végez.',
    'Többet ésszel, mint erővel.',
    'Egy fecske nem csinál nyarat.',
    'Hadd hulljon a férgese.'
]
var random = Math.floor(Math.random()*tomb.length);
document.getElementById('randomidezet').innerHTML = tomb[random];

function reset(){
    random = Math.floor(Math.random()*tomb.length);
    document.getElementById('randomidezet').innerHTML = tomb[random];
}
function ilikeit(){
    document.getElementById('randomidezet').innerHTML = '❤ '+tomb[random]
}

//Lottó szelvény