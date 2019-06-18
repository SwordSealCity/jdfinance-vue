<template>
  <div class="home">
    <Header />
    <Slider />
    <Novice />
    <Borrow />
    <Money />
    <Product />
    <Life />
    <Footor />
    <Navbar />
  </div>
</template>

<script>
import Header from '../Public/header.vue'
import Footor from '../Public/Footor.vue'
import Navbar from '../Public/Navbar.vue'
import Slider from './HomeSlider.vue'
import Novice from './Novice.vue'
import Borrow from './Borrow.vue'
import Money from './Money.vue'
import Product from './Product.vue'
import Life from './Life.vue'

export default {
  components: {
    Header,
    Slider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    Footor,
    Navbar
  }
}
</script>
