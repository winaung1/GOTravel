const nav = document.querySelector('nav');
const topSection = document.querySelector('.top-section');
const svg = document.querySelector('svg');
const ulDesktop = document.querySelector('.ul-desktop');
const ulDiv = document.querySelector('.ul-div');
const btn = document.querySelector('.btn');
const line = document.querySelector('.line');
const ok = document.querySelector('.ok');
const animation = document.querySelector('.animation');

window.addEventListener('scroll', (e) => {
    if(window.scrollY > 100){
        nav.style.backgroundColor = 'white';
        nav.style.color = 'black';
        ulDesktop.style.color = 'black';
        svg.setAttribute('fill', 'black')
    } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.color = 'white';
        ulDesktop.style.color = 'white';
        svg.setAttribute('fill', 'white')
    }
})

btn.addEventListener('click', open)
line.addEventListener('click', close)


function open(){
    btn.classList.add('hidden');
    animation.classList.add('toRight');
    animation.classList.remove('toLeft');
    document.body.style.overflow = 'hidden';
    ok.classList.remove('hidden');
    ulDiv.classList.remove('hidden');
    line.classList.remove('hidden');
}

function close(){
    btn.classList.remove('hidden');
    animation.classList.add('toLeft');
    animation.classList.remove('toRight');
    document.body.style.overflow = 'auto';
    ok.classList.add('hidden');
    setTimeout(() => {
        ulDiv.classList.add('hidden');
    }, 1000)
    line.classList.add('hidden');
}