import ProductsService from "@/services/ProductsService";

export default {
    actions: {
        async getProducts(ctx, data) {
            try {
                const response = await ProductsService.getProducts(data.limit, data.page);
                ctx.commit('updateCatalog', response.data);
                ctx.commit('setTotalProducts', +response.headers['total-products']);
            } catch (e) {
                console.log (e.response)
            }

            // fetch('http://localhost:5555/api/products')
            //     .then(result => result.json())
            //     .then(data => {
            //         const products = [];
            //         for(let el of data){
            //             products.push(el);
            //         }
            //         ctx.commit('updateCatalog', products);
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     })
        },


    },
    mutations: {
        updateCatalog(state, products) {
            return state.catalogProducts = products;
        },
        setTotalProducts(state, total) {
            return state.totalProducts = total;
        }
    },
    state: {
        catalogProducts: [],
        totalProducts: null
    },
    getters: {
        catalogProducts(state) {
            return state.catalogProducts;
        },
        totalProducts(state) {
            return state.totalProducts
        },
        getProduct: (state) => id => {
            return state.catalogProducts.find(el => el._id === id) || {}
        }
    }
}