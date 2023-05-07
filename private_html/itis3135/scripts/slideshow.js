let currentSlide = 1
function displaySlide(slideNum){
    var page = document.getElementById(slideNum);
    for(let i = 1; i < 8; i++){
        (document.getElementById(i)).style.display = "none";
    }
    currentSlide = slideNum;
    page.style.display = "block";
}
function displayNext(){
    if(currentSlide<=6){
        (document.getElementById(currentSlide)).style.display = "none";
        currentSlide++;
        (document.getElementById(currentSlide)).style.display = "block";
    }
}
function displayLast(){
    if(currentSlide>=2){
        (document.getElementById(currentSlide)).style.display = "none";
        currentSlide--;
        (document.getElementById(currentSlide)).style.display = "block";
    }
}
function hideAll(){
    for(let i = 1; i < 8; i++){
        (document.getElementById(i)).style.display = "none";
    }
    (document.getElementById(1)).style.display = "block";
}