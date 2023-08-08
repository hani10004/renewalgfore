
(function(){
    

let container=document.querySelector('#progress');
let progressBar=document.querySelector('.progress-bar');
let progressText=document.querySelector('.progress-text');
let imgLoad=imagesLoaded('body');
let imgTotal=imgLoad.images.length;
let imgLoaded=0;
let current=0;
let progressTimer;
let topValue;

progressTimer=setInterval(updateProgess,1000/60);




imgLoad.on( 'progress', function( instance, image ) {
    imgLoaded++;
  });


  function updateProgess(){
    let target=(imgLoaded/imgTotal)*100;
    console.log(target)
    current += (target - current)*0.1;

    progressBar.style.width=current+"%";
    progressText.innerHTML=Math.ceil(current)+"%";

    if(current>99.9){
        clearInterval(progressTimer);
        container.classList.add('.progress-complete');
        progressBar.style.width='100%';
        topValue=0;
        setInterval(()=>{
            topValue+=20;
            container.style.top=-topValue+"%";
        },10)
    }
  }
})()