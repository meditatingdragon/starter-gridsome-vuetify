<template>
  <v-app>
    <Header/>
    <v-container fill-height>
      <slot/>
    </v-container>
    <Footer/>
  </v-app>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>


<style>

</style>
