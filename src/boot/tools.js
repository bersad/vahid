import Vue from 'vue'


class Tools {
    constructor(){
        this.currency = 'تومان'
    }

    price(value){
        let val = Number(value)
        if(val > 999){
            return (val / 1000).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.')
        }else{
            return val
        }
    }
}


Vue.prototype.$tools = new Tools()