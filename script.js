document.addEventListener('DOMContentLoaded', function () {
    var products = document.querySelectorAll('.product');
    var popup = document.getElementById('price-popup');
    var priceList = document.getElementById('price-list');
    var closeBtn = document.querySelector('.close-btn');

    products.forEach(function (product) {
        product.addEventListener('click', function () {
            var harga = this.getAttribute('data-harga');
            var hargaArray = harga.split(', ');
            priceList.innerHTML = '';
            hargaArray.forEach(function (item) {
                var li = document.createElement('li');
                li.textContent = item;
                priceList.appendChild(li);
            });
            popup.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    document.getElementById('order-form').addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var product = document.getElementById('product').value;
        var message = document.getElementById('message').value;
        var whatsappUrl = `https://wa.me/6281288571309?text=Nama:%20${encodeURIComponent(name)}%0AProduk:%20${encodeURIComponent(product)}%0APesan:%20${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });
});
