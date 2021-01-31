
import BaseService from 'src/assets/js/base.service'
const api = new BaseService()

export default class Properties{

    constructor(){

    }
    get(category_id) {
        return api.get(`propertys/index?category_id=${category_id}`)
    }
    
    create(propertys,category_id){
        let data = {
            category_id : category_id,
            propertys: propertys
          }
    	return api.post('propertys/create', data);
    }

    getCategories(){
        return api.get('propertys/getCategory')
    }
}