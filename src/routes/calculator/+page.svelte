<script>
  //This will be the script for the Calculator

  //Variables for the Calculator
  let firstValue = "";
  let secondValue = "";
  let operation = "";
  let displayValue = "";

  let isPercent = false
  
  let answer = 0;

  function onButtonClick(value) {
    if (operation != "") {
      secondValue += value;
      console.log(secondValue);
    }
    firstValue += value;
    displayValue = `${firstValue} ${operation} ${secondValue}`;
  }

  function onOperatorClick(value) {
    if (firstValue === "" && answer === 0) {
      alert("Enter Values First");
    } else {
      operation = value;
    }
    displayValue = `${firstValue} ${operation} ${secondValue}`;
  }

  function onEqualClick() {
    if (firstValue === "") {
      answer = 0;
    } else if (secondValue === "") {
      answer = firstValue;
    } else {
      performOperation(firstValue, secondValue, operation);
    }
  }
  
  function performOperation(firstValue, secondValue, operation) {
    //This can be replaced by the REST API SSR
    //We could just get the response values
    switch (operation) {
      case "+":
        // Perform addition operation
        answer = parseFloat(firstValue) + parseFloat(secondValue)
        break;
      case "-":
        // Perform subtraction operation
        answer = parseFloat(firstValue) - parseFloat(secondValue)
        break;
      case "*":
        // Perform multiplication operation
        answer = parseFloat(firstValue) * parseFloat(secondValue)
        break;
      case "÷":
        // Perform division operation
        answer = parseFloat(firstValue) / parseFloat(secondValue)
        break;
      default:
        // Error, without Operator
        handleInvalidOperation();
        break;
    }
  }

  function handleInvalidOperation() {
    console.error("Invalid operation");
  }

  // Clearing Values
  function allClear() {
    answer = 0
    firstValue = ""
    secondValue = ""
    operation = ""
    displayValue = ""
    isPercent = false
  }

  // Changin Sign
  function changeSign() {
    if (answer != 0){
      answer *= -1
    }
  }
  

  //Percent Value
  function percentValue() {
    if (answer == 0){
      answer = 0
    } else if(!isPercent) {
      isPercent = true
      answer *= .01
    } else {
      isPercent = false
      answer *= 100
    }
  }
</script>

<div class="calculator-container">
  <table class="calculator">
    <tr>
      <td colspan="4" class="display">{displayValue}</td>
    </tr>
    <tr>
      <td colspan="4" class="answer">{answer}</td>
    </tr>
    <tr>
      <td class="clear" on:click={() => allClear()}>A C</td>
      <td class="btn" on:click={() => changeSign()}>+/-</td>
      <td class="btn" on:click={() => percentValue()}>&nbsp;%&nbsp</td>
      <td class="operator" on:click={() => onOperatorClick("÷")}>÷</td>
    </tr>
    <tr>
      <td class="btn" on:click={() => onButtonClick("7")}>7</td>
      <td class="btn" on:click={() => onButtonClick("8")}>8</td>
      <td class="btn" on:click={() => onButtonClick("9")}>9</td>
      <td class="operator" on:click={() => onOperatorClick("*")}>×</td>
    </tr>
    <tr>
      <td class="btn" on:click={() => onButtonClick("4")}>4</td>
      <td class="btn" on:click={() => onButtonClick("5")}>5</td>
      <td class="btn" on:click={() => onButtonClick("6")}>6</td>
      <td class="operator" on:click={() => onOperatorClick("-")}>-</td>
    </tr>
    <tr>
      <td class="btn" on:click={() => onButtonClick("1")}>1</td>
      <td class="btn" on:click={() => onButtonClick("2")}>2</td>
      <td class="btn" on:click={() => onButtonClick("3")}>3</td>
      <td class="operator" on:click={() => onOperatorClick("+")}>+</td>
    </tr>
    <tr>
      <td class="btn" on:click={() => onButtonClick("0")}>0</td>
      <td class="btn" on:click={() => onButtonClick(".")}>.</td>
      <td colspan="2" class="equal" on:click={() => onEqualClick()}>=</td>
    </tr>
  </table>
</div>

<style>
  .calculator-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  }
  .calculator {
    width: 300px;
    padding: 20px;
    background-color: rgb(104, 104, 104);
    border-radius: 10px;
    border-collapse: separate;
    border-spacing: 0.5em 0.5em;
  }

  .calculator td {
    padding: 10px;
    text-align: center;
    border-radius: 100px;
  }

  .btn {
    font-size: 20px;
    background-color: lightgrey;
    cursor: pointer;
  }

  .btn:hover {
    background-color: rgb(234, 234, 234);
  }

  .calculator .display {
    font-size: 12px;
    text-align: end;
    background-color: #f5f5f5;
  }

  .calculator .answer {
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    color: white;
    background-color: rgb(20, 20, 20);
  }

  .operator {
    background-color: #efefef;
    cursor: pointer;
  }

  .operator:hover {
    background-color: #ffffff;
  }

  .clear {
    cursor: pointer;
    background-color: #ffcccc;
  }

  .clear:hover {
    background-color: #fcb3b3;
  }
  .equal {
    cursor: pointer;
    background-color: #99cc99;
    font-weight: bold;
  }

  .equal:hover {
    background-color: #7ac57a;
  }
</style>
