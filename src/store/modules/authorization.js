import AuthService from "@/services/AuthService";
import axios from "axios";
import {API_URL} from "@/http";

export default {
    actions: {
        async login(ctx, data) {
            try {
                const response = await AuthService.login(data.email, data.password);
                console.log (response);
                localStorage.setItem('token', response.data.accessToken);
                ctx.commit('setAuth', true);
                ctx.commit('setUser', response.data.user);
            } catch (e) {
                console.log (e.response?.data?.message)
            }
        },
        async registration(ctx, data) {
            try {
                const response = await AuthService.registration(data.email, data.password);
                console.log (response);
                localStorage.setItem('token', response.data.accessToken);
                ctx.commit('setAuth', true);
                ctx.commit('setUser', response.data.user);
            } catch (e) {
                console.log (e.response?.data?.message)

            }
        },
        async logout(ctx) {
            try {
                await AuthService.logout();
                localStorage.removeItem('token');
                ctx.commit('setAuth', false);
                ctx.commit('setUser', {});
            } catch (e) {
                console.log (e.response?.data?.message);
            }
        },
        async checkAuth(ctx) {
            try {
                const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true});
                console.log (response);
                localStorage.setItem('token', response.data.accessToken);
                ctx.commit('setAuth', true);
                ctx.commit('setUser', response.data.user);
            } catch (e) {
                console.log (e.response?.data?.message);
            }
        }
    },
    mutations: {
        setAuth(state, bool) {
            state.isAuth = bool;
        },
        setUser(state, user) {
            state.user = user;
        }
    },
    state: {
        user: {},
        isAuth: false
    },
    getters: {
        getAuth(state) {
            return state.isAuth;
        },
        getUser(state) {
            return state.user;
        }
    }
}