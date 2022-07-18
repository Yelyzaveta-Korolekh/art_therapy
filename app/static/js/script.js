
var isClicked = false;
 window.onload =function borderWidth(){
    
    let imgList = document.querySelectorAll('.img');
    for( let i = 0; i < imgList.length; i++){
        let width = imgList[i].clientWidth;
        let height = imgList[i].clientHeight;
        if(width>height){
            imgList[i].style.width = '72%';
            imgList[i].style.height = '56%';
            gsap.timeline()
               .to('.img', {
                   xPercent: '-12',
               })
           
        }
        else if(width<height){
            imgList[i].style.width = '44%';
            imgList[i].style.height = '64%';
            gsap.timeline()
               .to('.img', {
                   xPercent: '-40',
               })
               
        }
        else{
            imgList[i].style.width = '54%';
            imgList[i].style.height = '54%';
        }
    }
    
}


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
        /* left: "+=8%", */
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
    
    if(!isClicked)
    {
        
        isClicked = true;
        let targetimg = event.target;
        let target = targetimg.parentNode;
        target.setAttribute("id","clicked");
        targetimg.setAttribute("id", "clickedImg");
        let fChild = document.getElementById('container');
        let elem = document.querySelectorAll('#text_img')[1];
        let elem1 = document.querySelectorAll('#text_img')[0];
        if(fChild.childNodes[1].id == 'clicked'){
            elem.style.left = '56%';
            descGsap();
            elem1.style.left = '56%';
            elem1.style.zIndex = '2';
        }
        else if(fChild.childNodes[3].id == 'clicked'){

            elem.style.left = '6%';
            descGsap();
            elem1.style.left = '6%';
            elem1.style.zIndex = '0';
        }
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
    isClicked = false;
}


