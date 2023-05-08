import CartService from "@/services/CartService";

export default {
    actions: {
        async addProduct(ctx, product) {
            const products = ctx.getters.cartProducts;
            console.log (products)
            let find = products.find(el => el._id === product._id);
            if (find) {
                await CartService.updateCartProduct(product.quantity, find._id)
                //ctx.dispatch('putJson', {url: `http://localhost:5555/api/cart/${find._id}`, data: {quantity: product.quantity}});
                find.quantity = product.quantity;
                ctx.commit('increaseSum');
            } else {
                ctx.commit('addNewProduct', product);
                ctx.commit('increaseSum');
                await CartService.addProduct(product)
                // ctx.dispatch('postJson', {url: 'http://localhost:5555/api/cart', data: product})
                //     .then(data => {
                //         if (data.result !== 1) {
                //             ctx.commit('deleteProduct', product);
                //         }
                //     });
            }
        },
        async getCartProducts(ctx) {
            const response = await CartService.getCartProducts();
            console.log (response.data)
            ctx.commit('updateProducts', response.data);
            ctx.dispatch('summaryPrice');
            // ctx.dispatch('getJson', {url: 'http://localhost:5555/api/cart'})
            //     .then(data => {
            //         const products = [];
            //         console.log (data)
            //         for(let el of data.contents){
            //             products.push(el);
            //         }
            //         ctx.commit('updateProducts', products);
            //         ctx.dispatch('summaryPrice');
            //     })
        },
        async deleteFromCart(ctx, product) {
            ctx.commit('deleteProduct', product);
            ctx.commit('decreaseSum', product.price * product.quantity);
            await CartService.deleteFromCart(product._id);
            // ctx.dispatch('deleteJson', {url: `http://localhost:5555/api/cart/${product.id_product}`, data: product})
            //     .then(data => {
            //         if (data.result !== 1) {
            //             ctx.commit('addNewProduct', product);
            //         }
            //     })
        },
        async clearCart(ctx) {
            ctx.commit('clearCart');
            ctx.commit('clearSum');
            await CartService.clearCart();
            // ctx.dispatch('deleteJson', {url: 'http://localhost:5555/api/cart/clear', data: {}})
            //     .then(data => {
            //         if (data.result !== 1) {
            //             console.log ('error');
            //         }
            //     })
        },
        summaryPrice(ctx) {
            const products = ctx.getters.cartProducts;
            let sum = 0;
            //const summary = products.reduce((sum, item) => sum + (item.quantity * item.price));
            for (const el of products) {
                sum += el.quantity * el.price;
            }
            ctx.commit('initializeSum', sum);
        }
    },
    mutations: {
        updateProducts(state, products) {
            state.cartProducts = products;
        },
        addNewProduct(state, product) {
            state.cartProducts.push(product);
        },
        deleteProduct(state, product) {
            state.cartProducts.splice(state.cartProducts.indexOf(product), 1);
        },
        initializeSum(state, sum) {
            state.sum = sum;
        },
        increaseSum(state) {
            let sum = 0;
            for (let i = 0; i < state.cartProducts.length; i++) {
                sum += state.cartProducts[i].quantity * state.cartProducts[i].price;
            }
            state.sum = sum;
            //state.sum = data.price * data.quantity;
        },
        decreaseSum(state, sum) {
            state.sum -= sum;
        },
        clearCart(state) {
            state.cartProducts.length = 0;
        },
        clearSum(state) {
            state.sum = 0;
        }

    },
    state: {
        cartProducts: [],
        sum: 0
    },
    getters: {
        cartProducts(state) {
            return state.cartProducts;
        },
        sumPrice(state) {
            return state.sum;
        },

    },
}