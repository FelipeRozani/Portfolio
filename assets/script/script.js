const btnMudaCor = document.querySelector('.btn-muda');
const img = document.querySelector('.img-btn');
const corpo = document.querySelector('body');
const cabecalho = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const qualificacoes = document.querySelector('.qualificacoes')
const imgApresentacao = document.querySelector('.img-1')

btnMudaCor.addEventListener('click', () => {
    corpo.classList.add('body-2');
    cabecalho.classList.add('header-2');
    main.classList.add('main-2');
    footer.classList.add('footer-2');
    qualificacoes.classList.add('qualificacoes-2');
    imgApresentacao.setAttribute('src', './assets/img/FotoFelipe-Edit.png');
    img.setAttribute('src', './assets/img/moon.png')
});

btnMudaCor.addEventListener('dblclick', () => {
    corpo.classList.remove('body-2');
    cabecalho.classList.remove('header-2');
    img.classList.remove('img-2')
    main.classList.remove('main-2');
    footer.classList.remove('footer-2');
    qualificacoes.classList.remove('qualificacoes-2');
    imgApresentacao.setAttribute('src', './assets/img/F.png');
    img.setAttribute('src', './assets/img/sun.png')
})

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
})


sr.reveal('.imagem-apresentacao', {delay:500, origin:'top'});
sr.reveal('.container-1', {delay:600, origin:'top'});