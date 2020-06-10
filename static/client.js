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