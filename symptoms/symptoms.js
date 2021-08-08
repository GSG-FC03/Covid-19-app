//dark mode 
var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if ( document.body.classList.contains("dark-mode")) {
        icon.src="../assets/sun.svg";

    }else{
        icon.src="../assets/dark-mode.png";
    }
}
document.getElementById("button").onclick = function () {
    location.href = "../advice/advice.html";

}
document.getElementById("back").onclick = function () {
    location.href = "../covid-vaccine-tracker/covid-vaccine-tracker.html";}