var myNumbers = {
    x: 0,
    y: 0,
    z: 0,
    
    askForThreeNumbers: function() {
        myNumbers.x = prompt("What is your 1st number?");
        myNumbers.y = prompt("What is your 2nd number?");
        myNumbers.z = prompt("What is your 3nd number?");
    },  
    addThreeNumbers: function() { 
        return myNumbers.x*1 + myNumbers.y*1 + myNumbers.z*1;
    },
    
    
    askForTwoNumbers: function() {
        myNumbers.x = prompt("What is your 1st number?");
        myNumbers.y = prompt("What is your 2nd number?");
    },
    
    addTwoNumbers: function() { 
        return myNumbers.x*1 + myNumbers.y*1;
    }
};

window.onload = function() {
    
    var link = document.getElementById("add");
    link.onclick = function() {
        myNumbers.askForThreeNumbers();
        var added = myNumbers.addThreeNumbers();
        document.getElementById("number").innerHTML = added;
    }
    
    var added2 = document.getElementById("add2");
    added2.onclick = function(){
        myNumbers.askForTwoNumbers();
        var added = myNumbers.addTwoNumbers();
        document.getElementById("number").innerHTML = added;
    
    }
    
}