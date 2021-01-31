<template>
  <div>

    <q-page class="q-pa-sm">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-indigo-8">
            {{ $t('admin.properties') }}
          </div>
          <div class="text-subtitle2">
            {{ $t('admin.propertiesManagmentMessage') }}
          </div>
        </q-card-section>
        <q-separator></q-separator>
        <div class="q-gutter-md">
          <div class="q-pa-lg">
            <div class="row">
              <div class="col col-md-6">
                <q-select
                  v-model="selectedCategory" 
                  :options="categories"
                  option-label="name"
                  :label="$t('admin.categories')"
                  @input="getPropertiy"
                />
              </div>
            </div>
            <q-separator dark />
          </div>
          <div class="q-pa-lg">
            <div class="row">
              <div class="col col-md-12">
              <q-card v-for="(property , index) in properties" :key="index" class="q-mb-sm">
                  <q-card-section>
                    <div class="row">
                      <div class="col col-md-6">
                        <q-input v-model="property.title" :label="$t('admin.category')" />
                      </div>
                      <div class="col col-md-12" v-for="(child , index2) in property.children" :key="index2">
                        <div class="row">
                          <div class="col col-md-6">
                            <div class="q-pt-sm q-pb-sm q-ml-lg">
                              <q-input v-model="child.name" :label="$t('admin.property')" />
                            </div>
                          </div>
                          <div class="col col-md-5">
                            <div class="q-pt-sm q-pb-sm q-ml-lg">
                              <q-select
                                v-model="child.text" 
                                :options="propertyTypes"
                                :label="$t('admin.propertyType')"
                              />
                            </div>
                          </div>
                          <div class="col col-md-1 text-center">
                            <q-btn round color="red" icon="delete" class="delete-child-property" @click="deleteChildProperty(index,index2)"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                  <q-separator />

                  <q-card-actions>
                    <q-btn color="red" :label="$t('admin.delete')" @click="deleteProperty(index)"/>
                    <q-btn color="secondary" :label="$t('admin.create')" @click="addProperty(index)"/>
                  </q-card-actions>
                </q-card>
                <div class="col col-md-12 q-pt-lg q-pb-lg" v-if="selectedCategory != null">
                  <q-separator color="dark" />
                  <q-btn color="secondary" class="q-mt-lg" :label="$t('admin.create')" @click="addPropertyParent()"/>
                  <q-btn color="primary" class="q-mt-lg q-ml-lg" :label="$t('admin.save')" @click="save()"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-card>
    </q-page>
  </div>
</template>

<script>
import { Dialog } from 'quasar'

export default {
  name: "Properties",
  components:{
  },
  data() {
    return {
      categories:[],
      selectedCategory:null,
      properties:null,
      propertyTypes:[ 'radio','input','textarea' ]
    }
  },
  watch:{
    
  },
  methods:{
    async getCategories(){
      let response = await this.$api.Properties.getCategories()
      this.categories = response.data
    },
    async getPropertiy(){
      let response = await this.$api.Properties.get(this.selectedCategory.id)
      this.properties = response.data
    },
    addProperty(index){
      this.properties[index].children.push({ name : "" , text : "" });
    },
    addPropertyParent(){
      this.properties.push({ title : "" , children : [ { name : "" , text : "" } ] });
    },
    deleteChildProperty(index,index2){
      this.properties[index].children.splice(index2,1)
    },
    deleteProperty(index){
      this.properties.splice(index,1)
    },
    async save(){
      let response = await this.$api.Properties.create(this.properties,this.selectedCategory.id)
      if(response.data.result == 'success'){
        this.$q.dialog({
          title: this.$t('admin.success'),
          message: this.$t('admin.successMessage')
        })
      }
    }
  },
  created(){
    this.getCategories();
  }
}
</script>

<style scoped>
  .delete-child-property{
    margin-top:15px 
  }
</style>
