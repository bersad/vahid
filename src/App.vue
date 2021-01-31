<template>
  <div id="q-app">
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      appear
      :duration="300"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
