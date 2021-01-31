<template>
  <q-table
    :data="data"
    :columns="columns"
    color="primary"
    :filter="filterData"
  >
    <template v-slot:body="props">
     <q-tr :props="props" @click="selectRow(props.row)">
       <q-td v-for="item in props.cols" 
       :key="item.name" 
       :class="item.cursor ? 'cursor-pointer' : ''"
        :props="props" 
        @dblclick="popupshow = true"
        
        >
        <span v-if="item.type == 'actions'">
          <q-btn 
            color="accent" 
            icon="insert_photo" 
            size="12px"
            class="q-mr-sm"
            :label="$t('admin.images')"
            @click="images(props)"
          />
          <q-btn 
            color="secondary" 
            icon="local_offer" 
            size="12px"
            class="q-mr-sm"
            :label="$t('admin.properties')"
            @click="properties(props)"
          />
          <q-btn 
            color="green" 
            icon="filter_alt" 
            size="12px"
            class="q-mr-sm"
            :label="$t('admin.filters')"
            @click="filters(props)"
          />
          <q-btn 
            round 
            color="red" 
            icon="delete" 
            size="8px"
            class="q-mr-sm"
            @click="deleteRow(props)"
          />
          <q-btn 
            round 
            color="indigo" 
            icon="edit" 
            size="8px"
            class="q-mr-sm"
            @click="editRow(props)"
          />
          
        </span>
        
        <!-- END Type button and dropdown and etc -->
        <q-popup-edit
          v-if="item.editable_col && popupshow" 
          v-model="props.row[item.name]" 
          auto-save
          @hide="popupshow = false"
        >
          <q-input
            v-model="props.row[item.name]"
            dense
            autofocus
            @keyup.enter="editCell($event.target.value, props)"
          />
        </q-popup-edit>
        <!-- normal cell -->
        <span v-if="!item.type">
          <span v-if="item.price">
            {{ $tools.price(item.value) }} {{ $tools.currency }}
          </span>
          <span v-else>
            {{ item.value }}
          </span>
        </span>
        <!-- END normall cell -->
      </q-td>
     </q-tr>
    </template>
    <template v-slot:top-right>
      <q-input v-if="show_filter" filled borderless dense debounce="300" v-model="filter" :placeholder="$t('admin.search')">
        <template v-slot:append>
          <q-icon name="search"/>
        </template>
      </q-input>

      <q-btn class="q-ml-sm" icon="filter_list" @click="show_filter=!show_filter" flat/>
    </template>
  </q-table>
</template>

<script>
import { QTable, QTr, QTd,QPopupEdit,QInput } from 'quasar'

export default {
  name: 'ProductsTable',
  extends: QTable,
  components: {
    QTable,
    QTr,
    QTd,
    QPopupEdit,
    QInput
  },
  props: {
    data:Array,
    columns:Array
  },
  methods:{
    editCell (val, row) {
      this.$emit('editCell',val,row)
    },
    deleteRow(item){
      this.$emit('deleteRow',item)
    },
    properties(item){
      this.$emit('properties',item)
    },
    images(item){
      this.$emit('images',item)
    },
    filters(item){
      this.$emit('filters',item)
    },
    editRow(item){
      this.$emit('editRow',item)
    },
    createRow(item){
      this.$emit('createRow',item)
    },
    selectRow(item){
      this.$emit('selectRow',item)
    }
  },
  data() {
    return {
      popupshow:false,
      show_filter:false,
      filterData:''
    }
  }
}
</script>

