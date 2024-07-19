document.body.onload = addElements;

var arrows = ['山临', '公路', '⬅', '高速', '⮏', '⤑', '聚心','⤻', '擎帜'];
var rotations = ['up', 'down', 'left', 'right'];
var colors = [
 "#fdfdfd", "#fdfdfd", "#fdfdfd", "#fdfdfd", "#fdfdfd", "#fdfdfd", "#fdfdfd", "#fdfdfd", "#fdfdfd", "#fdfdfd", "#fdfdfd", "#fdfdfd", "#fdfdfd", "#fdfdfd", "#fdfdfd", "#fdfdfd",
  "#300048", "#000030", "#480078", "#600090", "#f00060", "#f01878", "#ff0060", "#f04890", "#261342", "#2E145D", "#1C1854", "#0C1444", "#05122D", "#712538", "#E8BDB7", "#B67078", "#8C4155", "#352029", "#DE0405", "#F49804", "#FACD10", "#0CB535", "#2C67F6", "#5B23D5"];

function addElements () {
  var container = document.getElementById("playground");
  var amount = 101;
  for (i = 0; i < amount; i++) {
    addArrow(
      container,
      getRandomInt(window.innerHeight),
      getRandomInt(window.innerWidth),
      getRandomInt(window.innerWidth),
      getRandomInt(window.innerHeight)
    );
  }
}

function addArrow(parent, top, left, width, height) {
  var arrow = arrows[Math.floor(Math.random() * arrows.length)];
  var rotation = rotations[Math.floor(Math.random() * rotations.length)];
  var color = colors[Math.floor(Math.random() * colors.length)];

  console.log(arrow + " " + rotation + " " + color);

  var newDiv = document.createElement("div");
  newDiv.className = "arrow " + rotation;
  newDiv.style.top = top + "px";
  newDiv.style.left = left + "px";
  newDiv.style.width = width + "px";
  newDiv.style.height = height + "px";
  newDiv.style.color = hexToRgbA(color, 0.15);
  newDiv.style.fontSize = 3 + getRandomInt(100) + "rem";
  var newContent = document.createTextNode(arrow);
  newDiv.appendChild(newContent);

  parent.appendChild(newDiv);
}

function hexToRgbA(hex, alpha) {
  var c;
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
    c= hex.substring(1).split('');
    if(c.length== 3){
      c= [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c= '0x'+c.join('');
    return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',' + alpha + ')';
  }
  throw new Error('Bad Hex');
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}