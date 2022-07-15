document.addEventListener("DOMContentLoaded", re);
document.addEventListener("DOMContentLoaded", slidePict);


let xPos = 0;
let i=1;
var animation;
function slidePict(){
  animation = gsap.fromTo('.ring', {
    rotationY: 360,
  }, {
    rotationY: 0,
    stagger: 0.1,
    duration: 100,
    repeat: -1,
    ease: 'none',
    
  })
}

function re(){
  gsap.timeline()
    .set('.img',  { 
      rotationY: (i)=> i*-36,
      transformOrigin: '50% 50% 500px',
      z: -500,
      backgroundPosition:(i)=>getBgPos(i),
      backfaceVisibility:'hidden',
      i:"+=1"
    })   
   }

  gsap.timeline()
   
    .from('.img', {
      duration:1.5,
      y:200,
      opacity:0,
      stagger:0.1,
      ease:'expo'
    })
    .add(()=>{
      $('.img').on('mouseenter', (e)=>{
        let current = e.currentTarget;
        gsap.to('.img', {opacity:(i,t)=>(t==current)? 1:0.3, ease:'power3' })
      })
      $('.img').on('mouseleave', (e)=>{
        gsap.to('.img', {
          opacity:1,
          width:"100%", 
          ease:'power2.inOut'})
      })
    }, '-=0.5')
    

function getBgPos(){ 
  return ( 180-gsap.utils.wrap(0,360)) +'px 0px';
}

function description(){
  animation.pause();
  var target =  event.target;
  target.setAttribute("id","clickedImg");
  gsap.timeline()
    .to('.img',  { 
      autoAlpha: 0,
    })
    .to('#clickedImg', {
      autoAlpha: 1,
      rotationY: '0deg',
    })
    .to('.ring',{
      rotationY: '0',
    })
    .to('.container', {
      width: '60%',
      height: '80%',
      left: '70%',
    })
    .to('#text_img',{
      duration: 0.1,
      opacity: 1,
    })
    .to('#arrow', {
      opacity: 1,
    })
    
    
}  
  
  
function mainRing(){
  let checkImg = document.getElementById('clickedImg');
  animation.play();
  checkImg.removeAttribute('id')
  re();
  gsap.timeline()
    .to('#text_img',{
      duration: 0.1,
      opacity: 0,
    })
    .to('.ring',{
      rotationY: 360,
    })
    .to('.container', {
      width: '20%',
      height: '40%',
      left: '50%',
    })
    .to('.img',  { 
      autoAlpha: 1,
    })
    .to('#arrow', {
      opacity: 0,
    })
}

    
