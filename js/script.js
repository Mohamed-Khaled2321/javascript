
var imgs= Array.from (document.querySelectorAll('.container img'))
var fixedbox=document.getElementById('fixed-box')
var inerrImg=document.getElementById('innerimg')
var closeBtn=document.getElementById('close-btn')
var leftBtn=document.getElementById('left-btn')
var rightBtn=document.getElementById('right-btn')

console.log(imgs)

var currentimg=''

for(i=0;i<imgs.length;i++){
imgs[i].addEventListener('click',function(e){
    fixedbox.classList.remove('d-none')
    var clicked=e.target;
   var imgsrc=clicked.getAttribute('src')
    var imgsrc=clicked.getAttribute('src')

    //console.log(clicked.getAttribute('src'))

    innerimg.setAttribute('src',imgsrc)
    //console.log(imgs.indexOf(clicked))
    currentimg=imgs.indexOf(clicked)
})
}

function close(){
    fixedbox.classList.add('d-none')
}

closeBtn.addEventListener('click',function(){
    close()
})

fixedbox.addEventListener('click',function(){
     close()
})

function next(){
    currentimg++;
    if(currentimg==imgs.length){
        currentimg=0
    }
    var nextimg=imgs[currentimg]
    
    var imgsrc=nextimg.getAttribute('src')
    innerimg.setAttribute('src',imgsrc)

}

rightBtn.addEventListener('click',function(e){
    e.stopPropagation()
    next()

})

function prev(){
    currentimg--;
    if(currentimg<0){
        currentimg=imgs.length-1
    }
    var previmg=imgs[currentimg]
    
    var imgsrc=previmg.getAttribute('src')
    innerimg.setAttribute('src',imgsrc)

}

leftBtn.addEventListener('click',function(e){
    e.stopPropagation()
    prev()

})

document.addEventListener('keyup',function(e){
    if(e.key=="ArrowRight"){
        next()
    }else if(e.key=="ArrowLeft"){
        prev()
    }else if(e.key=="Escape"){
        close()
    }
})
