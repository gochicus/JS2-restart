const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://placehold.it/200x150'
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error));
        },
        addProduct(){
            document.querySelector('place').insertAdjacentHTML("beforeend", 'good-list');
        }
    },
    mounted(){
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
        this.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            })
    }
});

Vue.component('good-list', {
    template: '<div class = list > <img src="https://placehold.it/200x150" <p>{{this.price}}</p> <p>{{this.name}}</p> </div>'


});