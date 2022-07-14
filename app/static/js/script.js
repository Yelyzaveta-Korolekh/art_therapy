document.addEventListener("DOMContentLoaded", re);

let xPos = 0;
let i=1;

let kol = 0 
function re(){
  gsap.timeline()
    .set('.ring', { rotationY:360 })
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
        gsap.to('.img', {opacity:1, width:"100%", ease:'power2.inOut'})
      })
    }, '-=0.5')
    

$(window).on('mousedown touchstart', dragStart);
$(window).on('mouseup touchend', dragEnd);


function dragStart(e){ 
  if (e.touches) e.clientX = e.touches[0].clientX;
  xPos = Math.round(e.clientX);
  $(window).on('mousemove touchmove', drag);
}


function drag(e){
  if (e.touches) e.clientX = e.touches[0].clientX;    

  gsap.to('.ring', {
    rotationY: '-=' +( (Math.round(e.clientX)-xPos)%360 ),
    onUpdate:()=>{ gsap.set('.img', { backgroundPosition:(i)=>getBgPos() }) }
  });
  
  xPos = Math.round(e.clientX);
}

function dragEnd(e){
  $(window).off('mousemove touchmove', drag);
}

function getBgPos(){ 
  return ( 180-gsap.utils.wrap(0,360)) +'px 0px';
}

function description(){
  var target =  event.target;
  target.setAttribute("id","clickedImg");
  gsap.timeline()
    .to('.img',  { 
      autoAlpha: 0,
    })   
  gsap.timeline()
    .to('#clickedImg', 
    {
      autoAlpha: 1,
    })
  
}

    
