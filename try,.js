var arr = [
   { username: "Sarthak", status: "Stranger", btn: "add friend" },
   { username: "Vedant", status: "Stranger", btn: "add friend" },
   { username: "Shanni", status: "Stranger", btn: "add friend" },
    

]
function init() {
   var clutter = ""
   arr.forEach(function (elem, idx) {
      clutter += `<div id="card">
   <div id="box">
       <img src="https://images.unsplash.com/photo-1669703388707-08fc50a0b69f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
   </div>
   <h1>${elem.username}</h1>
   <h2 class="${elem.status.split(" ").join("")}">${elem.status}</h2>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet voluptatibus adipisci. Molestias optio quaerat corporis veritatis ratione doloremque rem unde nostrum! Inventore, dolore at.</p>
   <button id="${idx}">${elem.btn}</button>
</div>`
   })
   document.querySelector("#main").innerHTML = clutter
   // console.log(clutter)
}
init()

document.querySelector("#main").addEventListener("click", function (dets) {
   if (arr[dets.target.id].status == "Stranger") {
      arr[dets.target.id].status = "Request Sending"
      arr[dets.target.id].btn = "Sending"

      init()

      setTimeout(function () {
         arr[dets.target.id].status = "Friends"
         arr[dets.target.id].btn = "Remove Friend"

         init()
      }, 2000)
   }
   else {
      arr[dets.target.id].status = "Stranger"
      arr[dets.target.id].btn = "add friend"

      init()
   }

})