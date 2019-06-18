<template>
  <div class="home">
    <Header />
    <Slider />
    <div>这是我的页面</div>
    <Footor />
    <Navbar />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../Public/header.vue'
import Footor from '../Public/Footor.vue'
import Navbar from '../Public/Navbar.vue'
import Slider from '../Home/HomeSlider.vue'

export default {
  components: {
    Header,
    Slider,
    Footor,
    Navbar
  }
}
</script>
