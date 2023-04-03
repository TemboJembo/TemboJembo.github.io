function validateEntry(check){
    if(check<1 || check>10){
        return false;
    }
    else{
        return true;
    }
}
function getShape(mayhaps){
    let entry
    if(mayhaps){
        entry = (Math.floor(Math.abs(prompt("The Terrifying Babboon wants a number"))));
    }
    else{
        entry = (Math.floor(Math.abs(prompt("The Terrifying Babboon wants a number, the last one was bad"))));
    }
    if(validateEntry(entry)){
        let shape;
        if(entry == 1){
            shape = "monogon";
        }
        if(entry == 2){
            shape = "bigon";
        }
        if(entry == 3){
            shape = "triangle";
        }
        if(entry == 4){
            shape = "quadrilateral";
        }
        if(entry == 5){
            shape = "pentagon";
        }
        if(entry == 6){
            shape = "hexagon";
        }
        if(entry == 7){
            shape = "septagon";
        }
        if(entry == 8){
            shape = "octagon";
        }
        if(entry == 9){
            shape = "nonagon";
        }
        if(entry == 10){
            shape = "decagon";
        }
        document.getElementById("output").innerHTML = "Your input was " + entry + " meaning your shape is " + shape;
    }
    else{
        getShape(false)
    }

}
window.onload(getShape(true));