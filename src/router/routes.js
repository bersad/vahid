/* Admin */
import AdminLayout from '../layouts/Admin.vue'
import AdminIndex from '../pages/Admin/Index/Index.vue'
import Login from '../pages/Admin/Login/Login.vue'
import Categories from '../pages/Admin/Categories/Categories.vue'
import Properties from '../pages/Admin/Properties/Properties.vue'
import Products from '../pages/Admin/Products/Products.vue'
import Filters from '../pages/Admin/Filters/Filters.vue'
import Table from '../pages/Tables.vue'
import Product from '../pages/Admin/Products/Product/Product.vue'
import Brands from '../pages/Admin/Brands/Brands.vue'

/* Customer */
import MainLayout from '../layouts/MainLayout.vue'
import Home from '../pages/customer/Home/Home.vue'
import ProductList from '../pages/customer/ProductList/ProductList.vue'
import ProductView from '../pages/customer/ProductView/ProductView.vue'

/* Admin */
const routes = [{
        path: '/admin',
        component: AdminLayout,
        children: [
            { path: '', component: AdminIndex, meta: { title: 'Index', requiresAuth: true } },
            { path: 'Categories', component: Categories, meta: { title: 'categories', requiresAuth: true } },
            { path: 'Products', component: Products, meta: { title: 'products', requiresAuth: true } },
            { path: 'Properties', component: Properties, meta: { title: 'properties', requiresAuth: true } },
            { path: 'Filters', component: Filters, meta: { title: 'filters', requiresAuth: true } },
            { path: '/Tables', component: Table, meta: { title: 'Table', requiresAuth: true } },
            { path: 'Products/create', component: Product, meta: { title: 'productCreate', requiresAuth: true } },
            { path: 'Brands', component: Brands, meta: { title: 'brands', requiresAuth: true } },

        ]
    },
    { path: '/adminLogin', component: Login, meta: { title: 'Login', requiresAuth: false } },
    {
        path: '/',
        component: MainLayout,
        children: [
            { path: '', component: Home, meta: { title: 'Home' } },
            { path: 'productlist', component: ProductList, meta: { title: 'Product-List' } },
            { path: 'productview', component: ProductView, meta: { title: 'Product-View' } }
        ]
    }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    })
}



export default routes