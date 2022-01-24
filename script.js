const mytitle = document.getElementById("mytitle");
const myimage = document.getElementById("myimage");
const myinput = document.getElementById("myinput");

let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "zuid":  document.getElementById('knopZuid'),
    "west": document.getElementById('knopWest')
}

let current_index = 0;

let lokaties =[ // array
    { // 0 = object
        "titel":"plaats 0",
        "image":"img/route/gebouw.png",
        "directions": {
            "noord": 1
        }
    },
    {  //1 = object 
        "titel":"plaats 1",
        "image":"img/route/lobby.png",
        "directions": { // object
            "zuid": 0,
            "west": 2,
            "noord": 5,
            "oost": 9
        }

    },
    {   //2 = object
        "titel":"plaats 2",
        "image":"img/route/boot-buiten.png",
        "directions": { // object
            "oost": 1,
            "noord": 3
        }
    },
    {   //3 = object
        "titel":"plaats 3",
        "image":"img/route/mast.png",
        "directions": { // object
            "zuid": 2,
            "noord": 4,
            
        }
    },
    {   //4 = object
        "titel":"plaats 4",
        "image":"img/route/dek.png",
        "directions": { // object
            "zuid":3
        }
    },

    {   //5 = object
        "titel":"plaats 5",
        "image":"img/route/storage.png",
        "directions": { // object
            "zuid": 1,
            "west": 6,
            "oost": 7
        }
    },


    {   //6 = object
        "titel":"plaats 6",
        "image":"img/route/storage2.png",
        "directions": { // object
            "west": 5,
            "oost":13
        }
    },
    {
        "titel":"plaats 7",
        "image":"img/route/wapens.png",
        "directions": { // object
            "oost": 5,
            "west": 8
        }
    },

    {
        "titel":"plaats 8",
        "image":"img/route/schilderij.png",
        "directions": { // object
            "oost": 7
        }
    },
    {
        "titel":"plaats 9",
        "image":"img/9.jpg",
        "directions": { // object
            "west": 1,
            "oost": 10,
            "zuid": 11,
            "noord": 15
        }
    },
    {
        "titel":"plaats 10",
        "image":"img/route/boot-binnen.png",
        "directions": { // object
            "west": 9,
            
        }
    },
    {
        "titel":"plaats 11",
        "image":"img/route/bureu.png",
        "directions": { // object
            "zuid": 12,
            "noord": 9
        }
    },
    {
        "titel":"plaats 12",
        "image":"img/route/bed.png",
        "directions": { // object
            "zuid": 14,
            "noord": 11
        }
    },
    {
        "titel":"plaats 13",
        "image":"img/route/kuiken.png",
        "directions": { // object
            "west": 6,
        }
    },
    {
        "titel":"plaats 14",
        "image":"img/route/dokter.png",
        "directions": { // object
            "noord": 12
        }
    },
    {
        "titel":"plaats 15",
        "image":"img/route/eet-tafel.png",
        "directions": { // object
            "west": 16,
            "oost": 17,
            "zuid": 9
        }
    },
    {
        "titel":"plaats 16",
        "image":"img/route/bestek.png",
        "directions": { // object
            "oost": 15
        }
    },
    {
        "titel":"plaats 17",
        "image":"img/route/kuiken.png",
        "directions": { // object
            "west": 12
        }
    }


]



//mytitle.innerHTML = "dit is gevoegd door java";
//myimage.src = "img/1.jpg";

function show(index){
    mytitle.innerHTML = lokaties[index].titel;
    myimage.src = lokaties[index].image;
    current_index = index;

    //knoppen opnieuw berekenen
    updateDirections();
}

function updateDirections(){

    let possible = lokaties[current_index].directions;

    let possible_keys = Object.keys(possible);

    console.log(possible);
    console.log(possible_keys);

    let button_keys = Object.keys(directionButtons);
    console.log(button_keys);

    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }

    for(const key of possible_keys){
        directionButtons[key].style.visibility = 'visible';
    }

}

function getinput(){
    show(myinput.value);
    //console.log(myinput.value)
    myinput.value = "";
    myinput.focus();
}

function goDirection(direction){
    let punt_index = lokaties[current_index].directions[direction];
    show(punt_index)
}

show(0)