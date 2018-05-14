<template>
  <div class="pos">
    <el-row>
      <el-col :span='7' class="pos_order" id="order_list">
        <template>
          <el-tabs>
            <el-tab-pane label='点餐'>
              <template>
                <el-table :data='tableData' border style="width:100%">
                  <el-table-column prop='goodsName' label='商品' align='center'></el-table-column>
                  <el-table-column prop='count' label='数量' width='70' align='center'></el-table-column>
                  <el-table-column prop='price' label='金额' width='70' align='center'></el-table-column>
                  <el-table-column label='操作' fixed='right' width='100' align='center'>
                    <template slot-scope="scope">
                      <el-button type='text'>删除</el-button>
                      <el-button type='text'>增加</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="order_btn">
                  <el-button type='warning'>挂单</el-button>
                  <el-button type='danger'>删除</el-button>
                  <el-button type='success'>结账</el-button>
                </div>    
              </template>
            </el-tab-pane>
            <el-tab-pane label='挂单'>挂单</el-tab-pane>
            <el-tab-pane label='外卖'>外卖</el-tab-pane>
          </el-tabs>
        </template>
      </el-col>
      <el-col :span='17'>
        <div class="often_goods">
          <div>常用商品</div>
          <ul>
            <li v-for="goods in oftenGoods">
              <span>{{goods.goodsName}}</span>
              <span>￥{{goods.price}}元</span>
            </li>
          </ul>
        </div>
        <template>
          <el-tabs class="goodclass">
            <el-tab-pane label='汉堡' class="hanbao">
              <ul>
                <li v-for="goods in type0Goods">
                  <span><img :src="goods.goodsImg"/></span>
                  <span>{{goods.goodsName}}</span>
                  <span>{{goods.price}}</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label='小食'>小食</el-tab-pane>
            <el-tab-pane label='饮料'>饮料</el-tab-pane>
            <el-tab-pane label='套餐'>套餐</el-tab-pane>
          </el-tabs>
        </template>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'pos',
  data(){
    return {
      tableData:
      [
        {
          goodsName:'可口可乐',
          count:1,
          price:8
        },
        {
          goodsName:'香辣鸡腿堡',
          count:1,
          price:15
        },
        {
          goodsName:'爱心薯条',
          count:1,
          price:8
        },
        {
          goodsName:'甜筒',
          count:1,
          price:5
        },
      ],
      oftenGoods:[
        {
              goodsId:1,
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
              goodsName:'香脆鸡柳',
              price:17
          }
      ],
      type0Goods:[
          {
              goodsId:1,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'香脆鸡柳',
              price:17
          }
          
      ],
    }
  },
  mounted:function(){
    var orderHeight=document.body.clientHeight;
    document.getElementById('order_list').style.height=orderHeight+'px';
  }
}
</script>

<style scoped>
.pos_order{
  background-color: #F9FAFC;
  border-right: 1px solid #C0CCDA;
  height: 100%;
}
.order_btn{
  margin-top: 15px;
}
.often_goods>div{
text-align: left;
height: 20px;
background-color: #F9FAFC;
border-bottom: 1px solid #D3DCE6;
padding: 10px;
}
.often_goods ul{
  overflow: hidden;
  padding-left: 10px;
}
.often_goods ul li{
  list-style: none;
  padding: 10px;
  margin: 10px;
  border: 1px solid #E5E9F2;
  background-color: #fff;
  float: left;
}
.often_goods ul li span:nth-of-type(2){
  color: #58B7FF; 
}
.el-tab-pane{
  margin-left: 10px;
}
.goodclass .hanbao ul{
  overflow: hidden;
}
.goodclass .hanbao ul li{
  float: left;
  list-style: none;
  width:23%;
  background-color: #fff;
  padding: 2px;
  margin: 8px;
  border:1px solid #E5E9F2;
  height: auto;
}
.goodclass .hanbao ul li img{
  width: 40%;
  
}
.goodclass .hanbao ul li span{
  display: block;
  float: left;
}
</style>
