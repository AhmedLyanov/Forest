let bg = document.querySelector('.bg');
let bushes = document.querySelector('.bushes');
let bushes2 = document.querySelector('.bushes2');

document.onmousemove = (e) => {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;

    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    bushes.style.transform = 'translate(-' + x * 70 + 'px, -' + y * 70 + 'px)';
    bushes2.style.transform = 'translate(-' + x * 70 + 'px, -' + y * 70 + 'px)';
};
