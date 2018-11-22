<template>
  <v-app>
    <v-content>
      <Home/>
      <About/>
      <Services/>
      <Works/>
      <Clients/>
      <Team/>
      <Contact/>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Works from './components/Works'
import Clients from './components/Clients'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Home, About, Services, Works, Clients, Team, Contact, Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>

</style>
