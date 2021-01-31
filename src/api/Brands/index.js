
import BaseService from 'src/assets/js/base.service'
const api = new BaseService()

export default class Brands{

    constructor(){

    }

    get() {
        return api.get('brands/index')
    }


    delete(id){
    	let data = {
    		request_id : id
    	}
    	return api.post('brands/destroy', data);
    }
    
    create(value){
    	return api.post('brands/create', value);
    }
    update(value){
    	return api.post('brands/update', value);
    }
}