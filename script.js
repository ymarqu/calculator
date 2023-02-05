let currNum = "";
let prevNum = "";
let finalOperator = "";
let flag = false;
let calculatorText = document.querySelector('.calc-text');
let numberButton = document.querySelectorAll('.num-btn');
let operations = document.querySelectorAll('.op-btn');
let clearBtn = document.querySelector('.clear-btn');
let backBtn = document.querySelector('.back-btn');
let equals = document.querySelector('.equal-btn');


function back(){
    currNum = currNum.toString().slice(0, -1);
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
    calculatorText.textContent = display;
}
function appendNum(num){
    currNum = currNum + num;
}
function calculate(){
    let answer = 0;
    let prev = parseFloat(prevNum);
    let current = parseFloat(currNum);
    console.log(finalOperator)
    switch(finalOperator){

        case '+':
            answer = prev + current;
            break;
        case '-':
            answer = prev - current;
            break;
        case '/':
            answer = prev / current;
            break;
        case '%':
            answer = prev % current;
            break;
        case '*':
            answer = prev * current;
            break;
        default:
            return;
    }
  currNum = answer.toString();
  prevNum = '';
  finalOperator = undefined;
  flag = true;
  console.log(answer)
  return answer;
}

//Clear button eventListener
clearBtn.addEventListener('click', clear);

//back button eventListener
backBtn.addEventListener('click', back)

//number key event listener
numberButton.forEach(button => {
   button.addEventListener('click', () => {
    if(flag){
        // answer = 0;
        // prevNum = '';
        currNum = '';
        flag = false;
        updateDisplay(currNum)
    }
        appendNum(button.textContent);
        updateDisplay(currNum);
        console.log(`Current Number: ${currNum}`);
        console.log(`prev Number: ${prevNum}`);
    });
});

operations.forEach(operator => {

    operator.addEventListener('click', () => {
        console.log(`Current Number: ${currNum}`);
        console.log(`prev Number: ${prevNum}`);
        if(currNum === ""){ console.log("Nothing");return;}
        if(prevNum !== ""){
            console.log("calulating")
            console.log(calculate());
        }

        prevNum = currNum;
        currNum = "";
        finalOperator = operator.textContent;
        console.log(`Current Number: ${currNum}`);
        console.log(`prev Number: ${prevNum}`);

        updateDisplay(finalOperator)

    });
});
equals.addEventListener('click', () => {
    console.log(`Current Number: ${currNum}`);
    console.log(`prev Number: ${prevNum}`);
    if(currNum === ""){console.log("Nothing");return;}
    if(prevNum !== ""){
        console.log("calculating")
        updateDisplay(calculate());
    }
    console.log("clicked")
})
