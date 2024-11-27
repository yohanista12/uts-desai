document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Ambil data dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validasi form
    if (name && email && message) {
        alert('Pesan berhasil dikirim!');
    } else {
        alert('Harap lengkapi semua kolom.');
    }
});