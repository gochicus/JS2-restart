let burgerValue = {
    sizePrice:{big:100, small:50},
    toppingPrice:{cheesw:10,salad:20,potato:15},
    spicesPrice:{pepper:15,mayonnaise:20},
    sizeCals:{big:40, small:20},
    toppingCals:{cheesw:20,salad:5,potato:10},
    spicesCals:{pepper:0,mayonnaise:5},
};
 class Burger {
    constructor(size,topping,spices) {
        this.size = size;
        this.topping = topping;
        this.spices = spices;
        this.price = 0;
        this.cals = 0;
        this._countPrice();
        this._countCals();
        this._render();
    }
     _countPrice() {
        let count = burgerValue.sizePrice.size + burgerValue.toppingPrice.topping + burgerValue.spicesPrice.spices;
        return this.price = count;
    }
    _countCals() {
        let count = burgerValue.sizeCals.size + burgerValue.toppingCals.topping + burgerValue.spicesCals.spices;
        return this.cals = count;
    }
    _render() {
        let rendered = document.getElementsByTagName('button').insertAdjacentHTML("afterend", `<div>  ${this.price}</div> <div>${this.price}</div>`);
    }
 }
const choice = new Burger();
document.getElementsByTagName('button').addEventListener(onclick,choice);
