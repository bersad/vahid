
import BaseService from 'src/assets/js/base.service'
const api = new BaseService()

export default class Products{

    constructor(){

    }

    get() {
        return api.get('products/index')
    }

    getProperties(productId) {
        let data = {
            product_id: productId
        }
        return api.get('products/getPropertys',data)
    }

    getFilters(productId) {
        let data = {
            product_id: productId
        }
        return api.get('products/getFilters',data)
    }

    createFilterForProduct(filters,productId){
        let data = {
            product_id: productId,
            filters: filters
        }

        return api.post('products/createFilterForProduct',data)
    }

    createPropertyForProduct(properties,productId){
        let data = {
            product_id: productId,
            properties: properties
        }

        return api.post('products/createPropertyForProduct',data)
    }

    getProductImageItems(productId){
        let data = {
            product_id: productId
        }

        return api.get('products/getImage',data)
    }

    

    delete(id){
    	
    }
    create(value){
        let data = {
            title: value.title,
            foreignTitle: value.foreignTitle,
            category:value.category,
            description:value.description,
            content:value.content,
            price:value.price,
            discount:value.discount,
            store:value.store,
            available:true,
            brand:value.brand
        }

        return api.post('products/create',data)
    }
    update(value){
        
    }
}