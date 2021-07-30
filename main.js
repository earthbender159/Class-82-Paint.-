var mouseEvent = "empty"; 
var last_position_of_x, last_position_of_y; 
var canvas = document.getElementById('myCanvas'); 
var ctx = canvas.getContext("2d"); 
canvas.addEventListener("mousedown", my_mousedown); 
function my_mousedown(e){
    mouseEvent = "mouseDown"; 
}
canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e){
    mouseEvent = "mouseUP"; 
}
canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e){
    mouseEvent = "mouseLeave"; 
}
canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e){
    var current_position_of_mouse_x = e.clientX - canvas.offsetLeft; 
    var current_position_of_mouse_y = e.clientY - canvas. offsetTop; 
    if(mouseEvent == "mouseDown"){
        ctx.beginPath(); 
        ctx.strokeStyle = "black"; 
        ctx.lineWidth = 1; 
        ctx.moveTo (last_position_of_x, last_position_of_y); 
        ctx.lineTo (current_position_of_mouse_x, current_position_of_mouse_y); 
        ctx.stroke(); 
    }
    last_position_of_x = current_position_of_mouse_x; 
    last_position_of_y = current_position_of_mouse_y; 
}