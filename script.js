let calculatorScreen = document.querySelector('.calc-screen');
let calculatorButton = document.querySelectorAll('.calc-btn');

calculatorScreen.addEventListener("click", () =>{
    console.log("This works");
});

calculatorButton.forEach(button => {
    button.addEventListener('click', () => {
        calculatorScreen.textContent = button.textContent;
    });
});
