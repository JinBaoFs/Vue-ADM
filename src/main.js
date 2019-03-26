import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import 'amfe-flexible';
import axios from "axios";
Vue.prototype.$axios = axios;

import "./less/reset.less";


new Vue({
    el: '#app',
    // template:'<App/>'
    render(create) {
        return create(App);
    },

    //将创建的路由注入到vue实例里
    router,

    // 将创建好的store注入到Vue根实例里
    store,
});
