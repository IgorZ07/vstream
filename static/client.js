document.addEventListener("DOMContentLoaded", () => {
  let mouse = { 
     click: false,
     move: false,
     pos: {x:0, y:0},
     pos_prev: false
  };
  // get canvas element and create context
  let canvas  = document.getElementById('drawing');
  let context = canvas.getContext('2d');
  let width   = 790;
  let height  = 510;
//   let width   = window.innerWidth;
//   let height  = window.innerHeight;
  let socket  = io.connect();

  // set canvas to full browser width/height
  canvas.width = width;
  canvas.height = height;

  // register mouse event handlers
  canvas.onmousedown = (e) => { mouse.click = true; };
  canvas.onmouseup = (e) => { mouse.click = false; };

  canvas.onmousemove = (e) => {
     // normalize mouse position to range 0.0 - 1.0
     mouse.pos.x = e.clientX / width;
     mouse.pos.y = e.clientY / height;
     mouse.move = true;
  };