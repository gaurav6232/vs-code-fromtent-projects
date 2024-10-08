 var cursor = document.querySelector("#cursor");
 var main = document.querySelector("#main");
 var h1 = document.querySelector("#main h1");
 
 
main.addEventListener("mousemove",function(dets){
  cursor.style.left = dets.x +"px";
  cursor.style.top = dets.y +"px";
   
});