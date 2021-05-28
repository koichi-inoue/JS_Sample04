// Global Value
let obj1, obj2;
let x1, y1, x2, y2;
let ox1 = 120;
let oy1 = 70;
let ox2 = 780;
let oy2 = 350;

// Window onload
window.onload = function(){

  obj1 = document.getElementById("character1");
  obj2 = document.getElementById("character2");
  btn = document.getElementById("resetButton");

  window.document.addEventListener("keyup", Move, false);
  btn.addEventListener("click", Reset, false);

  Init();
}

// Initialize
function Init(){

  x1 = ox1;
  y1 = oy1;
  x2 = ox2;
  y2 = oy2;

  obj1.style.left = x1 + "px";
  obj1.style.top = y1 + "px";
  obj2.style.left = x2 + "px";
  obj2.style.top = y2 + "px";

}

// Move Charactor
function Move(event){

  if (event.code === 'KeyA') x1 = x1-16;
  if (event.code === 'KeyD') x1 = x1+16;
  if (event.code === 'KeyW') y1 = y1-16;
  if (event.code === 'KeyX') y1 = y1+16;

  if (event.key === 'ArrowLeft') x2 = x2-16;
  if (event.key === 'ArrowRight') x2 = x2+16;
  if (event.key === 'ArrowUp') y2 = y2-16;
  if (event.key === 'ArrowDown') y2 = y2+16;

  obj1.style.left = x1 + "px";
  obj1.style.top = y1 + "px";
  obj2.style.left = x2 + "px";
  obj2.style.top = y2 + "px";
}


// Reset Charactor
function Reset(){
  obj1.style.left = ox1 + "px";
  obj1.style.top = oy1 + "px";
  obj2.style.left = ox2 + "px";
  obj2.style.top = oy2 + "px";
}
