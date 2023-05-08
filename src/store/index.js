import { createStore } from 'vuex';
import cartItem from "@/store/modules/cartItem";
import catalogItem from "@/store/modules/catalogItem";
import authorization from "@/store/modules/authorization";

const store = createStore({
    actions: {
        putJson(ctx, data) {
            return fetch(data.url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data.data)
            }).then(result => result.json())
                .catch(error => {
                    console.log(error);
                });
        },
        postJson(ctx, data) { // data: { url: string, data: Object }
            return fetch(data.url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data.data)
            }).then(result => result.json())
                .catch(error => {
                    console.log (error);
                });
        },
        getJson(ctx, data) {
            return fetch(data.url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        deleteJson(ctx, data) {
            return fetch(data.url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data.data)
            }).then(result => result.json())
                .catch(error => {
                    console.log (error);
                });
        },
        sendEmail(ctx, email) {
            ctx.dispatch('postJson', {url: 'http://localhost:5555/api/subscribe', data: {email: email}})
                .then(data => {
                    if (data.result !== 1) {
                        console.log (data)
                    }
                })
        }
    },
    state: {
      ip: "http://localhost",
      port: "5555"
    },

    modules: {
        cartItem, catalogItem, authorization
    }
})

export default store;