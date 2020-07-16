<template>
  <div id="app">
    <h1>This is the vue app with dist.</h1>
    <p>This is our prop: {{ msg }} </p>
    <FormComponent></FormComponent>
  </div>
</template>

<script>
import FormComponent from './components/FormComponent.vue'

export default {
  name: 'app',
  components: {
    FormComponent
  },
  props: {
    msg: String
  }
}
</script>

<style>

</style>
