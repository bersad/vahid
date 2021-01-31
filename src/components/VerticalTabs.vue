<template>
  <q-splitter
    v-model="splitterModel"
  >

    <template v-slot:before>
      <q-tabs
        v-model="tab.name"
        vertical
        class="text-teal"
      >
        <q-tab v-for="(item,index) in tabs" :key="index" 
        :name="item.name" 
        :icon="item.icon" 
        :label="item.title" />
      </q-tabs>
    </template>

    <template v-slot:after>
      <q-tab-panels
        v-model="tab.name"
        animated
        swipeable
        vertical
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <q-tab-panel  v-for="(item,index) in tabs" :key="index" :name="item.name">
          <div class="text-h4 q-mb-md">{{ item.title }}</div>
          <slot :name="item.name"></slot>
        </q-tab-panel>
      </q-tab-panels>
    </template>

  </q-splitter>
</template>

<script>
export default {
  name: 'Vertical-Tabs',
  props:{
    tabs: Array,
    tab: Object
  },
  components: {},
  
  data:function (){
    return {
      splitterModel: 20
    }
  },
  
}
</script>

