<template>
  <div class="home">
    <Header />
    <Slider />
    <Ada />
    <Money />
    <Adb />
    <Finance />
    <Adc />
    <Footor cname="mFooter" />
    <Navbar />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../Public/header.vue'
import Footor from '../Public/Footor.vue'
import Navbar from '../Public/Navbar.vue'
import Slider from './MoneySlider.vue'
import Ada from './Ada.vue'
import Money from '../Home/Money.vue'
import Adb from './Adb.vue'
import Finance from './Finance.vue'
import Adc from './Adc.vue'

export default {
  components: {
    Header,
    Slider,
    Ada,
    Money,
    Adb,
    Finance,
    Adc,
    Footor,
    Navbar
  }
}
</script>

<style lang="scss">
.mFooter{
  margin-top: 0px !important;
  ul{
    &>li:first-child{
      display: none;
    }
  }
}
</style>

