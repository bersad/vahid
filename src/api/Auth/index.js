
import BaseService from 'src/assets/js/base.service'
const api = new BaseService()

export default class Auth{

    constructor(){

    }
    login(data){
        return api.post('loginAdmin',data);
    }
}