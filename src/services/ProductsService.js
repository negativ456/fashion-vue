import axios from "axios";
import {API_URL} from "@/http";

export default class ProductsService {
    static async getProducts(limit, page= 1) {
        return axios.get(`${API_URL}/products`, {
            withCredentials: true,
            params: {
                limit,
                page
            }
        })
    }
}