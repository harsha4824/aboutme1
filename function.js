
let mph = 0
document.getElementById('localstorageid').addEventListener('click', n);

function speedConverter() {
    mph = Number(document.getElementById("mph").value);
    let kmph = speedConverter1(mph);
    localStorage.setItem('key',kmph);
    document.getElementById('result').innerHTML = kmph +' KMPH';
}

function speedConverter1(mph) {
    temp = parseFloat(mph)
    let kmph = temp * 1.6;
    return kmph;

}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "harsha_info.txt", true);
    xhttp.send();
  }

  function localSet(){
document.getElementById('lc').value=localStorage.getItem('key');

  }