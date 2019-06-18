<template>
  <Panel :class="$style.panel" title="理财精选">
    <section :class="$style.content">
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="$style.item" >
        <img :src="item.src" alt="">
        <div>
          <h5>{{ item.title }}</h5>
          <p>{{ item.text }}{{ item.rate }}</p>
        </div>
        <em>去赚钱></em>
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
      items: [{
        src: '//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76',
        title: '月度理财',
        text: '预期年化收益率',
        rate: '4.50%'
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76',
        title: '季度理财',
        text: '历史年化回报率',
        rate: '5.60%'
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76',
        title: '一年理财',
        text: '历史年化回报率',
        rate: '5.80%'
      }]
    }
  }
}
</script>

<style lang="scss" module>
  @import '../../styles/element.scss';
  .panel{
    @include panel;
    &>h4{
      border-bottom: 1px solid #ddd;
    }
    .content{
      .item{
        @include flex(row);
        align-items: center;
        height: 140px;
        &:after{
          content: " ";
          box-sizing: border-box;
          height: 0;
          width: 100%;
          border-bottom: 1px solid #ddd;
          margin-left: 150px;
        }
        &:last-child:after{
          border-color: #fff;
        }
        >img{
          width: 88px;
          height: 88px;
          display: inline-block;
          margin: 0 32px;
        }
        >div{
          font-size: 32px;
          color: #333;
          line-height: 1.8;
          width: 344px;
          p{
            color: #ff3232;
            font-size: 24px;
            line-height: 1.1;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
        >em{
          color: #FF801A;
          font-size: 28px;
        }
      }
    }
  }
</style>
