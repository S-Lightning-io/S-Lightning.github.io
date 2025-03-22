// ===== PANTALLA DE CARGA =====
document.addEventListener('DOMContentLoaded', () => {
    // Actualizar el año actual en el footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Simulación de carga
    const loaderContainer = document.querySelector('.loader-container');
    const loaderPercentage = document.querySelector('.loader-percentage');
    let percentage = 0;
    
    const interval = setInterval(() => {
        percentage += Math.floor(Math.random() * 10) + 1;
        if (percentage > 100) percentage = 100;
        
        loaderPercentage.textContent = percentage;
        
        if (percentage === 100) {
            clearInterval(interval);
            
            // Ocultar la pantalla de carga después de completar
            setTimeout(() => {
                loaderContainer.style.opacity = '0';
                setTimeout(() => {
                    loaderContainer.style.display = 'none';
                    
                    // Mostrar los elementos con fade-in
                    const fadeElements = document.querySelectorAll('.fade-in');
                    fadeElements.forEach((element, index) => {
                        setTimeout(() => {
                            element.classList.add('appear');
                        }, 200 * index);
                    });
                }, 500);
            }, 500);
        }
    }, 100);
    
    // Cambiar el estilo del header al hacer scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
    
    // Formulario de contacto
    const contactForm = document.getElementById('form-contacto');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.btn-submit');
            submitBtn.classList.add('loading');
            
            // Simulación de envío de formulario
            setTimeout(() => {
                const formData = {
                    nombre: document.getElementById('nombre').value,
                    email: document.getElementById('email').value,
                    mensaje: document.getElementById('mensaje').value
                };
                
                console.log('Datos del formulario:', formData);
                
                // Aquí puedes agregar el código para enviar el formulario a un servicio como Formspree
                // o implementar tu propia lógica de backend
                
                // Resetear el formulario y mostrar mensaje de éxito
                contactForm.reset();
                submitBtn.classList.remove('loading');
                alert('¡Mensaje enviado con éxito! Te responderé lo antes posible.');
            }, 2000);
        });
    }
    
    // Animación al hacer scroll
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, observerOptions);
    
    // Observar todos los elementos con la clase fade-in
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
});