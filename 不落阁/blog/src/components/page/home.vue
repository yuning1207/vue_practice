<template>
    <div class="home block">
        <el-carousel>
            <el-carousel-item v-for="item in 4" :key="item">
                <h1>Welcome to my Blog</h1>
            </el-carousel-item>
        </el-carousel>
        <el-row id="content">
            <el-col :xs="24" :md="16">
                <el-row class="article">
                    <el-col :span="6" class="img">
                        <img src="../../../static/img/index_a_1.png" alt="[Welcome to .NET Core]ASP.NET Core中间件介绍">
                    </el-col>
                    <el-col :span="17" class="con">
                        <div class="a_title">
                            <img src="../../../static/img/is_top.png">
                            <a>【Welcome to .NET Core】ASP.NET Core中间件介绍</a>
                        </div>
                        <div class="a_body">
                            .NET Core入门系列第二篇。对ASP.NET Core的新模块——中间件做简单的介绍和实践。
                        </div>
                    </el-col>
                    <div class="a_foot">
                        <span class="a_data">
                            <i class="el-icon-time"></i>2017-08-30</span>
                        <span class="a_language">
                            <i class="el-icon-tickets"></i>
                            <a>.NET Core</a>
                        </span>
                        <span class="a_comment">
                            <i class="el-icon-edit"></i>566</span>
                        <span class="a_see">
                            <i class="el-icon-view"></i>11</span>

                    </div>
                </el-row>
                <el-pagination layout="prev, pager, next" :total="10">
                </el-pagination>
            </el-col>
            <el-col :xs="24" :md="7" class="right">
                <div id="index_info">
                    <div class="info_img">
                        <img src="../../../static/img/info.png">
                    </div>
                    <h2>鱼宁</h2>
                    <p>学生党，预备程序员</p>
                    <p class="info_addr">
                        <i class="el-icon-location"></i> 陕西 - 西安
                    </p>
                    <hr>
                    <div class="info_contact">
                        <a>
                            <i class="fa fa-qq fa-2x"></i>
                        </a>
                        <a>
                            <i class="fa fa-envelope fa-2x"></i>
                        </a>
                        <a>
                            <i class="fa fa-commenting fa-2x"></i>
                        </a>
                        <a>
                            <i class="fa fa-git fa-2x"></i>
                        </a>
                    </div>
                </div>
                <div id="hot_text">
                    <p class="right_head">热文排行</p>
                    <hr>
                    <p>
                        <i class="fa fa-hand-o-right"></i>
                        <a>一步步制作时光轴（一）（HTML篇）</a>
                    </p>
                </div>
                <div id="time_go">
                    <p class="right_head">一路走来</p>
                    <hr>
                    <p class="go_date">2017年03月12日</p>
                    <p class="go_con">新增留言回复功能！人人都可参与回复</p>
                </div>
                <div id="index_friend">
                    <p class="right_head">友情链接</p>
                    <hr>
                    <a>西安邮电大学</a>
                    <a>PTA</a>
                    <a>前端网</a>
                    <a>SegmentFault</a>
                    <a>慕课网</a>
                </div>
                <div style="clear:both"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "home",
    // data(){
    //     return {
    //         datalist=[]
    //     }
    // },
    created: function() {
        console.log(1);
        axios.get("/Blog/listAll/1").then(response => {
            console.log(1);
        });
    }
};
</script>

<style>
/* 轮播图 */
.home {
    background-color: #e2e2e2;
}
.el-carousel__item h1 {
    color: #475669;
    opacity: 0.75;
    line-height: 50px;
    margin-top: 12%;
}
.el-carousel,
.el-carousel__container {
    height: 65vh;
}
.el-carousel__item:nth-child(2n) {
    background-image: url("../../../static/img/home0.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}

.el-carousel__item:nth-child(2n + 1) {
    background-image: url("../../../static/img/home1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
/* 整体 */
#content {
    width: 85%;
    margin: 15px auto 0px auto;
}
/* 左边 */
.article {
    padding: 10px 0;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
    margin: 15px 0;
    border-left: 5px solid transparent;
    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    margin-right: 36px;
}

.img {
    margin-bottom: 20px;
    margin-top: 20px;
}
.img img {
    width: 100%;
}
.article:hover {
    border-left-color: #009688;
}
.con {
    padding-left: 30px;
}
.a_title {
    margin: 15px 0;
}
.a_title img {
    margin-bottom: 4px;
    margin-right: 8px;
}
.a_title a {
    color: black;
    font-size: 18px;
    vertical-align: super;
}
.a_title a:hover {
    text-decoration: none;
    color: #009688;
}
.a_body {
    text-indent: 2em;
    margin-bottom: 10px;
    text-align: left;
}
.a_foot .a_data,
.a_foot .a_language {
    float: left;
}

.a_foot span {
    margin: 0 20px;
}

.a_foot .a_comment,
.a_foot .a_see {
    float: right;
}

.a_foot {
    width: 100%;
    color: #a6a6a6;
    font-size: 13px;
    padding-top: 5px;
    overflow: hidden;
}

.a_foot a {
    color: #009688;
}

.a_foot i {
    margin-right: 7px;
}
/* 右边 */
.right {
    margin: 15px 0;
}

#index_info {
    background-color: white;
    padding: 15px;
    margin-bottom: 15px;
}

#index_info .info_img {
    width: 100px;
    height: 100px;
    margin: 0 auto;
}

#index_info h2 {
    margin: 20px auto;
    text-align: center;
    letter-spacing: 1px;
    font-weight: bold;
}

#index_info .info_img img {
    border-radius: 50px;
    width: 100px;
}

#index_info p {
    text-align: center;
    font-size: 18px;
}

#index_info .info_addr {
    color: #a6a6a6;
    font-size: 15px;
    margin: 10px 0 5px 0;
}

#index_info .info_contact {
    width: 100%;
    margin: 20px auto;
    margin-bottom: 5px;
    text-align: center;
}

#index_info .info_contact a {
    color: #333;
    padding: 0 5%;
}

#index_info .info_contact a:hover {
    color: #777;
}
/*热文排行*/

#hot_text,
#share,
#time_go,
#index_friend {
    background-color: white;
    padding: 15px;
    margin-bottom: 15px;
    text-align: left;
}

.right .right_head {
    font-size: 16px;
}

.right hr {
    border: none;
    height: 1px;
    background-color: #009688;
    margin: 10px 0;
}

#hot_text i,
#share i {
    color: #009688;
    margin-right: 5px;
}
#hot_text a,
.go_con,
#index_friend a {
    font-size: 14px;
}
.right p {
    margin-bottom: 5px;
}

.right a {
    color: #333;
    text-decoration: none;
}

.right a:hover {
    color: #009688;
    cursor: pointer;
}
/*一路走来*/

#time_go .go_date {
    color: #01aaed;
}

#time_go .go_con {
    color: #333;
    text-indent: 2em;
}
/*友情链接*/

#index_friend a {
    margin-right: 20px;
}

@media screen and (max-width: 769px) {
    .a_body {
        display: none;
    }
    .a_title a {
        font-size: 14px;
    }
    .a_foot span {
        margin: 0 10px;
    }
    .article {
        margin: 15px 0;
    }
}
@media screen and (max-width: 425px) {
    #cont .article .a_con {
        padding-left: 10px;
    }
}
</style>
