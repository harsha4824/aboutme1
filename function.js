
let mph = 0

function speedConverter() {
    mph = Number(document.getElementById("mph").value);

    let kmph = speedConverter1(mph);

    // document.getElementById("outputKPH").innerHTML=val*1.6;

}

function speedConverter1(mph) {
    temp = parseFloat(mph)

    let kmph = temp * 1.6;
    document.getElementById('result').innerHTML = kmph

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