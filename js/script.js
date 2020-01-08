






$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

let user = "x"; 
let currentPlayer = "O";
let totalturns = 0; 
let game = false;
function performLogic(buttonId, tileId){
    $(buttonId).hide();
    totalturns = totalturns + 1;
    
if (totalturns === 9){
$("#title").text("You have a tie!")
}
    console.log(totalturns);
    if (currentPlayer === "o"){
        currentPlayer = "x";
    }else{
        currentPlayer ="o";
    }
    $(tileId).text(currentPlayer);


}