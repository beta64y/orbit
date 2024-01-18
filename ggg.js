var input = document.getElementById("Input");
function colored(color) {
    input.style.borderColor = color;
};


function handleInput() {
    if (input.value !== "") {
        colored("green");
    } else {
        colored("red");
    }
};

input.addEventListener("input" , handleInput);
