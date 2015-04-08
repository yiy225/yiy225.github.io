var myWord = {
    
    askForWords: function() {
        myWord.a = prompt("type a creature");
        myWord.b = prompt("type a color");
        myWord.c = prompt("type a thing");
        myWord.d = prompt("type a place");
        myWord.e = prompt("type an adjective");
    },
    
    addWords: function() {
        return "Mary had a little " + myWord.a + ", it`s fleece was " + myWord.b + " as " + myWord.c + ". It followed her to " + myWord.d + " one day and made the children " + myWord.e + "."
    },
};


window.onload = function() {
    
    var link = document.getElementById("word");
    link.onclick = function(){
        
        //myWord.a = prompt("type a creature");
        //myWord.b = prompt("type a color");
        //myWord.c = prompt("type a thing")
        //myWord.d = prompt("type a place");
        //myWord.e = prompt("type an adjective");
        myWord.askForWords();
        var added = myWord.addWords();
        document.getElementById("word").innerHTML = added;
    }
    
}