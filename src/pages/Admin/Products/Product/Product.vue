<template>
  <q-page>
    <div class="row">
      <div class="col-12">
        <div class="q-pa-sm">
          <q-card>
            <q-card-section>
              <div class="text-h6 text-indigo-8">
                {{ $t('admin.productCreate') }}
              </div>
              <div class="text-subtitle2">
                {{ $t('admin.productCreateMessage') }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-9">
            <q-page class="q-pa-sm">
              
              <q-card class="q-mt-sm q-pb-sm">
                <q-card-section class="bg-primary text-white">
                  <div class="text-h6">{{ $t('admin.productName') }}</div>
                </q-card-section>
                <div class="row">
                  <div class="col-6 q-pa-sm q-pr-lg q-pl-lg">
                    <q-input v-model="title" :label="$t('admin.name')" />
                  </div>
                  <div class="col-6 q-pa-sm q-pr-lg q-pl-lg">
                    <q-input v-model="foreignTitle" :label="$t('admin.latinName')" />
                  </div>
                </div>
              </q-card>  
              <q-card class="q-mt-sm q-pb-sm">
                <q-card-section class="bg-primary text-white">
                  <div class="text-h6">
                    {{ $t('admin.productCategory') }}
                    {{ $t('admin.and') }}
                    {{ $t('admin.brand') }}
                  </div>
                </q-card-section>
                <div class="row">
                  <div class="col-6 q-pa-sm q-pr-lg q-pl-lg">
                    <q-select
                      v-model="selectedCategory" 
                      :options="categories"
                      option-label="name"
                      :label="$t('admin.productCategory')"
                    />
                  </div>
                  <div class="col-6 q-pa-sm q-pr-lg q-pl-lg">
                    <q-select
                      v-model="selectedBrand‌" 
                      :options="brands"
                      option-label="name"
                      :label="$t('admin.brand')"
                    />
                  </div>
                </div>
              </q-card>
              <q-card class="q-mt-sm q-pb-sm">
                <q-card-section class="bg-primary text-white">
                  <div class="text-h6">{{ $t('admin.smallDiscription') }}</div>
                </q-card-section>
                <div class="row">
                  <div class="col-12">
                    <editor 
                      @change="setDiscription"
                    />
                  </div>
                </div>
              </q-card> 
              <q-card class="q-mt-sm q-pb-sm">
                <q-card-section class="bg-primary text-white">
                  <div class="text-h6">{{ $t('admin.fullDiscription') }}</div>
                </q-card-section>
                <div class="row">
                  <div class="col-12">
                    <editor 
                      @change="setContent"
                    />
                  </div>
                </div>
              </q-card>

              <q-card class="q-mt-sm q-pb-sm">
                <q-card-section class="bg-primary text-white">
                  <div class="text-h6">{{ $t('admin.price') }}</div>
                </q-card-section>
                <div class="row">
                  <div class="col-12">
                    <vertical-tabs 
                      :tabs="tabs"
                      :tab="tab"
                    >
                      <template v-slot:normalPrice>
                        <q-input v-model="price" :label="$t('admin.price')"/>
                      </template>
                      <template v-slot:byColor>
                        <div class="row">
                          <div class="col-12" v-for="(item,index) in priceByColor[0].children" :key="index">
                            <div class="row">
                              <div class="col-4 q-pa-sm">
                                <q-input v-model="item.name" :label="$t('admin.colorName')"/>
                              </div>
                              <div class="col-4 q-pa-sm">
                                <q-input
                                  :label="$t('admin.color')"
                                  v-model="item.hashCode"
                                  class="my-input"
                                >
                                  <template v-slot:append>
                                    <q-icon name="colorize" class="cursor-pointer">
                                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                                        <q-color v-model="item.hashCode" />
                                      </q-popup-proxy>
                                    </q-icon>
                                  </template>
                                </q-input>
                              </div>
                              <div class="col-3 q-pa-sm">
                                <q-input v-model="item.price" :label="$t('admin.price')"/>
                              </div>
                              <div class="col-1 q-pa-sm" v-if="index != 0">
                                <q-btn round color="red" icon="delete" class="delete-child-property" @click="deletePriceByColor(index)"/>
                              </div>
                              
                            </div>
                            
                          </div>
                          <q-btn color="secondary" :label="$t('admin.create')" @click="addPriceByColor()"/>
                        </div>
                      </template>
                      <template v-slot:bySize>
                        <div class="row">
                          <div class="col-12" v-for="(item,index) in priceBySize[0].children" :key="index">
                            <div class="row">
                              <div class="col-4 q-pa-sm">
                                <q-input v-model="item.name" :label="$t('admin.size')"/>
                              </div>
                              <div class="col-4 q-pa-sm">
                                <q-input v-model="item.price" :label="$t('admin.price')"/>
                              </div>
                              <div class="col-1 q-pa-sm" v-if="index != 0">
                                <q-btn round color="red" icon="delete" class="delete-child-property" @click="deletePriceBySize(index)"/>
                              </div>
                              
                            </div>
                            
                          </div>
                          <q-btn color="secondary" :label="$t('admin.create')" @click="addPriceBySize()"/>
                        </div>
                      </template>
                      <template v-slot:discount>
                        <q-input v-model="discount" :label="$t('admin.discount')"/>
                      </template>
                      <template v-slot:store>
                        <q-input v-model="store" :label="$t('admin.store')"/>
                      </template>
                    </vertical-tabs>
                  </div>
                </div>
              </q-card>
                  
              
            </q-page>
          </div>
          <div class="col-3">
            <q-page class="q-pa-sm">
              <q-card class="q-mt-sm q-pb-sm">
                <q-card-section class="bg-primary text-white">
                  <div class="text-h6">{{ $t('admin.setting') }}</div>
                </q-card-section>
                <div class="row">
                  <div class="col-12">
                    <q-toggle
                      v-model="available"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="$t('admin.productStatus')"
                    />
                  </div>
                  <div class="col-12 q-pa-sm">
                    <q-btn color="green" class="full-width" @click="saveProduct" :label="$t('admin.productCreate')"/>
                  </div>
                </div>
              </q-card> 
            </q-page>
          </div>
        </div>
      </div>
      
    </div>
    
  </q-page>
</template>

<script>

import { Dialog } from 'quasar'
import Editor from 'src/components/Editor.vue'
import VerticalTabs from 'src/components/VerticalTabs.vue'

export default {
  name: "Product-Create",
  components:{
    Editor,
    VerticalTabs
  },
  data() {
    return {
      title:null,
      foreignTitle:null,
      price:null,
      selectedCategory:null,
      selectedBrand‌:null,
      selectedPriceTypeItems:null,
      available:true,
      priceByColor:[
        {
          title:this.$t('admin.byColor'),
          children:[
            {
              hashCode:null,
              name:null,
              price:null
            }
          ]
        }
      ],
      priceBySize:[
        {
          title:this.$t('admin.bySize'),
          children:[
            {
              name:null,
              price:null
            }
          ]
        }
      ],
      tab:{
          name:'normalPrice',
          icon:'attach_money',
          title: this.$t('admin.normalPrice')
      },
      tabs:[
        {
          name:'normalPrice',
          icon:'attach_money',
          title: this.$t('admin.normalPrice')
        },
        {
          name:'byColor',
          icon:'palette',
          title: this.$t('admin.byColor')
        },
        {
          name:'bySize',
          icon:'crop',
          title: this.$t('admin.bySize')
        },
        {
          name:'discount',
          icon:'local_offer',
          title: this.$t('admin.discount')
        },
        {
          name:'store',
          icon:'local_grocery_store',
          title: this.$t('admin.store')
        }
      ],
      discription:'',
      content:'',
      discount:null,
      store:null,
      brand:null,
      brands:null,
      categories:null
    }
  },
  watch:{
  },
  methods:{
    async getCategories(){
      let response = await this.$api.Properties.getCategories()
      this.categories = response.data
    },
    async getBrands(){
      let response = await this.$api.Brands.get()
      this.brands = response.data.data
    },
    async saveProduct(){
      let data = {
            title: this.title,
            foreignTitle: this.foreignTitle,
            category:this.category,
            description:this.description,
            content:this.content,
            price:this.price,
            discount:this.discount,
            store:this.store,
            available:true,
            brand:this.selectedBrand‌.id
        }
      let response = await this.$api.Products.create(data)
      console.log(response)
    },
    setDiscription(item){
      this.discription = item
    },
    setContent(item){
      this.content = item
    },
    addPriceByColor(index){
      this.priceByColor[0].children.push({
        hashCode:null,
        name:null,
        price:null  
      })
    },
    deletePriceByColor(index){
      this.priceByColor[0].children.splice(index,1)
    },
    addPriceBySize(index){
      this.priceBySize[0].children.push({
        name:null,
        price:null  
      })
    },
    deletePriceBySize(index){
      this.priceBySize[0].children.splice(index,1)
    }
  },
  created(){
    this.getCategories()
    this.getBrands()
  }
}
</script>
<style scoped>
  .delete-child-property{
    margin-top:15px 
  }
</style>
