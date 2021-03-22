var numberOfPianoKeys = document.querySelectorAll(".keys").length;

for(i=0;i<numberOfPianoKeys;i++){
    document.querySelectorAll(".keys")[i].addEventListener("click", handleClick);

    function handleClick(){
        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);
    }
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "q":
            var c1 = new Audio("sounds/c1.aac");
            c1.play();
            break;

        case "w":
            var d1 = new Audio ("sounds/d1.aac");
            d1.play();
            break;

        case "e":
            var e1 = new Audio ("sounds/e1.aac");
            e1.play();
            break;

        case "r":
            var f1 = new Audio ("sounds/f1.aac");
            f1.play();
            break;
    
        case "t":
            var g1 = new Audio ("sounds/g1.aac");
            g1.play();
            break;

        case "y":
            var a1 = new Audio ("sounds/a1.aac");
            a1.play();
            break;

        case "u":
            var b1 = new Audio ("sounds/b1.aac");
            b1.play();
            break;

        case "i":
            var c2 = new Audio ("sounds/c2.aac");
            c2.play();
            break;

        case "o":
            var d2 = new Audio ("sounds/d2.aac");
            d2.play();
            break;

        case "p":
            var e2 = new Audio ("sounds/e2.aac");
            e2.play();
            break;

        case "a":
            var f2 = new Audio ("sounds/f2.aac");
            f2.play();
            break;

        case "s":
            var g2 = new Audio ("sounds/g2.aac");
            g2.play();
            break;

        case "d":
            var a2 = new Audio ("sounds/a2.aac");
            a2.play();
            break;

        case "f":
            var b2 = new Audio ("sounds/b2.aac");
            b2.play();
            break;

        case "g":
            var c3 = new Audio ("sounds/cHash1.aac");
            c3.play();
            break;

        case "h":
            var d3 = new Audio ("sounds/dHash1.aac");
            d3.play();
            break;

        case "j":
            var e3 = new Audio ("sounds/fHash1.aac");
            e3.play();
            break;

        case "k":
            var f3 = new Audio ("sounds/gHash1.aac");
            f3.play();
            break;

        case "l":
            var g3 = new Audio ("sounds/aHash1.aac");
            g3.play();
            break;

        case "z":
            var a3 = new Audio ("sounds/cHash2.aac");
            a3.play();
            break;

        case "x":
            var b3 = new Audio ("sounds/dHash2.aac");
            b3.play();
            break;

        case "c":
            var cHash1 = new Audio ("sounds/fHash2.aac");
            cHash1.play();
            break;

        case "v":
            var dHash1 = new Audio ("sounds/gHash2.aac");
            dHash1.play();
            break;

        case "b":
            var fHash1 = new Audio ("sounds/aHash2.aac");
            fHash1.play();
            break;

        default: console.log(buttonInnerHtml);
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton =document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
}
