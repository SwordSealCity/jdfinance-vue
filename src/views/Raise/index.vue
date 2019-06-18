<template>
  <div class="home">
    <Header />
    <Slider />
    <Daily />
    <In />
    <More />
    <Footor cname="rFooter" />
    <Navbar />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../Public/header.vue'
import Footor from '../Public/Footor.vue'
import Navbar from '../Public/Navbar.vue'
import Slider from './Slider.vue'
import Daily from './Daily.vue'
import In from './In.vue'
import More from './More.vue'

export default {
  components: {
    Header,
    Slider,
    Daily,
    In,
    More,
    Footor,
    Navbar
  }
}
</script>
<style lang="scss">
.rFooter{
  margin-top: 0px;
  ul>li{
    &:first-child{
      display: none;
    }
  }
}
</style>

