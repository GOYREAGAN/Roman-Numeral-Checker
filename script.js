const converting = document.getElementById("convert-btn");
const NumberInput = document.getElementById("number");
const display = document.getElementById("output");

converting.addEventListener("click", function(){
    //inputs should only be numbers
    const value = NumberInput.value.trim();
    if(!value || isNaN(value)){//empty inputs and non-numeric values aren't allowed
        display.textContent = "Please enter a Valid number"
        return;
    }
    //negative numbers should not be used as inputs
    if(Number(value) < 1){
        display.textContent = "Please enter a number greater than or equal to 1"
        return;
    }
    if(Number(value) >= 4000){
        display.textContent = "Please enter a number less than or equal to 3999"
        return;
    }
    //Roman Numeral conversion
    const num = Number(value);//a variable for storing the number input
    //an array of the roman numerals objects
    const romanNumerals = [
        {value: 1000, numeral: "M"},
        {value: 900, numeral: "CM"},
        {value: 500, numeral: "D"},
        {value: 400, numeral: "CD"},
        {value: 100, numeral: "C"},
        {value: 90, numeral: "XC"},
        {value: 50, numeral: "L"},
        {value: 40, numeral: "XL"},
        {value: 10, numeral: "X"},
        {value: 9, numeral: "IX"},
        {value: 5, numeral: "V"},
        {value: 4, numeral: "IV"},
        {value: 1, numeral: "I"}
    ];
    let result = "";
    let n = num;//the variable n will be equal to the NumberInput
    for(let i = 0; i < romanNumerals.length; i++){//loop through the romanNumerals array
        while(n >= romanNumerals[i].value){
            result += romanNumerals[i].numeral; //if condition is true execute this code, n = NumberInput(value)
            n -= romanNumerals[i].value;//if the condition is false execute this code
        }
    }
    display.textContent = result; //display the result
});


