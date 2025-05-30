interface Product {
    model: string;
    manufacturer: string;
    value: number;
}

class TV implements Product {
    constructor(
        public model: string,
        public manufacturer: string,
        public value: number,
        public resolution: string,
        public size: number
    ) {}
}

class Cellphone implements Product {
    constructor(
        public model: string,
        public manufacturer: string,
        public value: number,
        public memory: string
    ) {}
}

class Bicycle implements Product {
    constructor(
        public model: string,
        public manufacturer: string,
        public value: number,
        public wheelSize: string
    ) {}
}

class Cart<T extends Product> {
    private products: T[] = [];

    addProduct(product: T): void {
        this.products.push(product);
        this.updateStats();
        this.renderProducts();
    }

    removeProduct(index: number): void {
        this.products.splice(index, 1);
        this.updateStats();
        this.renderProducts();
    }

    getTotalValue(): number {
        return this.products.reduce((total, product) => total + product.value, 0);
    }

    getProductCount(): number {
        return this.products.length;
    }

    private updateStats(): void {
        const totalValue = this.getTotalValue();
        const productCount = this.getProductCount();

        document.getElementById('productCount')!.innerText = productCount.toString();
        document.getElementById('totalValue')!.innerText = `R$${totalValue.toFixed(2)}`;
    }

    renderProducts(): void {
        const productList = document.getElementById('productList') as HTMLUListElement;
        productList.innerHTML = '';

        this.products.forEach((product, index) => {
            const listItem = document.createElement('li');
            listItem.innerText = `${product.model} - ${product.manufacturer} - R$${product.value.toFixed(2)}`;
            const removeButton = document.createElement('button');
            removeButton.innerText = 'Remover';
            removeButton.onclick = () => this.removeProduct(index);
            listItem.appendChild(removeButton);
            productList.appendChild(listItem);
        });
    }
}

const cart = new Cart<Product>();

document.getElementById('productForm')!.addEventListener('submit', (event) => {
    event.preventDefault();

    const productType = (document.getElementById('productType') as HTMLSelectElement).value;
    const model = (document.getElementById('model') as HTMLInputElement).value;
    const manufacturer = (document.getElementById('manufacturer') as HTMLInputElement).value;
    const value = parseFloat((document.getElementById('value') as HTMLInputElement).value);

    let product: Product;

    if (productType === 'tv') {
        const resolution = (document.getElementById('resolution') as HTMLInputElement).value;
        const size = parseInt((document.getElementById('size') as HTMLInputElement).value);
        product = new TV(model, manufacturer, value, resolution, size);
    } else if (productType === 'celular') {
        const memory = (document.getElementById('memory') as HTMLInputElement).value;
        product = new Cellphone(model, manufacturer, value, memory);
    } else {
        const wheelSize = (document.getElementById('wheelSize') as HTMLInputElement).value;
        product = new Bicycle(model, manufacturer, value, wheelSize);
    }

    cart.addProduct(product);
});

document.getElementById('productType')!.addEventListener('change', (event) => {
    const selectedType = (event.target as HTMLSelectElement).value;

    document.getElementById('tvFields')!.style.display = selectedType === 'tv' ? 'block' : 'none';
    document.getElementById('cellFields')!.style.display = selectedType === 'celular' ? 'block' : 'none';
    document.getElementById('bikeFields')!.style.display = selectedType === 'bicicleta' ? 'block' : 'none';
});