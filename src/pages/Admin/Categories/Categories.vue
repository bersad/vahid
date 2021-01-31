<template>
  <div>
    <q-dialog v-model="confirmModalShow">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="primary" text-color="white" />
          <span class="q-ml-sm">{{ $t('admin.deleteMessage') }}</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat :label="$t('admin.cancel')" color="primary" v-close-popup/>
          <q-btn flat :label="$t('admin.yes')" @click="deleteCategory()" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="confirmModalCreate">
      <q-card>
        <q-form
            class="q-gutter-md"
            ref="myForm"
          >
        <q-card-section class="row items-center">
          <q-input 
            v-model="name" 
            :label="$t('admin.name')"
            lazy-rules
            :rules="[ val => val && val != null && val != '' || $t('admin.required')]"
            />
          </q-card-section>

          <q-card-section class="row items-center">
            <q-input 
            v-model="latinName" 
            :label="$t('admin.latinName')" 
            lazy-rules
            :rules="[ val => val && val != null && val != '' || $t('admin.required')]"
            />
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat :label="$t('admin.save')" @click="saveCategory" color="primary"/>
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
    
    <q-dialog v-model="confirmModalUpdate">
      <q-card>
        <q-form
            class="q-gutter-md"
            ref="updateForm"
          >
        <q-card-section class="row items-center">
          <q-input 
            v-model="name" 
            :label="$t('admin.name')"
            lazy-rules
            :rules="[ val => val && val != null && val != '' || $t('admin.required')]"
            />
          </q-card-section>

          <q-card-section class="row items-center">
            <q-input 
            v-model="latinName" 
            :label="$t('admin.latinName')" 
            lazy-rules
            :rules="[ val => val && val != null && val != '' || $t('admin.required')]"
            />
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat :label="$t('admin.save')" @click="updateCategory" color="primary"/>
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>

    <q-page class="q-pa-sm">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-indigo-8">
            {{ $t('admin.productCategories') }}
          </div>
          <div class="text-subtitle2">
            {{ $t('admin.productCategoriesManagmentMessage') }}
          </div>
          <q-btn color="green" :label="$t('admin.create')" @click="confirmModalCreate = true"/>
        </q-card-section>
        <q-separator></q-separator>
        <div class="row">
          <div class="col">
            <i-c-base-table
              v-if="categories != null"
              :data="categories"
              :columns="columns"
              color="primary"
              hide-bottom
              @deleteRow="deleteRow"
              @selectRow="selectRow"
              @editRow="editRow"
              @createRow="createRow"
            />
              
          </div>
          <div class="col">
            <i-c-base-table
              v-if="categories_2 != null"
              :data="categories_2"
              :columns="columns"
              color="primary"
              hide-bottom
              @deleteRow="deleteRow"
              @selectRow="selectRow"
              @editRow="editRow"
              @createRow="createRow"
            />
          </div>
          <div class="col">
            <i-c-base-table
              v-if="categories_3 != null"
              :data="categories_3"
              :columns="columns"
              color="primary"
              hide-bottom
              @deleteRow="deleteRow"
              @selectRow="selectRow"
              @editRow="editRow"
              @createRow="createRow"
            />
          </div>
          <div class="col">
            <i-c-base-table
              v-if="categories_4 != null"
              :data="categories_4"
              :columns="columns"
              color="primary"
              hide-bottom
              @deleteRow="deleteRow"
              @selectRow="selectRow"
              @editRow="editRow"
              @createRow="createRow"
            />
          </div>
        </div>
      </q-card>
    </q-page>
  </div>
</template>

<script>
import icBaseTable from '../../../components/ICBaseTable'
import { Dialog } from 'quasar'

export default {
  name: "Categories",
  components:{
    'i-c-base-table':icBaseTable
  },
  data() {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: this.$t('admin.name'),
          align: 'left',
          field: row => row.name,
          sortable: true,
          cursor:true
        },
        { 
          name: 'deleteUpdateCreateAction', 
          align: 'center', 
          label: this.$t('admin.actions'),
          type:'deleteUpdateCreateAction'
        },
      ],
      categories:null,
      categories_2:null,
      categories_3:null,
      categories_4:null,
      category_id:null,
      confirmModalCreate:false,
      confirmModalShow:false,
      confirmModalUpdate:false,
      name:null,
      latinName:null,
      parentId:null
    }
  },
  watch:{
    confirmModalUpdate(){
      if(!this.confirmModalUpdate){
        this.name = null
        this.latinName = null
      }
    }
  },
  methods:{
    deleteRow(item){
      this.confirmModalShow = true
      this.category_id = item.row.id
    },
    createRow(item){
      this.confirmModalCreate = true
      this.category_id = item.row.id
    },
    editRow(item){
      this.confirmModalUpdate = true
      this.category_id = item.row.id
      this.name = item.row.name
      this.parentId = item.row.parent
    },
    saveCategory(){
      this.$refs.myForm.validate().then(success => {
        if(success){
          this.createCategory()
        }
      })
    },
    updateCategory(){
      this.$refs.updateForm.validate().then(success => {
        if(success){
          this.updateCategoryFunc()
        }
      })
    },
    async updateCategoryFunc(){
      let data = {
        name : this.name,
        foreignName: this.latinName,
        request_id: this.category_id,
        parent: this.parentId
      }
      let service = await this.$api.Categories.update(data);
      if(service.data.result = 'success'){
        this.confirmModalUpdate = false
        this.$q.dialog({
          title: this.$t('admin.success'),
          message: this.$t('admin.successMessage')
        })
        this.resetValue()
        this.getCategories();
      }
    },
    resetValue(){
      this.category_id = null
      this.name = null
      this.latinName = null
      this.categories = null
      this.categories_2 = null
      this.categories_3 = null
      this.categories_4 = null
      this.parentId = null
    },
    async createCategory(){
      let data = {
        name : this.name,
        foreignName: this.latinName,
        parent: this.category_id
      }
      let service = await this.$api.Categories.create(data);
      if(service.data.result = 'success'){
        this.confirmModalCreate = false
        this.$q.dialog({
          title: this.$t('admin.success'),
          message: this.$t('admin.successMessage')
        })
        this.resetValue()
        this.getCategories();
      }
    },
    async deleteCategory(){
      let service = await this.$api.Categories.delete(this.category_id);
      if(service.data.result = 'success'){
        this.$q.dialog({
          title: this.$t('admin.success'),
          message: this.$t('admin.successMessage')
        })
        this.confirmModalShow = false
        this.resetValue()
        this.getCategories()
      }
    },
    async getCategories(){
      let service = await this.$api.Categories.get();
      this.categories = service.data;
      this.filterCategory();
    },
    selectRow(item){
      this.category_id = item.id
      this.filterCategory()
    },
    filterCategory(){
      this.categories.forEach(item => {
        let category = this.categories.find(x => x.id == this.category_id)
        if(category){
          this.categories_3 = null
          this.categories_4 = null
          this.categories_2 = category.children
          return
        }
        if(item.children){
          item.children.forEach(item2 => {
            let category2 = item.children.find(x => x.id == this.category_id)
            if(category2){
              this.categories_4 = null
              this.categories_3 = category2.children
              return
            }
            if(item2.children){
              item2.children.forEach(item3 => {
                let category3 = item2.children.find(x => x.id == this.category_id)
                if(category3){
                  this.categories_4 = category3.children
                  return
                }
              })
            }
          })
        }
      });
    }
  },
  created(){
    this.getCategories();
  }
}
</script>

<style scoped>

</style>
