
import BaseService from 'src/assets/js/base.service'
const api = new BaseService()

export default class Categories{

    constructor(){

    }

    get() {
        return api.get('categories/index')
    }
    delete(id){
    	let data = {
    		request_id : id
    	}
    	return api.post('categories/destroy', data);
    }
    create(value){
        let data = {
            name : value.name,
            foreignName: value.foreignName,
            parent: value.parent
          }
    	return api.post('categories/create', data);
    }
    update(value){
        let data = {
            name : value.name,
            foreignName: value.foreignName,
            parent: value.parent,
            request_id: value.request_id
          }
    	return api.post('categories/update', data);
    }
}