<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li
            v-for="(item, index) in goods"
            :key="index"
            class="menu-item"
            :class="{ current: currentIndex === index }"
            @click="selectMenu(index)"
          >
            <span class="text">
              <support-ico
                v-if="item.type !== -1"
                :size="3"
                :type="item.type"
              ></support-ico>
              {{ item.name }}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li
            ref="foodList"
            class="food-list"
            v-for="(item, index) in goods"
            :key="index"
          >
            <h1 class="title">{{ item.name }}</h1>
            <ul>
              <li
                class="food-item"
                v-for="(food, index) in item.foods"
                :key="index"
              >
                <div class="icon">
                  <img :src="food.icon" alt="" />
                </div>
                <div class="content">
                  <h2 class="name">{{ food.name }}</h2>
                  <p class="desc">{{ food.description }}</p>
                  <div class="extra">
                    <span class="count">月售{{ food.sellCount }}份</span>
                    <span>好评{{ food.rating }}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{ food.price }}</span>
                    <span class="old" v-if="food.oldPrice"
                      >￥{{ food.oldPrice }}</span
                    >
                  </div>
                  <!-- 购买按钮 -->
                  <div class="cartcontrol-wrapper">
                    <cart-control :food="food"></cart-control>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <shop-cart
      :selectFoods="selectFoods"
      :deliveryPrice="seller.deliveryPrice"
      :minPrice="seller.minPrice"
    ></shop-cart>
  </div>
</template>

<script>
import { getGoods } from "@/api";
import SupportIco from "@/components/support-ico/Support-ico.vue";
import BScroll from "better-scroll";
import Cartcontrol from "@/components/cart-control/Cart-control.vue";
import Shopcart from "@/components/shop-cart/Shop-cart.vue";
export default {
  props: {
    seller: {
      type: Object,
    },
  },
  data() {
    return {
      goods: [],
      currentIndex: 0,
    };
  },
  created() {
    getGoods().then((goods) => {
      console.log(goods);
      this.goods = goods;
      this.$nextTick(() => {
        // nextTick中的回调函数一定会在dom加载完毕之后才执行
        this._initScroll(); // 施加更优雅的滚动效果
      });
    });
  },
  methods: {
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true,
      });
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3,
      });
      this.foodsScroll.on("scroll", (pos) => {
        console.log(pos);
        let listLength = this.$refs.foodList.length;
        console.log(listLength);
        // console.log(Math.floor(Math.abs(pos.y)));
        for (let i = 0; i < listLength; i++) {
          let cur = this.$refs.foodList[i];
          // console.log(this.$refs.foodList[i].offsetTop);
          // if(Math.round(Math.abs(pos.y)) - cur.offsetTop > 10 && Math.round(Math.abs(pos.y)) < next.offsetTop ){
          if (cur.offsetTop - Math.round(Math.abs(pos.y)) < 10) {
            this.currentIndex = i;
          }
        }
      });
    },
    selectMenu(index) {
      // console.log(this.$refs.foodList);
      let el = this.$refs.foodList[index];
      console.log(el);
      console.log(this.foodsScroll.scrollToElement);
      this.foodsScroll.scrollToElement(el, 300);
      this.currentIndex = index;
    },
  },
  components: {
    "support-ico": SupportIco,
    "cart-control": Cartcontrol,
    "shop-cart": Shopcart,
  },
  computed: {
    selectFoods() {
      //把所有选购的菜挑出来
      let foods = [];
      for (let good of this.goods) {
        if (good.foods) {
          for (let food of good.foods) {
            if (food.count) {
              foods.push(food);
            }
          }
        }
      }
      // console.log(foods);
      return foods;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl';

.goods {
  display: flex;
  position: absolute;
  top: 177px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;

  .menu-wrapper {
    flex: 0 0 80px;
    background: $color-background-ssss;

    // overflow scroll
    .menu-item {
      display: flex;
      width: 60px;
      height: 54px;
      padding: 0 10px;
      text-align: center;
      justify-content: center;
      line-height: 14px;
      align-items: center;
      font-size: $fontsize-small;

      &.current {
        background: #fff;
        font-weight: 700;
      }
    }
  }

  .foods-wrapper {
    flex: 1;

    .title {
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: $fontsize-small;
      color: rgb(147, 153, 159);
      background: $color-background-ssss;
    }

    .food-item {
      display: flex;
      margin: 18px;
      padding-bottom: 18px;
      position: relative;

      &:last-child {
        margin-bottom: 0;
      }

      .icon {
        flex: 0 0 57px;
        margin-right: 10px;

        img {
          width: 100%;
        }
      }

      .content {
        flex: 1;

        .name {
          margin: 2px 0 8px 0;
          height: 14px;
          line-height: 14px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }

        .desc, .extra {
          line-height: 10px;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }

        .desc {
          line-height: 12px;
          margin-bottom: 8px;
        }

        .extra {
          .count {
            margin-right: 12px;
          }
        }

        .price {
          font-weight: 700;
          line-height: 24px;

          .now {
            margin-right: 8px;
            font-size: 14px;
            color: rgb(240, 20, 20);
          }

          .old {
            text-decoration: line-through;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }

        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 4px;
        }
      }
    }
  }
}
</style>
