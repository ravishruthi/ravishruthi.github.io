document.getElementById("article-1").addEventListener("click", openArticle1);
document.getElementById("close-1").addEventListener("click", closeArticle1);

document.getElementById("article-2").addEventListener("click", openArticle2);
document.getElementById("close-2").addEventListener("click", closeArticle2);

document.getElementById("article-3").addEventListener("click", openArticle3);
document.getElementById("close-3").addEventListener("click", closeArticle3);

document.getElementById("download-1").addEventListener("click", downloadArticle1);
document.getElementById("download-2").addEventListener("click", downloadArticle2);
document.getElementById("download-3").addEventListener("click", downloadArticle3)

// create element - took this from my previous assignment
function createNewElement(parent, element) {
  var new_element = document.createElement(element);
  parent.appendChild(new_element);
  return new_element;
}

// create button element with specific style - took this from my previous assignment
function createNewButton(parent, button_name, button) {
  var new_button = document.createElement(button);
  parent.appendChild(new_button);
  new_button.textContent = button_name;
  new_button.style.width = '10%';
  new_button.style.padding = "5px";
  new_button.style.margin = "10px";
  new_button.setAttribute("id", button_name);
  return new_button;
}

// Referenced to have article pop up on same window
// https://www.w3schools.com/howto/howto_css_modals.asp
function openArticle1() {
  document.getElementById("modal-1").style.display = 'block';
}

function closeArticle1() {
  document.getElementById("modal-1").style.display = 'none';
}

function openArticle2() {
  document.getElementById("modal-2").style.display = 'block';
}

function closeArticle2() {
  document.getElementById("modal-2").style.display = 'none';
}

function openArticle3() {
  document.getElementById("modal-3").style.display = 'block';
}

function closeArticle3() {
  document.getElementById("modal-3").style.display = 'none';
}

// Referenced: https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
// Used and modified code to get innerText from p tag and download it into a .txt file
// *TODOOOOOO
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function downloadArticle1() {
    var filename = "article.txt";
    download(filename, document.getElementById("text-1").innerText);
}

function downloadArticle2() {
    var filename = "article.txt";
    download(filename, document.getElementById("text-2").innerText);
}

function downloadArticle3() {
    var filename = "article.txt";
    download(filename, document.getElementById("text-3").innerText);
}
