import Vue from 'vue'
import axios from 'axios'

Object.defineProperties(Vue.prototype, {
    $http: {
        get: function () {
            return axios
        }
    }
});
