const frasesCumple = [
    "Tu alegría contagiosa y tu determinación son inspiradoras. Siempre brillas con tu amabilidad y carisma únicos. Que este año te traiga aún más éxitos y felicidad.",
    "En tu día especial, quiero celebrar a una persona increíble. Tu fuerza y tu capacidad para superar obstáculos con una sonrisa siempre me inspiran.",
    "Eres una persona asombrosa, siempre luchando por tus metas con una actitud positiva. Tu carisma y amabilidad hacen de cada día algo especial. Que hoy y siempre se te reconozca tu grandeza.. ¡Feliz Cumpleaños Lizbeth!"
];

const imagenesCumple = [
    "gato.jpg",
];

const fraseBtn = document.getElementById('fraseBtn');
const imagenBtn = document.getElementById('imagenBtn');
const fraseElement = document.getElementById('frase');
const imagenElement = document.getElementById('imagen');

fraseBtn.addEventListener('click', mostrarFrase);
imagenBtn.addEventListener('click', mostrarImagen);

function mostrarFrase() {
    const randomIndex = Math.floor(Math.random() * frasesCumple.length);
    const frase = frasesCumple[randomIndex];
    fraseElement.textContent = frase;
    fraseElement.style.display = 'block';
    imagenElement.style.display = 'none';
}

function mostrarImagen() {
    const randomIndex = Math.floor(Math.random() * imagenesCumple.length);
    const imagenSrc = imagenesCumple[randomIndex];
    imagenElement.src = imagenSrc;
    fraseElement.style.display = 'none';
    imagenElement.style.display = 'block';
}