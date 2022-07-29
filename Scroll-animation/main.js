const box = document.querySelectorAll('.box');
window.addEventListener('scroll',checkbox);


checkbox()
function checkbox(){
    const trigger = window.innerHeight / 5 *4;

    box.forEach(box=>{
        const top = box.getBoundingClientRect().top
        if(top<trigger){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
    })
}