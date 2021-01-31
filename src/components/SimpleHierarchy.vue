<template>
    <span>
      <q-hierarchy :columns="columns" :data="data"></q-hierarchy>
    </span>
</template>

<script>
export default {
  name: "SimpleHierarchy",
  props:{
    columns:Array,
    data:Array
  },
  data() {
      return {
          
      }
  }
}
</script>

<style scoped>

</style>
