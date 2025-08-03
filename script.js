document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Funcionalidad para el formulario de contacto
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que la página se recargue

        // Simula el envío de datos
        formStatus.textContent = 'Enviando mensaje...';
        formStatus.style.color = '#333';

        // Simulación de una respuesta del servidor después de 2 segundos
        setTimeout(() => {
            // Muestra un mensaje de éxito
            formStatus.textContent = '¡Gracias! Tu mensaje ha sido enviado.';
            formStatus.style.color = 'green';
            contactForm.reset(); // Limpia los campos del formulario
        }, 2000);
    });
});