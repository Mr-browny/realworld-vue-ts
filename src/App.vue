<template>
  <div id="app">
    <AppNavbar></AppNavbar>
       <router-view/>
    <AppFooter></AppFooter>
  </div>
</template>

<style>
</style>

<script lang="ts">

import { Vue, Component } from "vue-property-decorator";
import AppFooter from '@/components/AppFooter.vue'
import AppNavbar from '@/components/AppNavbar.vue'

@Component({
  components: {
    AppFooter, AppNavbar
  }
})
export default class App extends Vue{

}

</script>
