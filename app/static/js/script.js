
function descGsap(){
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
    .to('.button-arrow',{
        autoAlpha: 0,
    })
    .to('#clickedImg', {
        top: "+=10%",
       /*  left: "+=10%", */
        autoAlpha: 1,
        scale: 1.2,
      })
    .to('#text_img',  { 
        autoAlpha: 1,
      })
    .to('#arrow', {
        autoAlpha: 1,
    })
}

function description(){
    let targetimg = event.target;
    let target = targetimg.parentNode;
    target.setAttribute("id","clicked");
    targetimg.setAttribute("id", "clickedImg");
    let fChild = document.getElementById('container');
    if(fChild.childNodes[1].id == 'clicked'){
        descGsap();
        target.style.left = '10%';
    }
    else if(fChild.childNodes[3].id == 'clicked'){
        
        let elem = document.querySelectorAll('#text_img')[1];
        elem.style.left = '10%';
        descGsap();
    }

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
    .to('.button-arrow',{
        autoAlpha: 1,
    })
    document.getElementById('clickedImg').removeAttribute('id');
    document.getElementById('clicked').removeAttribute('id');
}

    
