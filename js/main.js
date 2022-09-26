function randompickerbtn() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16)
    document.querySelector("#randomValuePara").innerHTML = "#"+randomColor
    document.querySelector("#randomPicker").style.backgroundColor = "#"+randomColor
}

function hexFindbtn() {
    document.querySelector("#color-box").style.backgroundColor = document.querySelector("#hexInput").value
}
function RGBFindbtn() {
    let r = document.querySelector("#RInput").value
    let g = document.querySelector("#GInput").value
    let b = document.querySelector("#BInput").value
    let colorCode = "rgb("+ r + "," + g+","+b+")"
    document.querySelector("#rgb-color-box").style.backgroundColor = colorCode
}

function RangeSelector() {
  //taking range values
  let r = document.querySelector("#RrInput").value;
  let g = document.querySelector("#GrInput").value;
  let b = document.querySelector("#BrInput").value;
  //style can be pushed to lower lines, just personal preference here
  let colorDisplay = document.querySelector("#range-color-box").style;
  //need to create the color variable as it needs to be in right format
  let rgbColor = "rgb(" + r + "," + g + "," + b + ")";
  colorDisplay.backgroundColor = rgbColor;
}

// hex to rgb converter

function convertToRGB() {}

function hexConvbtn() {
    //getting the values
  let colorCode = document.querySelector("#hexCInp").value;
  //storing the output color code in outputCode
  let outputCode = document.querySelector("#hexCOut");
  //checking for length
  if (colorCode.length !== 6) {
    outputCode.innerHTML = "Please Enter 6 digit hex code";
  } else {
    //grouping grouping into 3 sections
    let rgbGroup = colorCode.match(/.{1,2}/g);
    //parsing in hex code
    let rgbArr = [
      parseInt(rgbGroup[0], 16),
      parseInt(rgbGroup[1], 16),
      parseInt(rgbGroup[2], 16),
    ];
    outputCode.innerHTML = rgbArr;
  }
}

function rgbConvbtn() { 
    //converting to decimal for later conversions
  let r = parseInt(document.querySelector("#RCInput").value);
  let g = parseInt(document.querySelector("#GCInput").value);
  let b = parseInt(document.querySelector("#BCInput").value);
  //converting with base 16
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  //if single digit adding 0 at start
  r.length == 1 ? (r = "0" + r) : (r = r);
  g.length == 1 ? (g = "0" + g) : (g = g);
  b.length == 1 ? (b = "0" + b) : (b = b);
  document.querySelector("#rgbCOut").innerHTML = "#" + r + g + b;
}
