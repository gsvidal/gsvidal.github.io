// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
  const topicsTitle = document.querySelectorAll('.topics-title');
  const topicsInfo = document.querySelectorAll('.topics-info');

  // Verificar que los elementos existen
  if (topicsTitle.length === 0 || topicsInfo.length === 0) {
    console.warn('No se encontraron elementos topics-title o topics-info');
    return;
  }

  for (let i = 0; i < topicsTitle.length; i++) {
    topicsTitle[i].addEventListener('click', function (e) {
      e.preventDefault(); // Prevenir comportamiento por defecto
      console.log('click on : ', this);

      if (this.classList.contains('topics-title--ready')) {
        if (topicsInfo[i]) {
          topicsInfo[i].classList.toggle('showHide');
        }
      }
    });
  }
});
