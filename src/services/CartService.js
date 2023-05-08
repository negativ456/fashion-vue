import axios from "axios";
import {API_URL} from "@/http";
//import $api from "../http"
export default class CartService {
    static async addProduct(product) {
        return axios.post(`${API_URL}/cart`, {...product}, {withCredentials: true})
    }
    static async getCartProducts() {
        return axios.get(`${API_URL}/cart`, {withCredentials: true})
    }
    static async updateCartProduct(quantity, productId) {
        return axios.put(`${API_URL}/cart/${productId}`, {quantity} ,{withCredentials: true})
    }
    static async deleteFromCart(productId) {
        return axios.delete(`${API_URL}/cart/${productId}`, {withCredentials: true})
    }
    static async clearCart() {
        return axios.delete(`${API_URL}/cart/clear`, {withCredentials: true})
    }

}