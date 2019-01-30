const canvas = document.getElementById('draw');
const context = canvas.getContext('2d');
const mouseCursor = {prevX: 0, prevY: 0};

/**
 * Draw in canvas if mouse leftclick is pressed on it.
 * @param {MouseEvent} e - event interface generated on mouse
 *                         movement in canvas.
 */
function draw(e) {
  if (e.buttons & 1) {
    context.beginPath();
    context.lineCap = 'round';
    context.strokeStyle = '#000000';
    context.moveTo(mouseCursor.prevX, mouseCursor.prevY);
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    console.log(e.clientX + ' ; ' + e.clientY);
  }
  mouseCursor.prevX = e.clientX;
  mouseCursor.prevY = e.clientY;
}

context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;

window.addEventListener('mousemove', draw);