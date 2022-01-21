const mytitle = document.getElementById("mytitle");
const myimage = document.getElementById("myimage");
const myinput = document.getElementById("myinput");

let lokaties = [
{
    "titel": "Gebouw",
    "image": "img/route/gebouw.png"
},
{
    "titel": "Lobby",
    "image": "img/route/lobby.png"
},
{
    "titel": "Boot-buiten",
    "image": "img/route/boot-buiten.png"
},
{
    "titel": "Deck",
    "image": "img/route/deck.png"
},
{
    "titel": "Mast",
    "image": "img/route/mast.png"
},
{
    "titel": "Kaas",
    "image": "img/route/kaas.png"
},
{
    "titel": "Kuiken",
    "image": "img/route/kuiken.png"
},
{
    "titel": "Bestek",
    "image": "img/route/bestek.png"
},
{
    "titel": "Eet-tafel",
    "image": "img/route/eet-tafel.png"
},
{
    "titel": "Bureau",
    "image": "img/route/bureu.png"
},
{
    "titel": "Bed",
    "image": "img/route/bed.png"
},
{
    "titel": "Dokter",
    "image": "img/route/dokter.png"
},
{
    "titel": "Storage",
    "image": "img/route/storage.png"
},
{
    "titel": "Wapens",
    "image": "img/route/wapens.png"
},
{
    "titel": "Storage 2",
    "image": "img/route/storage2.png"
},
{
    "titel": "Schilderij",
    "image": "img/route/schilderij.png"
},
{
    "titel": "Boot-binnen",
    "image": "img/route/boot-binnen.png"
},
];

//mytitle.innerHTML = 'dit is door script toegevoegd';

//myimage.src = "img/1.jpg"
var huidigeLokatie = 0;

function show(index) {
    mytitle.innerHTML = lokaties[index].titel;
    myimage.src = lokaties[index].image;
};

function getinput() {
    show(myinput.value);
    //console.log(myinput.value)
    myinput.value = "";
    myinput.focus();
};
