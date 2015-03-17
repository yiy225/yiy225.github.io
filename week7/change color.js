var name = prompt("what is your name?")

document.getElementById("xholder").innerHTML = name;

var color = prompt("what is your favorite color?");

if (color == "red") {
    color= "green";
}

document.getElementById("yholder").innerHTML = color;

document.getElementById("yholder").style.color = color;
xholder.style.color=color;