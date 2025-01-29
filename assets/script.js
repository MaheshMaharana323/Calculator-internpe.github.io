const display = document.getElementById("display");   
const buttonIds = [
    "button-ac", "button-dc", "button-point", "button-div",
    "button-7", "button-8", "button-9", "button-mul",
    "button-4", "button-5", "button-6", "button-sub",
    "button-1", "button-2", "button-3", "button-add",
    "button-00", "button-0", "button-ans"
];

function displayButtons(value){
    const lastChar = display.value[display.value.length - 1];
    if(value==="="){
        display.value=eval(display.value);
    } else if(value==="AC"){
        display.value="";
    }else if(value==="DE"){
        display.value=display.value.slice(0,-1);
    }else {
        if (
            (value === "." || value === "+" || value === "-" || value === "*" || value === "/") &&
            (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" || lastChar === ".")
        ) {
            return; 
        }
        if (display.value === "" && (value === "+" || value === "*" || value === "/" || value === ".")) {
            return;
        }
        display.value +=value;
    }
};

buttonIds.forEach(id=>{
    const button = document.getElementById(id);
    button.addEventListener('click', () => displayButtons(button.value));
});



