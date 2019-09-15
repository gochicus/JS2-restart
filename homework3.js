

const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;
let request = (API) => {
    return fetch(`${API}/catalogData.json`)
        .then(result => result.json())

        .then(data => {
            this.data = [...data];
        })
        .catch(error => console.log("error"));
};
// console.log(request.data);
// // fetch(`${API}/catalogData.json`)
//     .then(result => result.json())
//     .then( data => {console.log(data)});

let buy = document.querySelectorAll(".buy-btn");

// buy.addEventListener("click",() => {return `${result}`} );
// buy.addEventListener("contextmenu", () => { return});

class Cart {
    constructor(items) {
        this.items = this._cartAdd(buy);
    }
    _cartAdd() {
        let item = buy.currentTarget;
        return this.items.push(item);

    }
    // _CartDel() {
    //     let item = buy.currentTarget;
    //     return this.items.pop();
    //
    // }
    _cartRender() {
        this.items.forEach(el => {return `<div class="new-product">${el}</div>`});
    }


}

class Products {
    constructor(container = `.products`) {
        this.container = container;
        this.data = [];
        this.allProduct = [];
        this._getProducts()
            .then(() => this._render());
    }

    calcSum() {
        // let result = 0;
        // for (let el of this.allProduct){
        //     result += el.price;
        // }
        // // console.log(result);
        // return result
        return this.allProduct.reduce((accum, item) => accum + item.price, 0);
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .then(data => {
                this.data = [...data];
            })
            .catch(error => console.log(error));
    }

    _render() {
        const block = document.querySelector(this.container);
        for (let el of this.data) {
            const product = new ProductItem(el);
            this.allProduct.push(product);
            block.insertAdjacentHTML('beforeend', product.render())
        }
    }
}

class ProductItem {
    constructor(el, img = 'https://placehold.it/200x150') {
        this.product_name = el.product_name;
        this.id_product = el.id_product;
        this.price = el.price;
        this.img = img;
    }

    render() {
        return `<div class="product-item">
                 <img src="${this.img}" alt="${this.product_name}">
                 <div class="desc">
                     <h3>${this.product_name}</h3>
                     <p>${this.price}</p>
                     <button class="buy-btn">Купить</button>
                 </div>
             </div>`
    }
}
const products = new Products();
let result = new Cart();
