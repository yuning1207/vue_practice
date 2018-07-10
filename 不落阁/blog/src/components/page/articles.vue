<template>
    <div class="articles_con">
        <el-row id="articles">
            <div class="articles">
                <p class="article_pre">
                    <a>网站首页</a>
                    <i class="fa fa-lg fa-angle-right"></i>
                    <span>文章专栏</span>
                </p>
            </div>
            <el-col :xs="24" :md="17">
                <div id="wait">等待中...</div>
                <el-row class="articles" v-for="item in datalist" :key="item.id">
                    <el-col :span="6" class="img">
                        <img :src="'/api'+item.picture" :alt="item.title">
                    </el-col>
                    <el-col :span="17" class="con">
                        <div class="a_title">
                            <img v-if="item.isTop" src="../../../static/img/is_top.png">
                            <a @click="getwiki(item.id)">{{item.title}}</a>
                        </div>
                        <div class="a_body">
                            {{item.description}}
                        </div>
                    </el-col>
                    <div class="a_foot">
                        <span class="a_data">
                            <i class="el-icon-time"></i>{{item.date}}</span>
                        <span class="a_language">
                            <i class="el-icon-tickets"></i>
                            <a>{{item.mark}}</a>
                        </span>
                        <span class="a_comment">
                            <i class="el-icon-edit"></i>{{item.commentNum}}</span>
                        <span class="a_see">
                            <i class="el-icon-view"></i>{{item.viewNum}}</span>

                    </div>
                </el-row>
                <el-pagination layout="prev, pager, next" :total="pageinfo.totalPage*10" :page-size="10" @current-change="handleCurrentChange">
                </el-pagination>
            </el-col>
            <el-col :xs="24" :md="7" id="articles_right">
                <div id="share_search">
                    <div id="search_input">
                        <input type="text" placeholder="请输入关键词搜索">
                    </div>
                    <div id="search_i">
                        <a>
                            <i class="fa fa-search"></i>
                        </a>
                    </div>
                </div>
                <div id="share_guide">
                    <p>分类导航</p>
                    <hr>
                    <div id="guide_con">
                        <a v-for="item in guide" :key="item.id" @click="getguide(item)">{{item}}</a>
                    </div>
                </div>
                <div class="rows">
                    <div id="auther_tell" class="col-xs-6 col-md-12">
                        <p class="right_head">作者推荐</p>
                        <hr>
                        <p v-for="item in listhot" :key="item.id">
                            <i class="fa fa-hand-o-right"></i>
                            <a @click="getwiki(item.id)">{{item.title}}</a>
                        </p>
                    </div>
                </div>
                <div id="right_guide" @click="right_guide">
                    <i class="fa fa-chevron-left"></i>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import store from "@/vuex/store";
import axios from "axios";
import { mapMutations, mapState } from "vuex";
export default {
    name: "articles",
    data() {
        return {
            guide: []
        };
    },
    store,
    computed: {
        ...mapState(["datalist"]),
        ...mapState(["pageinfo"]),
        ...mapState(["listhot"])
    },
    mounted: function() {
        $(".el-menu-item")
            .eq(1)
            .css({
                color: "rgb(255, 208, 75)",
                borderBottomColor: "rgb(255, 208, 75)",
                backgroundColor: "rgb(84, 92, 100)"
            });
        $(".el-menu-item")
            .eq(0)
            .css({
                color: "rgb(255, 255, 255)",
                borderBottomColor: "transparent",
                backgroundColor: "rgb(84, 92, 100)"
            });
        $(".el-menu-item")
            .eq(2)
            .css({
                color: "rgb(255, 255, 255)",
                borderBottomColor: "transparent",
                backgroundColor: "rgb(84, 92, 100)"
            });
        $(".el-menu-item")
            .eq(3)
            .css({
                color: "rgb(255, 255, 255)",
                borderBottomColor: "transparent",
                backgroundColor: "rgb(84, 92, 100)"
            });
        if (this.pageinfo.currentPage == 1) {
            $("#wait")[0].style.display = "none";
            $(".el-pagination")[0].style.display = "block";
        } else {
            this.$store.dispatch("setMutation");
        }
    },
    created: function() {
        axios
            .get("/api//Blog/wiki/cateGory")
            .then(response => {
                if (response.data.status == 0) {
                    this.guide = response.data.data;
                }
            })
            .catch(err => {
                console.log(err);
                alert("articles 网络错误，无法连接");
            });
    },
    methods: {
        getguide: function(item) {
            this.$store.dispatch("setMutation", [1, item]);
        },
        right_guide: function() {
            let right_guide = $("#right_guide")[0];
            let share_guide = $("#share_guide")[0];
            let arr = $("#share_guide")
                .find("*")
                .splice(0, 10);
            let right = share_guide.style.right;
            share_guide.style.right = "0";
            right_guide.style.display = "none";
            document.onmousedown = function(ev) {
                var oeven = ev || event;
                if (
                    oeven.button == 1 ||
                    oeven.button == 0 ||
                    oeven.button == 2
                ) {
                    if (oeven.target != share_guide) {
                        var ar = Array.from(arr);
                        var i = 0;
                        for (let item of ar) {
                            if (oeven.target != item) {
                                i++;
                            }
                        }
                        if (i != 9) {
                            share_guide.style.right = "" + right;
                            right_guide.style.display = "block";
                        }
                    }
                }
            };
        },
        handleCurrentChange(val) {
            this.$store.dispatch("setMutation", val);
        },
        getwiki(id) {
            console.log("home id: " + id);
            this.$router.push({ name: "wiki", params: { wikid: id } });
        }
    },
    watch: {
        datalist: function() {
            $(".el-pagination")[0].style.display = "block";
            $("#wait")[0].style.display = "none";
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    }
};
</script>

<style>
/* 整体 */
.articles_con {
    /* background-color: #e2e2e2; */
    padding: 20px 0;
}
#articles {
    width: 85%;
    margin: 0 auto;
}
.article_pre {
    margin-left: 15px;
}
.article_pre a {
    color: black;
    font-weight: bold;
}
.article_pre > a:hover {
    color: #01aaed;
    text-decoration: none;
}
/* 左边 */
.articles {
    padding: 10px 0;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
    margin: 20px 0;
    border-left: 5px solid transparent;
    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    margin-right: 36px;
    text-align: left;
}
#articles > .articles {
    margin-right: 0;
}
.articles:hover {
    border-left-color: #009688;
}
.img {
    margin-bottom: 20px;
    margin-top: 20px;
    padding: 0 10px;
}
.img img {
    width: 100%;
}
.a_title {
    margin: 15px 0 10px;
    text-align: left;
}
.a_title img {
    margin-bottom: 4px;
    margin-right: 8px;
}
.a_title a {
    color: black;
    font-size: 18px;
    vertical-align: super;
    font-weight: bold;
}
.a_title a:hover {
    text-decoration: none;
    color: #009688;
}
.a_body {
    text-indent: 2em;
    margin-bottom: 10px;
    text-align: left;
    font-size: 14px;
    line-height: 22px;
}
.a_title,
.a_body {
    word-break: break-all;
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
.el-pagination {
    padding: 15px 0 30px 0;
    display: none;
}
/* 右边 */
#articles_right {
    margin: 20px 0;
}
#share_search {
    margin-bottom: 15px;
    text-align: left;
}

