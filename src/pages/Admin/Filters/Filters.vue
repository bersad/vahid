<template>
  <div>
    <q-page class="q-pa-sm">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-indigo-8">
            {{ $t('admin.filters') }}
          </div>
          <div class="text-subtitle2">
            {{ $t('admin.filtersManagmentMessage') }}
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
                  @input="getFilters"
                />
              </div>
            </div>
            <q-separator dark />
          </div>
          <div class="q-pa-lg">
            <div class="row">
              <div class="col col-md-12">
              <q-card v-for="(filter , index) in filters" :key="index" class="q-mb-sm">
                  <q-card-section>
                    <div class="row" >
                      <div class="col col-md-6 q-pa-sm">
                        <q-input v-model="filter.title" :label="$t('admin.filter')" />
                      </div>
                      <div class="col col-md-6 q-pa-sm">
                        <q-select
                          v-model="filter.field" 
                          :options="filterTypes"
                          :label="$t('admin.filterType')"
                        />
                      </div>
                      <div class="col col-md-12" v-for="(child , index2) in filter.children" :key="index2">
                        <div class="row">
                          <div class="col col-md-6">
                            <div class="q-pt-sm q-pb-sm q-ml-lg">
                              <q-input v-model="child.name" :label="$t('admin.filter')" />
                            </div>
                          </div>
                          <div class="col col-md-5" v-if="filter.field == 'color'">
                            <div class="q-pt-sm q-pb-sm q-ml-lg">
                              <q-input
                                filled
                                v-model="child.hashColor"
                                :rules="['anyColor']"
                                class="my-input"
                              >
                                <template v-slot:append>
                                  <q-icon name="colorize" class="cursor-pointer">
                                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                                      <q-color v-model="child.hashColor" />
                                    </q-popup-proxy>
                                  </q-icon>
                                </template>
                              </q-input>
                            </div>
                          </div>
                          <div class="col col-md-1 text-center">
                            <q-btn round color="red" icon="delete" class="delete-child-property" @click="deleteChildFilter(index,index2)"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                  <q-separator />

                  <q-card-actions>
                    <q-btn color="red" :label="$t('admin.delete')" @click="deleteFilter(index)"/>
                    <q-btn color="secondary" :label="$t('admin.create')" @click="addFilter(index)"/>
                  </q-card-actions>
                </q-card>
                <div class="col col-md-12 q-pt-lg q-pb-lg" v-if="selectedCategory != null">
                  <q-separator color="dark" />
                  <q-btn color="secondary" class="q-mt-lg" :label="$t('admin.create')" @click="addFilterParent()"/>
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
  name: "Filters",
  components:{
  },
  data() {
    return {
      categories:[],
      selectedCategory:null,
      filters:null,
      filterTypes:[ 'color','input' ]
    }
  },
  watch:{
    
  },
  methods:{
    async getCategories(){
      let response = await this.$api.Properties.getCategories()
      this.categories = response.data
    },
    async getFilters(){
      let response = await this.$api.Filters.get(this.selectedCategory.id)
      this.filters = response.data
    },
    addFilter(index){
      this.filters[index].children.push({ name : "" , hashColor : "" });
    },
    addFilterParent(){
      this.filters.push({ title : "" , field: "input", children : [ { name : "" , hashColor : "" } ] });
    },
    deleteChildFilter(index,index2){
      this.filters[index].children.splice(index2,1)
    },
    deleteFilter(index){
      this.filters.splice(index,1)
    },
    async save(){
      let response = await this.$api.Filters.create(this.filters,this.selectedCategory.id)
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
