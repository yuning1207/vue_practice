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
                      <el-button type='text' @click="reduceOrder(scope.row)">删除</el-button>
                      <el-button type='text' @click="addOrder(scope.row)">增加</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="total">
                  <small>数量：</small>
                  <span>{{totalcount}}</span>
                  <small>金额：</small>
                  <span>{{totalmoney}}元</span>
                </div>
                <div class="order_btn">
                  <el-button type='warning'>挂单</el-button>
                  <el-button type='danger' @click="removetotal">删除</el-button>
                  <el-button type='success' @click="checkout">结账</el-button>
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
            <li v-for="goods in oftenGoods" @click="addOrder(goods)">
              <span>{{goods.goodsName}}</span>
              <span>￥{{goods.price}}元</span>
            </li>
          </ul>
        </div>
        <template>
          <el-tabs class="goodclass">
            <el-tab-pane label='汉堡'>
              <ul class="list">
                <li v-for="goods in type0Goods" @click="addOrder(goods)">
                  <span><img :src="goods.goodsImg" /></span>
                  <span>{{goods.goodsName}}</span>
                  <span>￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label='小食'>
              <ul class="list">
                <li v-for="goods in type1Goods" @click="addOrder(goods)">
                  <span><img :src="goods.goodsImg" /></span>
                  <span>{{goods.goodsName}}</span>
                  <span>￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label='饮料'>
              <ul class="list">
                <li v-for="goods in type2Goods" @click="addOrder(goods)">
                  <span><img :src="goods.goodsImg" /></span>
                  <span>{{goods.goodsName}}</span>
                  <span>￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label='套餐'>
              <ul class="list">
                <li v-for="goods in type3Goods" @click="addOrder(goods)">
                  <span><img :src="goods.goodsImg" /></span>
                  <span>{{goods.goodsName}}</span>
                  <span>￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </template>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: "pos",
    data() {
        return {
            tableData: [],
            oftenGoods: [],
            type0Goods: [],
            type1Goods: [],
            type2Goods: [],
            type3Goods: [],
            totalcount: 0,
            totalmoney: 0
        };
    },
    methods: {
        addOrder: function(goods) {
            //判断tableData中是否有该商品
            let ishave = false;
            for (var i = 0, len = this.tableData.length; i < len; i++) {
                if (goods.goodsId == this.tableData[i].goodsId) {
                    ishave = true;
                }
            }
            //根据ishave的值来操作
            if (ishave) {
                this.tableData[i - 1].count++;
                this.totalcount++;
                this.totalmoney += goods.price;
            } else {
                var newgood = {
                    goodsId: goods.goodsId,
                    goodsName: goods.goodsName,
                    price: goods.price,
                    count: 1
                };
                this.tableData.push(newgood);
                this.totalcount += 1;
                this.totalmoney += goods.price;
            }
        },
        reduceOrder: function(goods) {
            for (var i = 0, len = this.tableData.length; i < len; i++) {
                if (goods.goodsId == this.tableData[i].goodsId) {
                    break;
                }
            }
            if (goods.count == 1) {
                this.tableData.splice(i, 1);
            } else {
                this.tableData[i].count--;
            }
            this.totalcount--;
            this.totalmoney -= goods.price;
        },
        removetotal: function() {
            this.tableData = [];
            this.totalcount = 0;
            this.totalmoney = 0;
        },
        checkout: function() {
            if (this.totalcount != 0) {
                this.totalcount = 0;
                this.totalmoney = 0;
                this.tableData = [];
                this.$message({
                    message: "结账成功，感谢你又为店里出了一份力！",
                    type: "success"
                });
            } else {
                this.$message.error("不能空结！");
            }
        }
    },
    mounted: function() {
        var orderHeight = document.body.clientHeight;
        document.getElementById("order_list").style.height = orderHeight + "px";
    },
    created: function() {
        axios
            .get("http://jspang.com/DemoApi/oftenGoods.php")
            .then(reponse => {
                this.oftenGoods = reponse.data;
            })
            .catch(error => {
                console.log(error);
                alert("网络错误，不能访问");
            });
        axios
            .get("http://jspang.com/DemoApi/typeGoods.php")
            .then(reponse => {
                this.type0Goods = reponse.data[0];
                this.type1Goods = reponse.data[1];
                this.type2Goods = reponse.data[2];
                this.type3Goods = reponse.data[3];
            })
            .catch(error => {
                console.log(error);
                alert("网络错误，不能访问");
            });
    }
};
</script>

<style scoped>
.pos_order {
    background-color: #f9fafc;
    border-right: 1px solid #c0ccda;
    height: 100%;
}
.order_btn {
    margin-top: 15px;
}
.often_goods > div {
    text-align: left;
    height: 20px;
    background-color: #f9fafc;
    border-bottom: 1px solid #d3dce6;
    padding: 10px;
}
.often_goods ul {
    overflow: hidden;
    padding-left: 10px;
}
.often_goods ul li {
    list-style: none;
    padding: 10px;
    margin: 10px;
    border: 1px solid #e5e9f2;
    background-color: #fff;
    float: left;
    cursor: pointer;
}
.often_goods ul li span:nth-of-type(2) {
    color: #58b7ff;
}
.el-tab-pane {
    margin-left: 10px;
}
.goodclass .list {
    overflow: hidden;
    padding: 18px;
}
.goodclass .list li {
    float: left;
    list-style: none;
    width: 23%;
    background-color: #fff;
    padding: 2px;
    margin: 2px;
    border: 1px solid #e5e9f2;
    text-align: left;
    overflow: hidden;
    cursor: pointer;
}
.goodclass .list li span {
    display: block;
    float: left;
}
.goodclass .list li > span {
    width: 40%;
    margin-right: 10px;
}
.goodclass .list li img {
    width: 100%;
}
.goodclass .list li span:nth-of-type(2) {
    margin: 10px 0 15px 0;
    color: brown;
}
.total {
    padding: 20px;
    border-bottom: 1px solid #d3dce6;
}
.total span {
    margin-right: 20px;
}
</style>
