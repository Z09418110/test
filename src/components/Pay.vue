<template>
  <div class="firstdemo">
      <div>
          <div>
               默认收获地址：
            <el-select v-model="value" placeholder="请选择">
                 <el-option
                 v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
          </div>
          <div>
               选择物流：
             <el-radio-group v-model="radio1">
             <el-radio :label="4">顺丰</el-radio>
             <el-radio :label="8">申通</el-radio>
             <el-radio :label="12">圆通</el-radio>
             <el-radio :label="16">韵达</el-radio>
              <el-radio :label="20">中通</el-radio>
             </el-radio-group>
          </div>
          <div>
               选择支付方式：
             <el-radio-group v-model="radio2">
             <el-radio :label="3">支付宝</el-radio>
             <el-radio :label="6">微信</el-radio>
             <el-radio :label="9">银联</el-radio>
             </el-radio-group>
          </div>
          <div>
              默认订单：
            <div class="content">
            <table class="table-goods" v-if="order.length">
            <colgroup>
                <col name="col01" width="480">
                <col name="col02" width="160">
                <col name="col03" width="120">
                <col name="col04" width="160">
                <col name="col05" width="200">
            </colgroup>
            <thead>
                <tr>
                   <th class="col01">商品</th>
                   <th class="col02">单价</th>
                   <th class="col03">数量</th>
                   <th class="col04">金额</th>
                   <th class="col05">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr
                  v-for="(item, index) in order"
                 :key="index">
                 <td class="col01 one-line" :title="item.text">
                 <img class="thumbnail-goods" :src="item.cover">&nbsp;
                    {{ item.text }}
                 </td>
                 <td class="col02">￥{{ item.price }}</td>
                 <td class="col03">{{ item.quantity }}</td>
                 <td class="col04">￥{{ item.price * item.quantity }}</td>
                <td class="col05">
                    <span class="btn-text" @click="drop(index)">移除</span>
                 </td>
                </tr>
            </tbody>
            </table>
         <div class="placeholder" v-else>当前并无订单！快去下单吧~~</div>
        </div>
        </div>
      </div>
      <div>
          合计需要付款：￥{{ totalPrice }}
      </div>
      <div>
          <el-button type="primary" @click="tag3()">支付</el-button>
      </div>
  </div>
</template>
 
<script>
  export default {
    name: 'Cart',
    data() {
      return {
        options: [
        {
          value: '选项1',
          label: '江苏省苏州市常熟市湖山路99号常熟理工学院(东南校区)'
        }, 
        {
          value: '选项2',
          label: '南通市崇川区西寺路20号南通大学附属医院'
        }],
        value: '',
        radio1:4,
        radio2:3,
        order: [],
        cart: []
      }
    },
     computed: {
            totalPrice: function () {
                var total = 0;
                for (var i = 0; i < this.order.length; i++) {
                        var item = this.order[i];
                        total += item.price * item.quantity;
                }
                return total;
            }
        },
    mounted () {
      this.$nextTick(function () {
        this.getStore()
      })
    },
    methods: {
      getStore () {
        let gsStore = window.localStorage.getItem('gsStore')
        if (gsStore) {
          gsStore = JSON.parse(gsStore)
          this.cart = gsStore.cart || []
          this.order = gsStore.order || []
        }
      },
      setStore () {
        let gsStore = {
          cart: this.cart,
          order: this.order
        }
        window.localStorage.setItem('gsStore', JSON.stringify(gsStore))
      },
      drop (index) {
        this.order.splice(index, 1)
        this.setStore()
      },
      tag3(){
        this.$router.push({path: 'order'})
      }
    }
  }
</script>
 
<style scoped>
.content {
    width: 1120px;
    margin-left: auto;
    margin-right: auto;
  }
  .one-line {
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .table-goods {
    width: 100%;
    margin-top: 15px;
    color: #555;
    table-layout: fixed;
    border-collapse: collapse;
    user-select: none;
    cursor: default;
  }
  .table-goods>tbody>tr {
    transition: background-color 200ms linear;
    border-top: 1px solid #ebeef5;
  }
  .table-goods>tbody>tr:last-child {
    border-bottom: 1px solid #ebeef5;
  }
  .table-goods>tbody>tr:hover {
    background-color: rgba(149, 191, 103, .1);
  }
  .table-goods th,
  .table-goods td {
    text-align: left;
    font-size: 16px;
    padding-left: 12px;
  }
  .table-goods th {
    line-height: 52px;
  }
  .table-goods td {
    line-height: 120px;
  }
  .thumbnail-goods {
    width: 100px;
    vertical-align: middle;
  }
  .btn-text {
    color: #409eff;
    font-size: 14px;
    cursor: pointer;
  }
  .placeholder {
    color: #555;
    line-height: 80px;
    font-size: 24px;
  }
 
</style>