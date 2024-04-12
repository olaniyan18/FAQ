var svgq1 = document.querySelector(".svgq1");
var svgq2 = document.querySelector(".svgq2");
var svgq3 = document.querySelector(".svgq3");
var svgq4 = document.querySelector(".svgq4");

var svgq11 = document.querySelector(".svgq-1");
var svgq22 = document.querySelector(".svgq-2");
var svgq33 = document.querySelector(".svgq-3");
var svgq44 = document.querySelector(".svgq-4");

svgq1.addEventListener("click", function(){

    document.querySelector(".questionpara1").innerHTML = "Frontend Mentor offers realistic coding challenges to help developers improve thier frontend skills"+
    " with projects in HTML, CSS and Javascript. It is suitable for all levels and ideal for portfolio building.";

    document.getElementById("svgq1").style.visibility = "hidden";
    document.getElementById("svgq-1").style.visibility = "visible";


});


svgq11.addEventListener("click", function(){
    

    document.querySelector(".questionpara1").innerHTML = " ";

    document.getElementById("svgq-1").style.visibility = "hidden";
    document.getElementById("svgq1").style.visibility = "visible";

});


svgq2.addEventListener("click", function(){

    document.querySelector(".questionpara2").innerHTML = "Yes, Frontend Mentor is free!";

    document.getElementById("svgq2").style.visibility = "hidden";
    document.getElementById("svgq-2").style.visibility = "visible";


});


svgq22.addEventListener("click", function(){
    

    document.querySelector(".questionpara2").innerHTML = " ";

    document.getElementById("svgq-2").style.visibility = "hidden";
    document.getElementById("svgq2").style.visibility = "visible";

});


svgq3.addEventListener("click", function(){

    document.querySelector(".questionpara3").innerHTML = "Yes, you can!.";

    document.getElementById("svgq3").style.visibility = "hidden";
    document.getElementById("svgq-3").style.visibility = "visible";


});


svgq33.addEventListener("click", function(){
    

    document.querySelector(".questionpara3").innerHTML = " ";

    document.getElementById("svgq-3").style.visibility = "hidden";
    document.getElementById("svgq3").style.visibility = "visible";

});

svgq4.addEventListener("click", function(){

    document.querySelector(".questionpara4").innerHTML = "By checking our discord community.";

    document.getElementById("svgq4").style.visibility = "hidden";
    document.getElementById("svgq-4").style.visibility = "visible";


});


svgq44.addEventListener("click", function(){
    

    document.querySelector(".questionpara4").innerHTML = " ";

    document.getElementById("svgq-4").style.visibility = "hidden";
    document.getElementById("svgq4").style.visibility = "visible";

});


