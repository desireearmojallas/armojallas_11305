var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var res = document.getElementById("result");

document.getElementById("add").addEventListener("click", function() {
res.value = parseInt(n1.value)+parseInt(n2.value);
});

document.getElementById("subtract").addEventListener("click", function() {
res.value = parseInt(n1.value)-parseInt(n2.value);
});

document.getElementById("multiply").addEventListener("click", function() {
res.value = parseInt(n1.value)*parseInt(n2.value);
});

document.getElementById("divide").addEventListener("click", function() {
res.value = parseInt(n1.value)/parseInt(n2.value);
});

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    }