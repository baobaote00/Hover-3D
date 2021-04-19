document.querySelector('.hover-box__top').addEventListener('mouseover',(e)=>{
    document.querySelector('.box').style.backgroundColor = "yellow";
})
document.querySelector('.hover-box__top').addEventListener('mouseout',(e)=>{
    document.querySelector('.box').style.backgroundColor = "red";
})