function mostrarInfo(servicio) {
    let infoBox = document.getElementById('info-' + servicio);
    if (infoBox.style.display === 'none' || infoBox.style.display === '') {
        document.querySelectorAll('.info-box').forEach(box => box.style.display = 'none');
        infoBox.style.display = 'block';
    } else {
        infoBox.style.display = 'none';
    }
}