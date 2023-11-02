var main = document.querySelector(".main");
var cursor = document.querySelector(".custom-cursor")
main.addEventListener('mouseenter',function (p) {
    cursor.style.left= p.x +"px";
    cursor.style.top= p.y +"px";
    cursor.style.opacity= 1;
    console.log(p.x)
    
})

var anima = gsap.timeline();
anima.from("nav",{
  y:-100,
  opacity:0,
  duration:1,

})
.from(".left h1",{
  y:100,
  opacity:0,
  duration:0.4,
})