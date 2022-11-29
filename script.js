let currNum = "";
let prevNum = "";
let finalOperator = "";
let calculatorScreen = document.querySelector('.calc-screen');
let numberButton = document.querySelectorAll('.num-btn');
let operations = document.querySelectorAll('.op-btn');
let clearBtn = document.querySelector('.clear-btn');
let backBtn = document.querySelector('.back-btn');



function back(){
    currNum = currNum.slice(0, -1);
    if(currNum === ""){
        updateDisplay("0");
    }
    updateDisplay(currNum);
}
function clear(){
    currNum = "";
    updateDisplay("0");
}
function updateDisplay(display){
    calculatorScreen.textContent = display;
}
function appendNum(num){
    currNum = currNum + num;
}


//Clear button eventListener
clearBtn.addEventListener('click', clear);

//back button eventListener
backBtn.addEventListener('click', back)

//number key event listener
numberButton.forEach(button => {
    button.addEventListener('click', () => {
        console.log('click');
        appendNum(button.textContent);
        updateDisplay(currNum);
    });
});

operations.forEach(operator => {
    operator.addEventListener('click', () => {
        if(prevNum === ""){return;}
        if(currNum !== ""){
            console.log(operator);
        }
        prevNum = currNum;
        currNum = "";
        finalOperator = operator;
    });
});
