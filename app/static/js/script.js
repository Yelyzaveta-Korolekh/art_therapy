


function description(){
    let target = event.target;
    target.setAttribute("id","clickedImg");

    gsap.timeline()
    .to('.light', {
        scale: 1,
        duration:0.001,
    })
    .to('.sign', {
        autoAlpha: 0,
    })
    .to('.img',  { 
      autoAlpha: 0,
    })
    .to('#clickedImg', {
      top: "+=10%",
      autoAlpha: 1,
      scale: 1.2,
    })
    .to('#text_img',  { 
        autoAlpha: 0.9,
      })
    .to('#arrow', {
        autoAlpha: 1,
    })
    
    
        
}

function mainPage(){
    
    gsap.timeline()
    .to('.light', {
        scale: 0.9,
    })
    .to('#arrow', {
        autoAlpha: 0,
    })
    .to('#text_img',  { 
        autoAlpha: 0,
      })
    .to('#clickedImg', {
        top: "-=10%",
        autoAlpha: 1,
        scale: 1,
    })
    .to('.img',  { 
        autoAlpha: 1,
    })
    .to('.sign', {
        autoAlpha: 1,
    })
    document.getElementById('clickedImg').removeAttribute('id');
}

    
