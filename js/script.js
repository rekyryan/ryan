let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
	distance: '65px',
	duration: 2600,
	delay: 450,
	reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'right'});
sr.reveal('.icon',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});
sr.reveal('.social',{delay:400, origin:'bottom'});
sr.reveal('.button',{delay:500, origin:'bottom'});
sr.reveal('.logo',{delay:500, origin:'left'});

function scrollToBottom() {
	var button = document.getElementById("scroll-down");
    button.style.opacity = 0.5;

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}
