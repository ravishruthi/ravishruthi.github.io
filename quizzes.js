
document.getElementById("secondlink").addEventListener("click", openSecond);

function openSecond() {
  document.getElementById('first').style.display = 'none';
  document.getElementById('second').style.display = 'block';
}

document.getElementById("submit").addEventListener("click", knightsOrder);

// https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/
// Used this ti figure out how to read value from radio selected
function knightsOrder() {
  //event.preventDefault();
  var inputs = document.getElementsByTagName('input');
  var answers = ""

  for (i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      answers += inputs[i].value;
      //console.log(answers);
    }
  }

  if (answers.length < 4) {
    alert("Please make sure to answer all the questions!");
  }

  if (answers == "aaaa" || (answers[1] == "a" && answers[3] == "a") || answers[1] == "a") {
    document.getElementById("order").innerHTML = "You are a Lightweaver!";
    document.getElementById("powers").innerHTML = "You have the Surges of Illumination and Transformation.";
  } else if (answers == "bbbb" || (answers[1] == "b" && answers[3] == "b") || answers[1] == "b") {
    document.getElementById("order").innerHTML = "You are a Windrunner!";
    document.getElementById("powers").innerHTML = "You have the Surges of Adhesion and Gravitation.";
  } else if (answers == "cccb" || (answers[1] == "c" && answers[3] == "b") || answers[1] == "c") {
    document.getElementById("order").innerHTML = "You are a Skybreaker!";
    document.getElementById("powers").innerHTML = "You have the Surges of Gravitation and Division.";
  } else if (answers == "dddc" || (answers[1] == "d" && answers[3] == "c") || answers[1] == "d") {
    document.getElementById("order").innerHTML = "You are an Elsecaller!";
    document.getElementById("powers").innerHTML = "You have the Surges of Transformation and Transportation.";
  } else if (answers == "beed" || (answers[1] == "e" && answers[3] == "d") || answers[1] == "e") {
    document.getElementById("order").innerHTML = "You are an Edgedancer!";
    document.getElementById("powers").innerHTML = "You have the Surges of Abrasion and Progression.";
  }

  //document.getElementById("result").innerHTML = inputs[0].name + " Value: " + inputs[0].value + "<br>";
  //console.log(x);
}
