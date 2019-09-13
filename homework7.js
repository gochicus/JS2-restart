Vue.component('cart', {
    data() {
        return {
            showCart: false,
            cartUrl: '/getBasket.json',
            imgCart: 'https://placehold.it/50x100',
            cartItems: [],
        }
    },
    methods: {
        addProduct(product) {
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find) {
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                    .then(data => {
                        if (data.result) {
                            find.quantity++;
                        }
                    })
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$parent.postJson(`/api/cart`, prod)
                    .then(data => {
                        if (data.result) {
                            this.cartItems.push(prod);
                        }
                    })
            }


        },
        remove(product) {
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            this.$parent.postJson(`/api/cart/${find.id_product}`)
                .then(data => {
                    if (data.result) {
                        if (product.quantity > 1) {
                            product.quantity--
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(product), 1)
                        }
                    }
                })
        },
    },
    mounted() {
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for (let el of data.contents) {
                    this.cartItems.push(el);
                }
            });
    },
});

