<template>
  <div class="home">
    <Header />
    <Slider />
    <Welfare />
    <Service />
    <Footor />
    <Navbar />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../Public/header.vue'
import Footor from '../Public/Footor.vue'
import Navbar from '../Public/Navbar.vue'
import Slider from './Slider.vue'
import Welfare from './Welfare.vue'
import Service from './Service.vue'

export default {
  components: {
    Header,
    Slider,
    Welfare,
    Service,
    Footor,
    Navbar
  }
}
</script>
