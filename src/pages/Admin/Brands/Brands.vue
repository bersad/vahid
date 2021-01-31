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
          <q-btn flat :label="$t('admin.yes')" @click="deleteBrand()" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="confirmModalCreate">
      <q-card style="width:300px">
        <q-form
            class="q-gutter-md"
            ref="myForm"
          >
        <q-card-section class="row items-center">
          <div class="col-12">
            <q-input 
              v-model="name" 
              :label="$t('admin.name')"
              lazy-rules
              :rules="[ val => val && val != null && val != '' || $t('admin.required')]"
            />
          </div>
          </q-card-section>

          <q-card-section class="row items-center">
            <div class="col-12">
              <q-input 
                v-model="latinName" 
                :label="$t('admin.latinName')" 
                lazy-rules
                :rules="[ val => val && val != null && val != '' || $t('admin.required')]"
              />
            </div>
          </q-card-section>
          <q-card-section class="row items-center">
            <q-file
              v-model="file"
              :label="$t('admin.chooseFile')"
              :rules="[ val => val && val != null && val != '' || $t('admin.required')]"
              lazy-rules
              filled
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
          </q-card-section>
            
          <q-card-actions align="right">
            <q-btn flat :label="$t('admin.save')" @click="saveBrand" color="primary"/>
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
    
    <q-dialog v-model="confirmModalUpdate">
      <q-card style="width:300px">
        <q-form
            class="q-gutter-md"
            ref="updateForm"
          >
        <q-card-section class="row items-center">
          <div class="col-12">
            <q-input 
              v-model="name" 
              :label="$t('admin.name')"
              lazy-rules
              :rules="[ val => val && val != null && val != '' || $t('admin.required')]"
            />
          </div>
          </q-card-section>

          <q-card-section class="row items-center">
            <div class="col-12">
              <q-input 
                v-model="latinName" 
                :label="$t('admin.latinName')" 
                lazy-rules
                :rules="[ val => val && val != null && val != '' || $t('admin.required')]"
              />
            </div>
          </q-card-section>
          <q-card-section class="row items-center">
            <q-file
              v-if="filePath == null"
              v-model="file"
              :label="$t('admin.chooseFile')"
              :rules="[ val => val && val != null && val != '' || $t('admin.required')]"
              lazy-rules
              filled
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
            <q-img v-else :src="$imageUrl+filePath" native-context-menu>
              <q-icon class="absolute all-pointer-events" size="22px" @click="filePath = null" name="delete" color="white" style="top: 8px; left: 8px">
                <q-tooltip>
                  {{ $t('admin.delete') }}
                </q-tooltip>
              </q-icon>
            </q-img>
          </q-card-section>
            
          <q-card-actions align="right">
            <q-btn flat :label="$t('admin.save')" @click="updateBrand" color="primary"/>
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>

    <q-page class="q-pa-sm">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-indigo-8">
            {{ $t('admin.brands') }}
          </div>
          <div class="text-subtitle2">
            {{ $t('admin.BrandsManagmentMessage') }}
          </div>
          <q-btn color="green" :label="$t('admin.create')" @click="confirmModalCreate = true"/>
        </q-card-section>
        <q-separator></q-separator>
        <div class="row">
          <div class="col-12">
            <i-c-base-table
              v-if="brands != null"
              :data="brands"
              :columns="columns"
              color="primary"
              @deleteRow="deleteRow"
              @selectRow="selectRow"
              @editRow="editRow"
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
  name: "Brands",
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
          name: 'foreignName',
          required: true,
          label: this.$t('admin.latinName'),
          align: 'left',
          field: row => row.foreignName,
          sortable: true,
          cursor:true
        },
        { 
          name: 'image', 
          align: 'center', 
          label: this.$t('admin.image'),
          type:'image'
        },
        { 
          name: 'deleteUpdateAction', 
          align: 'center', 
          label: this.$t('admin.actions'),
          type:'deleteUpdateAction'
        },
      ],
      brands:null,
      confirmModalCreate:false,
      confirmModalShow:false,
      confirmModalUpdate:false,
      name:null,
      brand_id:null,
      latinName:null,
      file:null,
      filePath:null
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
      this.brand_id = item.row.id
    },
    createRow(item){
      this.confirmModalCreate = true
      this.brand_id = item.row.id
    },
    editRow(item){
      this.confirmModalUpdate = true
      this.brand_id = item.row.id
      this.name = item.row.name
      this.latinName = item.row.foreignName,
      this.filePath = item.row.image
    },
    saveBrand(){
      this.$refs.myForm.validate().then(success => {
        if(success){
          this.createBrand()
        }
      })
    },
    updateBrand(){
      this.$refs.updateForm.validate().then(success => {
        if(success){
          this.updateBrandFunc()
        }
      })
    },
    async updateBrandFunc(){
      let formData = new FormData();
      if(this.filePath == null){
        formData.append('image', this.file);
      }
      
      formData.append('name', this.name);
      formData.append('foreignName', this.latinName);
      formData.append('request_id', this.brand_id);

      let service = await this.$api.Brands.update(formData);
      if(service.data.result = 'success'){
        this.confirmModalUpdate = false
        this.$q.dialog({
          title: this.$t('admin.success'),
          message: this.$t('admin.successMessage')
        })
        this.resetValue()
        this.getBrands();
      }
    },
    resetValue(){
      this.category_id = null
      this.name = null
      this.latinName = null
      this.file = null
      this.brands = null
    },
    async createBrand(){
      let formData = new FormData();
      formData.append('image', this.file);
      formData.append('name', this.name);
      formData.append('foreignName', this.latinName);
      
      let service = await this.$api.Brands.create(formData);
      if(service.data.result = 'success'){
        this.confirmModalCreate = false
        this.$q.dialog({
          title: this.$t('admin.success'),
          message: this.$t('admin.successMessage')
        })
        this.resetValue()
        this.getBrands();
      }
    },
    async deleteBrand(){
      let service = await this.$api.Brands.delete(this.brand_id);
      if(service.data.result = 'success'){
        this.$q.dialog({
          title: this.$t('admin.success'),
          message: this.$t('admin.successMessage')
        })
        this.confirmModalShow = false
        this.resetValue()
        this.getBrands()
      }
    },
    async getBrands(){
      let service = await this.$api.Brands.get();
      this.brands = service.data.data;
    },
    selectRow(item){
      this.brand_id = item.id
    },
  },
  created(){
    this.getBrands();
  }
}
</script>

<style scoped>

</style>
