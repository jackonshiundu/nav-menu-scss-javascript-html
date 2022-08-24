const navBarMenu=document.querySelector('.navbar-menu');

const closeButton=document.querySelector('.fa-times');
const OpemMenu=document.querySelector('.fa-bars');

OpemMenu.addEventListener('click',()=>{
    closeButton.style.display='block';
    OpemMenu.style.display='none';
    navBarMenu.style.display='inline-block'
})
closeButton.addEventListener('click',()=>{
    closeButton.style.display='none';
    OpemMenu.style.display='block';
    navBarMenu.style.display='none'
})