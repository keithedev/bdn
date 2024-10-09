console.log("hola");

function onNavlinkClicked(event) {
	const idSeccion = event.target.getAttribute('data-target');
	const seccion = document.getElementById(idSeccion);
	seccion.scrollIntoView({behavior: 'smooth'});
}

const botones = Object.values(document.getElementsByClassName('nav-link'));

botones.forEach(link => {
    link.addEventListener('click', onNavlinkClicked);
  }
)