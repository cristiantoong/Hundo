
//get the values from the Page
//starts or controller function
function getValues(e){
  e.preventDefault()
  //get values from the page
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  //parse into Integeers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  //check if values are integer
  if(Number.isInteger(startValue) && Number.isInteger(endValue)){
    //we call generateNumbers
    let numbers = generateNumbers(startValue, endValue)
    console.log(numbers)
      //we call displayNumbers
    displayNumbers(numbers)
  } else {
    alert("You must enter integers");
  }

}

//generate numbers from startvalue to the end value
//logic function(S)
function generateNumbers(sValue, eValue){
  let numbers = []
  //we want to get all numbers from to start to end
  for(let index = sValue; index <= eValue; index++){
    //this will execite in a loop until index = eValue
    numbers.push(index);

  }

  return numbers;

}


//display the numbers and mark even numbers bold
//display or view functions
function displayNumbers(numbers){
  let templateRows = "";

  for (let index = 0; index < numbers.length; index++) {

    let className = "even"
    let number = numbers[index];

    if(number % 2 == 0){
      className = "even"
    } else {
      className = "odd"
    }

    templateRows += `<tr><td class="${className}">${number}</td></tr>`;
  }

  document.getElementById("results").innerHTML = templateRows;

}