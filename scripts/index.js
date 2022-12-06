const navLinks = document.querySelectorAll('.nav-button');

const navigation = elements => {
    // element.href = 'index.html#up';
    elements.forEach(element => {
        element.addEventListener('click', () => {
            if(element.classList.contains('home')) {
                element.href = 'index.html#up';
            } else if(element.classList.contains('about')) {
                element.href = '#experience';
            }
            else if (element.classList.contains('work-link')){
                element.href = 'index.html#work';
            }
            else if (element.classList.contains('contact')){
                element.href = 'index.html#foot';
            }
        })
    });
}

navigation(navLinks);
var viewProject = document.querySelectorAll('.card-button');
var cardContainer = document.querySelector('.card_popup');

viewProject.forEach((open)=>{
    open.addEventListener('click',()=>{
       cardContainer.classList.add('show');
    })
})
const close = document.getElementById('close-popup'); 
 close.addEventListener('click',()=>{
        cardContainer.classList.remove('show');
    close.style.cursor = 'pointer';
 })