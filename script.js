let videoCont = document.querySelector("#video-cont");
let play = document.querySelector("#circle");
videoCont.addEventListener("mouseenter", ()=>{
  gsap.to(play, {
    scale:1,
    opacity:1
  })

})
videoCont.addEventListener("mouseleave", ()=>{
  gsap.to(play, {
    scale:0,
    opacity:0
  })

})
videoCont.addEventListener("mousemove",(dets)=>{
   gsap.to(play,{
    left:dets.x -55,
    top:dets.y-55,
   })
})