#share_search div {
    background-color: white;
    display: inline-block;
    height: 35px;
}

#search_input {
    width: 80%;
    padding-left: 10px;
}

#search_input input {
    width: 100%;
    height: 100%;
    border: 0;
    outline: 0;
}

#search_i:hover {
    border: 1px solid #ccc;
}
#search_input:hover {
    outline: 1px solid #ccc;
}

#search_i {
    width: 13%;
    float: right;
}
#search_i:hover > a {
    color: #009688;
}
#search_i a {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 8px 32%;
}

#share_guide,
#auther_tell {
    background-color: white;
    margin-bottom: 15px;
    padding: 15px 10px;
}

#share_guide {
    z-index: 1;
}

#share_guide > p {
    text-align: center;
    font-size: 16px;
}

#guide_con {
    text-align: center;
}

#guide_con a {
    display: inline-block;
    margin: 8px 0;
    margin-right: 5px;
    border: 1px solid #ccc;
    color: black;
    width: 40%;
    padding: 8px;
    font-size: 14px;
}

#guide_con a:hover {
    color: #5fb878;
    text-decoration: none;
    border-color: #5fb878;
}
hr {
    border: none;
    height: 1px;
    background-color: #009688;
    margin: 10px 0;
}
#auther_tell {
    text-align: left;
}
#auther_tell i {
    color: #009688;
}
#auther_tell a {
    font-size: 14px;
    line-height: 20px;
}
#right_guide {
    display: none;
}

#fix_con,
#fix_con_all,
#fix_top {
    z-index: 2;
}
@media screen and (max-width: 991px) {
    .articles {
        margin-right: 0;
    }
    #share_search {
        display: none;
    }
    #share_guide {
        display: block;
        position: fixed;
        background-color: #393d49;
        top: 53px;
        height: 92vh;
        width: 28vw;
        right: -31vw;
        color: white;
        transition: all 0.2s ease-in-out;
        -webkit-transition: all 0.2s ease-in-out;
    }
    #share_guide p {
        font-size: 15px;
    }
    #guide_con a {
        background-color: #009688;
        color: white;
        font-size: 13px;
        padding-left: 0;
        padding-right: 0;
        border: 0;
    }
    #guide_con a:hover {
        color: white;
        background-color: #5fb878;
    }
    #right_guide {
        display: block;
        position: fixed;
        right: 0;
        top: 40%;
        width: 15px;
        height: 75px;
        background-color: #009688;
        color: white;
        text-align: center;
    }
    #right_guide i {
        margin-top: 30px;
    }
    #right_guide:hover {
        color: #ddd;
    }
}

@media screen and (max-width: 426px) {
    #guide_con a {
        width: 80%;
    }
    #share_guide {
        right: -33vw;
    }
}
@media screen and (max-width: 376px) {
    #share_guide {
        right: -34vw;
    }
}
</style>


