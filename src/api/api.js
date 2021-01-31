import Categories from './Categories'
import Properties from './Properties'
import Products from './Products'
import Filters from './Filters'
import Auth from './Auth'
import Brands from './Brands'



export default class Api {

    constructor() {
        this.Categories = new Categories()
        this.Properties = new Properties()
        this.Products = new Products()
        this.Filters = new Filters()
        this.Auth = new Auth()
        this.Brands = new Brands()
    }
    
}
