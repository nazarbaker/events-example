(function() {
    'use strict';
    var input = document.getElementById('number');
    var addBut = document.getElementById('add');
    var subtractBut = document.getElementById('subtract');
    var resetBut = document.getElementById('reset');
    var select = document.getElementById('fruits');
    var removeBut = document.getElementById('remove');
    var inputText = document.getElementById('text');
    addBut.addEventListener("click", addFunction);
    subtractBut.addEventListener("click", subtractFunction);
    resetBut.addEventListener("click", resetFunction);
    input.addEventListener("focus", changeBg);
    input.addEventListener("keypress", keyPress);
    inputText.addEventListener("keyup", keyUp);
    select.addEventListener("change", selBg);
    removeBut.addEventListener("click", removeFunction);

    function addFunction() {
        input.value = +(input.value) + 1;
    }

    function subtractFunction() {
        input.value = +(input.value) - 1;
    }

    function resetFunction() {
        input.value = 1;
    }

    function changeBg() {
        input.style.backgroundColor = "red";
    }

    function keyPress() {
        alert("Only Mouse!");
        setTimeout(function() {
            resetFunction();
        }, 100);
    }

    function selBg() {
      console.log(select.selectedIndex);
        if (select.selectedIndex === 0) select.style.backgroundColor = "red";
        if (select.selectedIndex === 1) select.style.backgroundColor = "green";
        if (select.selectedIndex === 2) select.style.backgroundColor = "yellow";
    }

    function removeFunction() {
        addBut.removeEventListener("click", addFunction);
        subtractBut.removeEventListener("click", subtractFunction);
    }

    function keyUp() {
        if (inputText.value === "red") {
            document.body.style.backgroundColor = "red";
        } else if (inputText.value === "green") {
            document.body.style.backgroundColor = "green";
        } else {
            document.body.style.backgroundColor = "white";
        }
    }
})();
