//True pour le joueur O et False pour le joueur X
var player = true;

// Passe a True si le jeu est termine
var finish = false;

var grid = [1,2,3,4,5,6,7,8,9];

function checkEndGame(){

}


function createImage(src, alt, id, name){
    var img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.id = id;
    img.className = name;
    return img;
}


function play(num){
    var elmt = document.getElementById(num);
    if(!elmt.hasChildNodes()){
        if(player){
            var img = createImage("images/O.png","O", "player1", "O");
            elmt.appendChild(img);
            var h2 = document.getElementById("player_turn");
            h2.innerHTML = "Here is your turn player X";
            player = !player;
        }
        else{
            var img = createImage("images/X.png","X", "player2", "X");
            elmt.appendChild(img);
            player = !player;
            var h2 = document.getElementById("player_turn");
            h2.innerHTML = "Here is your turn player O";
        }
        
    }
    
}


function resetGrid(){
    var elmt = document.getElementsByClassName("case");
}