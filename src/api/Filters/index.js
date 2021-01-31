
import BaseService from 'src/assets/js/base.service'
const api = new BaseService()

export default class Filters{

    constructor(){

    }
    get(category_id) {
        return api.get(`propertys/indexFilter?category_id=${category_id}`)
    }
    
    create(filters,category_id){
        let data = {
            category_id : category_id,
            filters: filters
          }
    	return api.post('propertys/createFilter', data);
    }
}