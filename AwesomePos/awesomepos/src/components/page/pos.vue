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
            <el-tab-pane label='汉堡'>
              <ul class="list">
                <li v-for="goods in type0Goods">
                  <span><img :src="goods.goodsImg"/></span>
                  <span>{{goods.goodsName}}</span>
                  <span>￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label='小食'><ul class="list">
                <li v-for="goods in type1Goods">
                  <span><img :src="goods.goodsImg"/></span>
                  <span>{{goods.goodsName}}</span>
                  <span>￥{{goods.price}}元</span>
                </li>
              </ul></el-tab-pane>
            <el-tab-pane label='饮料'><ul class="list">
                <li v-for="goods in type2Goods">
                  <span><img :src="goods.goodsImg"/></span>
                  <span>{{goods.goodsName}}</span>
                  <span>￥{{goods.price}}元</span>
                </li>
              </ul></el-tab-pane>
            <el-tab-pane label='套餐'><ul class="list">
                <li v-for="goods in type3Goods">
                  <span><img :src="goods.goodsImg"/></span>
                  <span>{{goods.goodsName}}</span>
                  <span>￥{{goods.price}}元</span>
                </li>
              </ul></el-tab-pane>
          </el-tabs>
        </template>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
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
      oftenGoods:[],
      type0Goods:[],
      type1Goods:[],
      type2Goods:[],
      type3Goods:[],
    }
  },
  mounted:function(){
    var orderHeight=document.body.clientHeight;
    document.getElementById('order_list').style.height=orderHeight+'px';
  },
  created:function(){
    axios.get('http://jspang.com/DemoApi/oftenGoods.php').then(reponse=>{
      console.log(reponse);
      this.oftenGoods=reponse.data;
    }).catch(error=>{
      alert('网络错误，不能访问');
      console.log(error);
    });
    axios.get('http://jspang.com/DemoApi/typeGoods.php').then(reponse=>{
      console.log(reponse);
      this.type0Goods=reponse.data[0];
      this.type1Goods=reponse.data[1];
      this.type2Goods=reponse.data[2];
      this.type3Goods=reponse.data[3];
    }).catch(error=>{
      console.log(error);
      alert('网络错误，不能访问');
    })
    
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
.goodclass .list{
  overflow: hidden;
  padding: 18px;
}
.goodclass .list li{
  float: left;
  list-style: none;
  width:23%;
  background-color: #fff;
  padding: 2px;
  margin: 2px;
  border:1px solid #E5E9F2;
  text-align: left;
  overflow: hidden;
}
.goodclass .list li span{
  display: block;
  float: left;
}
.goodclass .list li>span{
  width: 40%;
  margin-right: 10px;  
}
.goodclass .list li img{
  width: 100%;
}
.goodclass .list li span:nth-of-type(2){
  margin: 10px 0 15px 0;
  color:brown;
}
</style>
