
function loadFile() {
    let data=require('./data.json');
    var newArr = JSON.parse(data); 
    document.write(newArr[0]);
    
}
/*
  function loadFile() {
    var input, file, fr;

    if (typeof window.FileReader !== 'function') {
      alert("The file API isn't supported on this browser yet.");
      return;
    }

    input = document.getElementById('fileinput');
    document.write(input.files[0]);
    if (!input) {
      alert("Um, couldn't find the fileinput element.");
    }
    else if (!input.files) {
      alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
      alert("Please select a file before clicking 'Load'");
    }
    else {
      file = input.files[0];
      document.write(file);
      fr = new FileReader();
      fr.onload = receivedText;
      fr.readAsText(file);
    }

    function receivedText(e) {
      let lines = e.target.result;
      var newArr = JSON.parse(lines); 
      document.write(newArr["users"][1].username);

    }
  }
    */