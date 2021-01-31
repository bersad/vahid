import axios from 'axios';
import {
    Loading,
    Dialog,
    // optional!, for example below
    // with custom spinner
    QSpinnerCube
  } from 'quasar'


var BaseUrl = '';

export default class BaseService {

    constructor() {
        BaseUrl = 'https://ariaeestore.com/shop/api/v1/';

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Accept'] = 'application/json';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = window.location.origin;
        //axios.defaults.baseURL = BaseUrl;
    }
    get(url,data) {
        Loading.show({ spinner: QSpinnerCube })
        return axios.get(BaseUrl + url , { params : data })
            .then(response => {
                Loading.hide()
                return response
            })
            .catch(error => {
                Loading.hide()
                Dialog.create({
                    title: 'خطا '+error.response.status,
                    message: error.response.data.data
                })
            });
    }

    post(url, data) {
        Loading.show({ spinner: QSpinnerCube })
        return axios.post(BaseUrl + url, data)
        .then(response => {
            Loading.hide()
            if(response.data.result == 'success'){
                return response
            }else{
                Dialog.create({
                    title: 'خطای سرور',
                    message: response.data.message
                })
            }
            
        })
        .catch(error => {
            Loading.hide()
            Dialog.create({
                title: 'خطای  '+error.response.status,
                message: error.response.data.message
            })
        });
    }

    async put(url, data) {
        try {
            return await axios.put(BaseUrl + '/v1' + url, data);
        } catch (error) {
            if(error.response.status === 401){
                store.dispatch('logout').then(() => {
                  window.location.href = window.siteUrl + "/logout";
                });
            }
        }
    }

    

    async delete(url, data) {
        try {
            return await axios.delete(BaseUrl + '/v1' + url, data);
        } catch (error) {
            if(error.response.status === 401){
                store.dispatch('logout').then(() => {
                  window.location.href = window.siteUrl + "/logout";
                });
            }
        }
    }
    async patch(url, data) {
        try {
            return await axios.patch(BaseUrl + '/api/v1' + url, data);
        } catch (error) {
            if(error.response.status === 401){
                store.dispatch('logout').then(() => {
                  window.location.href = window.siteUrl + "/logout";
                });
            }
        }
    }
}
