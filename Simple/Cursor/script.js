

// Select main container and custom cursor elements

var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")



// Track mouse movement and update cursor position
main.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"  // Update horizontal position
    crsr.style.top = dets.y+"px"   // Update vertical position
})
