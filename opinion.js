document.getElementById("firstlink").addEventListener("click", openFirst);
document.getElementById("secondlink").addEventListener("click", openSecond);
document.getElementById("thirdlink").addEventListener("click", openThird);

function openFirst() {
  document.getElementById('first').style.display = 'block';
  document.getElementById('second').style.display = 'none';
  document.getElementById('third').style.display = 'none';
}

function openSecond() {
  document.getElementById('first').style.display = 'none';
  document.getElementById('second').style.display = 'block';
  document.getElementById('third').style.display = 'none';
}

function openThird() {
  document.getElementById('first').style.display = 'none';
  document.getElementById('second').style.display = 'none';
  document.getElementById('third').style.display = 'block';
}
