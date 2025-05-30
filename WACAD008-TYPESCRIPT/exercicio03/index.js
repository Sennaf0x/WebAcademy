var TV = /** @class */ (function () {
    function TV(model, manufacturer, value, resolution, size) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.value = value;
        this.resolution = resolution;
        this.size = size;
    }
    return TV;
}());
var Cellphone = /** @class */ (function () {
    function Cellphone(model, manufacturer, value, memory) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.value = value;
        this.memory = memory;
    }
    return Cellphone;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle(model, manufacturer, value, wheelSize) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.value = value;
        this.wheelSize = wheelSize;
    }
    return Bicycle;
}());
var Cart = /** @class */ (function () {
    function Cart() {
        this.products = [];
    }
    Cart.prototype.addProduct = function (product) {
        this.products.push(product);
        this.updateStats();
        this.renderProducts();
    };
    Cart.prototype.removeProduct = function (index) {
        this.products.splice(index, 1);
        this.updateStats();
        this.renderProducts();
    };
    Cart.prototype.getTotalValue = function () {
        return this.products.reduce(function (total, product) { return total + product.value; }, 0);
    };
    Cart.prototype.getProductCount = function () {
        return this.products.length;
    };
    Cart.prototype.updateStats = function () {
        var totalValue = this.getTotalValue();
        var productCount = this.getProductCount();
        document.getElementById('productCount').innerText = productCount.toString();
        document.getElementById('totalValue').innerText = "R$".concat(totalValue.toFixed(2));
    };
    Cart.prototype.renderProducts = function () {
        var _this = this;
        var productList = document.getElementById('productList');
        productList.innerHTML = '';
        this.products.forEach(function (product, index) {
            var listItem = document.createElement('li');
            listItem.innerText = "".concat(product.model, " - ").concat(product.manufacturer, " - R$").concat(product.value.toFixed(2));
            var removeButton = document.createElement('button');
            removeButton.innerText = 'Remover';
            removeButton.onclick = function () { return _this.removeProduct(index); };
            listItem.appendChild(removeButton);
            productList.appendChild(listItem);
        });
    };
    return Cart;
}());
var cart = new Cart();
document.getElementById('productForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var productType = document.getElementById('productType').value;
    var model = document.getElementById('model').value;
    var manufacturer = document.getElementById('manufacturer').value;
    var value = parseFloat(document.getElementById('value').value);
    var product;
    if (productType === 'tv') {
        var resolution = document.getElementById('resolution').value;
        var size = parseInt(document.getElementById('size').value);
        product = new TV(model, manufacturer, value, resolution, size);
    }
    else if (productType === 'celular') {
        var memory = document.getElementById('memory').value;
        product = new Cellphone(model, manufacturer, value, memory);
    }
    else {
        var wheelSize = document.getElementById('wheelSize').value;
        product = new Bicycle(model, manufacturer, value, wheelSize);
    }
    cart.addProduct(product);
});
document.getElementById('productType').addEventListener('change', function (event) {
    var selectedType = event.target.value;
    document.getElementById('tvFields').style.display = selectedType === 'tv' ? 'block' : 'none';
    document.getElementById('cellFields').style.display = selectedType === 'celular' ? 'block' : 'none';
    document.getElementById('bikeFields').style.display = selectedType === 'bicicleta' ? 'block' : 'none';
});
