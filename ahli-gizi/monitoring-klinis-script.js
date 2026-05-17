document.querySelectorAll('.sidebar-menu a').forEach(item => {
    item.addEventListener('click', function () {

        document
            .querySelectorAll('.sidebar-menu a')
            .forEach(el => el.classList.remove('active'));

        this.classList.add('active');

    });
});

document.querySelector('.upload-box').addEventListener('click', () => {
    alert('Upload Foto Makanan');
});

document.querySelector('.btn-patient').addEventListener('click', () => {
    alert('Tambah Pasien Baru');
});
