const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});












<script>
  function cambiarImagen(id, nuevaSrc, originalSrc) {
    const imagen = document.getElementById(id);
    if (imagen.src.includes(nuevaSrc)) {
      imagen.src = originalSrc;
    } else {
      imagen.src = nuevaSrc;
    }
  }
</script>
