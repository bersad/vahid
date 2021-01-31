<template>
  <div>
    <q-dialog v-model="showProperties" full-width>
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ $t('admin.properties') }}</div>
        </q-card-section>

        <q-separator />

        <q-card-section>

          <q-card class="q-mb-sm" v-for="(item,index) in properties" :key="index">
            <q-card-section>
              <div class="text-h6">
                {{ item.title }}
              </div>
            </q-card-section>
            <q-card-section class="row">
            <div class="col-4 q-pa-md" v-for="(item2,index2) in item.children" :key="index2">
              <q-input v-if="item2.text == 'input' || item2.text == 'textarea'" v-model="item2.value" 
              :label="item2.name" />

              <div v-if="item2.text == 'radio'">
                <label>{{ item2.name }}:</label>
                <q-radio 
                  v-model="item2.value" 
                  val="true"
                  :label="$t('admin.have')" 
                  color="teal" />

                <q-radio 
                  v-model="item2.value" 
                  val="false"
                  :label="$t('admin.haveNot')" 
                  color="teal" />
              </div>
            </div>
            </q-card-section>
          </q-card>

        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat :label="$t('admin.close')" color="primary" v-close-popup />
          <q-btn flat :label="$t('admin.save')" @click="createPropertyForProduct()" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="showFilters" full-width>
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ $t('admin.filters') }}</div>
        </q-card-section>

        <q-separator />

        <q-card-section>

          <q-card class="q-mb-sm" v-for="(item,index) in filters" :key="index">
            <q-card-section>
              <div class="text-h6">
                {{ item.title }}
              </div>
            </q-card-section>
            <q-card-section class="row">
            <div class="col-md-2 q-pa-md" v-for="(item2,index2) in item.children" :key="index2">
              
              <q-checkbox dark keep-color v-model="item2.value" :label="item2.name" color="teal"/>
              <span :style="'background:'+item2.hashColor" v-if="item.field == 'color'" class="color-palette"></span>
            </div>
            </q-card-section>
          </q-card>

        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat :label="$t('admin.close')" color="primary" v-close-popup />
          <q-btn flat :label="$t('admin.save')" color="primary" v-close-popup @click="createFilterForProduct"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="showImages" full-width>
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ $t('admin.images') }}</div>
        </q-card-section>

        <q-separator />

        <q-card-section>

          <q-card class="q-mb-sm">
            <q-card-section>
              <images 
                :product_id="product_id"
              />
            </q-card-section>
          </q-card>

        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat :label="$t('admin.close')" color="primary" v-close-popup />
          <q-btn flat :label="$t('admin.save')" color="primary" v-close-popup @click="createFilterForProduct"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-page class="q-pa-sm">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-indigo-8">
            {{ $t('admin.products') }}
          </div>
          <div class="text-subtitle2">
            {{ $t('admin.productCategoriesManagmentMessage') }}
          </div>
          <q-btn color="green" to="products/create" :label="$t('admin.create')"/>
        </q-card-section>
        <q-separator></q-separator>
        <div class="row">
          <div class="col">
            <products-table
              v-if="products != []"
              :data="products"
              :columns="columns"
              color="primary"
              hide-bottom
              @deleteRow="deleteRow"
              @selectRow="selectRow"
              @editRow="editRow"
              @properties="getProperties"
              @filters="getFilters"
              @images="getImages"
            />
          </div>
        </div>
      </q-card>
    </q-page>
  </div>
</template>

<script>
import ProductsTable from '../../../components/ProductsTable'
import Images from '../../../components/Images'
import { Dialog } from 'quasar'

export default {
  name: "Products",
  components:{
    'products-table': ProductsTable,
    Images
  },
  data() {
    return {
      columns: [
        {
          name: 'title',
          required: true,
          label: this.$t('admin.name'),
          align: 'left',
          field: row => row.title,
          sortable: true,
          cursor:true
        },
        {
          name: 'foreignTitle',
          required: true,
          label: this.$t('admin.foreignTitle'),
          align: 'left',
          field: row => row.foreignTitle,
          sortable: true,
          cursor:true
        },
        {
          name: 'category',
          required: true,
          label: this.$t('admin.category'),
          align: 'left',
          field: row => row.category_name,
          sortable: true,
          cursor:true
        },
        {
          name: 'price',
          required: true,
          label: this.$t('admin.price'),
          align: 'left',
          field: row => row.prices[0].price,
          sortable: true,
          cursor:true,
          price:true
        },
        { 
          name: 'actions', 
          align: 'center', 
          label: this.$t('admin.actions'),
          type: 'actions'
        },
      ],
      products:[],
      properties:null,
      showProperties:false,
      showFilters:false,
      category_properties:null,
      filters:null,
      product_id:null,
      showImages:false
    }
  },
  watch:{
  },
  methods:{
    deleteRow(item){
      // this.confirmModalShow = true
      // this.category_id = item.row.id
    },
    async selectRow(item){
      
    },
    editRow(){

    },
    async getProducts(){
      let service = await this.$api.Products.get();
      this.products = service.data.data;
    },
    async getProperties(item){
      let response = await this.$api.Products.getProperties(item.row._id);
      this.properties = response.data;
      this.showProperties = true
      this.product_id = item.row._id
    },
    async getFilters(item){
      let response = await this.$api.Products.getFilters(item.row._id);
      this.filters = response.data;
      this.showFilters = true
      this.product_id = item.row._id
    },
    async createFilterForProduct(){
      let response = await this.$api.Products.createFilterForProduct(this.filters,this.product_id);
      if(response.data.result == 'success'){
        this.$q.dialog({
          title: this.$t('admin.success'),
          message: this.$t('admin.successMessage')
        })
      }
    },
    getImages(item){
      this.showImages = true
      this.product_id = item.row._id
    },
    async createPropertyForProduct(){
      let response = await this.$api.Products.createPropertyForProduct(this.properties,this.product_id);
      if(response.data.result == 'success'){
        this.$q.dialog({
          title: this.$t('admin.success'),
          message: this.$t('admin.successMessage')
        })
      }
    }
  },
  created(){
    this.getProducts();
    
  }
}
</script>

<style scoped>
  .color-palette{
    padding-right: 15px;
    margin-left: 5px;
    padding-left: 6px;
    border-radius: 50%;
  }
</style>
