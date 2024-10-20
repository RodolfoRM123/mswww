document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('icon-toggle');
    const menu = document.getElementById('menu'); // El div del menú
    const icon = document.getElementById('icon');
    const menuItemsText = document.querySelectorAll('#menu p'); // Selecciona todos los textos del menú
    const isMobile = window.matchMedia("(max-width: 640px)");

    function handleScreenChange(e) {
        if (e.matches) { // Si el dispositivo es móvil (menos de 640px)
          // Oculta el botón
          toggleButton.classList.add('hidden');
    
          // Asegúrate de que los divs se muestren
          menuItemsText.forEach((div) => {
            div.classList.remove('opacity-0'); // Mostrar divs
          });
        } else {
          // Mostrar el botón en pantallas grandes
          toggleButton.classList.remove('hidden');
    
          // Asegúrate de que los divs se oculten
          menuItemsText.forEach((div) => {
            div.classList.add('opacity-0'); // Ocultar divs
          });
        }
      }
    
      // Verifica si la media query coincide y agrega un listener para cambios de pantalla
      handleScreenChange(isMobile); // Ejecutar cuando la página cargue
      isMobile.addListener(handleScreenChange); 

    toggleButton.addEventListener('click', function () {
        // Alternar el estado del menú (abierto/cerrado)
        menu.classList.toggle('menu-open');

        // Si está abierto, mostramos los nombres; si está cerrado, los ocultamos con transiciones suaves
        menuItemsText.forEach((item) => {
            item.classList.toggle('opacity-0');
        });

        // Alternar el ícono del botón
        if (icon.classList.contains('bx-menu')) {
            icon.classList.remove('bx-menu');
            icon.classList.add('bx-x'); // Cambia al icono de cerrar
        } else {
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu'); // Cambia al icono de menú
        }
    });
});
