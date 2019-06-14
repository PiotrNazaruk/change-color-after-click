let button = document.querySelector('.header__container button')
let spans = document.querySelectorAll('.header__container span');

const changeColors = ()=>{
    spans.forEach((span,index)=>{
        let randomColor = [Math.floor(Math.random()*255)];
           (function(index){
               setTimeout(()=>{
                span.style.color = `rgb(100,${randomColor},${randomColor}`;
                console.log(randomColor);
               },100* index)
              
           })(index)
          
        })
}
button.addEventListener('click',changeColors)
