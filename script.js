document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('download-btn');
    const toast = document.getElementById('toast');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            // No prevenimos el comportamiento por defecto para que la descarga ocurra
            
            // Mostrar la notificación de Toast
            toast.classList.add('show');
            
            // Ocultar la notificación después de 4 segundos
            setTimeout(() => {
                toast.classList.remove('show');
            }, 4000);
        });
    }
});
