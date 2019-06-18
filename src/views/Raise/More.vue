<template>
  <Panel :class="$style.panel" title="更多福利">
    <section :class="$style.content">
      <div :class="$style.arrow">专享福利 > </div>
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330" alt="">
      </div>
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330" alt="">
      </div>
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330" alt="">
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from '@/components/Core/panel.vue'

export default {
  components: {
    Panel
  },
  data() {
    return {
      options: {
        autoplay: true,
        loop: true,
        direction: 'vertical'
      }
    }
  }
}
</script>

<style lang="scss" module>
  @import "../../styles/element.scss";
  .panel{
    @include panel;
    .content{
      @include flex(row);
      position: relative;
      justify-content: space-around;
      padding-bottom: 60px;
      .arrow{
        position: absolute;
        font-size: 28px;
        color: #999;
        right:20px;
        top: -70px;
      }
      .item{
        width: 33.3333%;
        height: 280px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
