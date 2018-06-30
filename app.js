
const header = document.querySelector('header');
const headerDrop = document.querySelector('.headerDrop');
headerDrop.style.display = "none";

header.addEventListener('mouseover', ()=>{
    headerDrop.style.display = 'block';
})

header.addEventListener('mouseleave', ()=>{
    headerDrop.style.display = 'none';
})

//mouseover  mouseleave



