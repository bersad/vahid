<template>
  <q-table
    :data="data"
    :columns="columns"
    color="primary"
    v-bind="$options.propsData"
    v-on="$listeners"
    hide-bottom
  >
    <template v-slot:body="props">
     <q-tr :props="props" @click="selectRow(props.row)">
       <q-td v-for="(item, index) in props.cols" 
       :key="item.name" 
       :class="item.cursor ? 'cursor-pointer' : ''"
        :props="props" 
        @dblclick="popupshow = true"
        
        >
        <!-- Type button and dropdown and etc -->
        <span v-if="item.type && item.type == 'deleteAction'">
          <q-btn 
          round 
          color="red" 
          icon="delete" 
          size="10px"
          @click="deleteRow(props)"
          />
        </span>
        <span v-if="item.type && item.type == 'deleteUpdateAction'">
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

          @click="editRow(props)"
          />
        </span>
        <span v-if="item.type && item.type == 'deleteUpdateCreateAction'">
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
          <q-btn 
          round 
          color="green" 
          icon="add" 
          size="8px"

          @click="createRow(props)"
          />
        </span>
        <span v-if="item.type && item.type == 'image'">
          <q-avatar>
            <img :src="$imageUrl+props.row[item.name]">
          </q-avatar>
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
          {{ item.value }}
        </span>
        <!-- END normall cell -->
      </q-td>
     </q-tr>
    </template>
  </q-table>
</template>

<script>
import { QTable, QTr, QTd,QPopupEdit,QInput } from 'quasar'
export default {
  name: 'ICBaseTable',
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
      popupshow:false
    }
  }
}
</script>

