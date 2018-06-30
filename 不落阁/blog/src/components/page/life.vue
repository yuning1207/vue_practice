<template>
    <div class="life" id="index_main">
        <div class="con_pre">
            <p>
                <a>网站首页</a>
                <i class="fa fa-lg fa-angle-right"></i>生活点滴
            </p>
        </div>
        <div id="con_head">
            <span>
                <a>时光轴</a>
            </span>
        </div>
        <el-row id="life_con">
            <el-col :span="2" id="life_guide">
                <a @click="year1">2017</a>
                <a @click="year2">2016</a>
                <a @click="year3">2015</a>
                <a @click="year4">2014</a>
            </el-col>
            <el-col :span="20" id="life_c">
                <div id="_2017_c">
                    <p class="life_year">2017</p>
                    <el-row class="c_row">
                        <el-col class="row_left" :xs="24" :sm="4" :md="4">
                            <span>10月26日 22:05</span>
                        </el-col>
                        <div class="row_mid">
                            <i class="fa fa-dot-circle-o"></i>
                        </div>
                        <el-col class="row_right" :xs="24" :sm="18" :md="18">
                            <p>
                                扩展了一下laypage，增加了一个设置页容量的功能！演示地址在我的后台管理系统用到分页的地方，感觉js这门语言用起来很爽啊，可惜我不是搞前端的！</p>
                        </el-col>
                    </el-row>
                    <el-row class="c_row">
                        <el-col class="row_left" :xs="24" :sm="4" :md="4">
                            <span>10月26日 22:05</span>
                        </el-col>
                        <div class="row_mid">
                            <i class="fa fa-dot-circle-o"></i>
                        </div>
                        <el-col class="row_right" :xs="24" :sm="18" :md="18">
                            <p>
                                扩展了一下laypage，增加了一个设置页容量的功能！演示地址在我的后台管理系统用到分页的地方，感觉js这门语言用起来很爽啊，可惜我不是搞前端的！</p>
                        </el-col>
                    </el-row>
                </div>
                <div id="_2016_c">
                    <p class="life_year">2016</p>
                    <el-row class="c_row">
                        <el-col class="row_left" :xs="24" :sm="4" :md="4">
                            <span>10月26日 22:05</span>
                        </el-col>
                        <div class="row_mid">
                            <i class="fa fa-dot-circle-o"></i>
                        </div>
                        <el-col class="row_right" :xs="24" :sm="18" :md="18">
                            <p>
                                扩展了一下laypage，增加了一个设置页容量的功能！演示地址在我的后台管理系统用到分页的地方，感觉js这门语言用起来很爽啊，可惜我不是搞前端的！</p>
                        </el-col>
                    </el-row>
                    <el-row class="c_row">
                        <el-col class="row_left" :xs="24" :sm="4" :md="4">
                            <span>10月26日 22:05</span>
                        </el-col>
                        <div class="row_mid">
                            <i class="fa fa-dot-circle-o"></i>
                        </div>
                        <el-col class="row_right" :xs="24" :sm="18" :md="18">
                            <p>
                                扩展了一下laypage，增加了一个设置页容量的功能！演示地址在我的后台管理系统用到分页的地方，感觉js这门语言用起来很爽啊，可惜我不是搞前端的！</p>
                        </el-col>
                    </el-row>
                </div>
                <div id="_2015_c">
                    <p class="life_year">2015</p>
                    <el-row class="c_row">
                        <el-col class="row_left" :xs="24" :sm="4" :md="4">
                            <span>10月26日 22:05</span>
                        </el-col>
                        <div class="row_mid">
                            <i class="fa fa-dot-circle-o"></i>
                        </div>
                        <el-col class="row_right" :xs="24" :sm="18" :md="18">
                            <p>
                                扩展了一下laypage，增加了一个设置页容量的功能！演示地址在我的后台管理系统用到分页的地方，感觉js这门语言用起来很爽啊，可惜我不是搞前端的！</p>
                        </el-col>
                    </el-row>
                    <el-row class="c_row">
                        <el-col class="row_left" :xs="24" :sm="4" :md="4">
                            <span>10月26日 22:05</span>
                        </el-col>
                        <div class="row_mid">
                            <i class="fa fa-dot-circle-o"></i>
                        </div>
                        <el-col class="row_right" :xs="24" :sm="18" :md="18">
                            <p>
                                最近在学.net core 2.0，就是没时间写博客，不然能一下写十几篇。</p>
                        </el-col>
                    </el-row>
                </div>
                <div id="_2014_c">
                    <p class="life_year">2014</p>
                    <el-row class="c_row">
                        <el-col class="row_left" :xs="24" :sm="4" :md="4">
                            <span>10月26日 22:05</span>
                        </el-col>
                        <div class="row_mid">
                            <i class="fa fa-dot-circle-o"></i>
                        </div>
                        <el-col class="row_right" :xs="24" :sm="18" :md="18">
                            <p>
                                扩展了一下laypage，增加了一个设置页容量的功能！演示地址在我的后台管理系统用到分页的地方，感觉js这门语言用起来很爽啊，可惜我不是搞前端的！</p>
                        </el-col>
                    </el-row>
                    <el-row class="c_row">
                        <el-col class="row_left" :xs="24" :sm="4" :md="4">
                            <span>10月26日 22:05</span>
                        </el-col>
                        <div class="row_mid">
                            <i class="fa fa-dot-circle-o"></i>
                        </div>
                        <el-col class="row_right" :xs="24" :sm="18" :md="18">
                            <p>
                                扩展了一下laypage，增加了一个设置页容量的功能！演示地址在我的后台管理系统用到分页的地方，感觉js这门语言用起来很爽啊，可惜我不是搞前端的！</p>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "life",
    created: function() {},
    mounted: function() {
        $(".el-menu-item")
            .eq(0)
            .css({
                color: "rgb(255, 255, 255)",
                borderBottomColor: "transparent",
                backgroundColor: "rgb(84, 92, 100)"
            });
        $(".el-menu-item")
            .eq(1)
            .css({
                color: "rgb(255, 255, 255)",
                borderBottomColor: "transparent",
                backgroundColor: "rgb(84, 92, 100)"
            });
        $(".el-menu-item")
            .eq(2)
            .css({
                color: "rgb(255, 208, 75)",
                borderBottomColor: "rgb(255, 208, 75)",
                backgroundColor: "rgb(84, 92, 100)"
            });
        $(".el-menu-item")
            .eq(3)
            .css({
                color: "rgb(255, 255, 255)",
                borderBottomColor: "transparent",
                backgroundColor: "rgb(84, 92, 100)"
            });
    },
    methods: {
        scroll: function(year) {
            let speed;
            let top0, top1, top2;
            let timer;
            timer = setInterval(function() {
                top0 =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;
                top1 = year - top0;
                speed = top1 / 3;
                document.documentElement.scrollTop = document.body.scrollTop =
                    top0 + speed;
                top2 =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;
                if (top2 >= year - 10 && top2 <= year + 10) {
                    timer = clearInterval(timer);
                } else if (
                    document.documentElement.scrollHeight - 10 <=
                    document.documentElement.clientHeight + top2
                ) {
                    timer = clearInterval(timer);
                }
            }, 30);
        },
        year1: function() {
            let year1_c = $("#_2017_c")[0].offsetTop + 74;
            this.$options.methods.scroll(year1_c);
        },
        year2: function() {
            let year2_c = $("#_2016_c")[0].offsetTop + 74;
            this.$options.methods.scroll(year2_c);
        },
        year3: function() {
            let year3_c = $("#_2015_c")[0].offsetTop + 74;
            this.$options.methods.scroll(year3_c);
        },
        year4: function() {
            let year4_c = $("#_2014_c")[0].offsetTop + 74;
            this.$options.methods.scroll(year4_c);
        }
    }
};
</script>

<style>
p {
    text-align: left;
}
#index_main {
    width: 100%;
    height: auto;
}

#index_main .con_pre {
    border-left: 5px solid transparent;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
    width: 85%;
    margin: 15px auto 10px auto;
}

#index_main .con_pre:hover,
#con_head:hover {
    border-left-color: #009688;
}

.con_pre p {
    padding: 8px 15px;
    color: #666;
    margin: 0;
    font-size: 16px;
}

.con_pre p a {
    color: black;
    font-weight: bold;
}

.con_pre p a:hover {
    text-decoration: none;
    color: #01aaed;
}

.con_pre p i {
    margin: 0 8px;
    color: black;
}

#con_head {
    background-color: white;
    width: 85%;
    height: auto;
    text-align: center;
    margin: 15px auto;
    line-height: 39px;
    border-left: 5px solid transparent;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #5fb878;
}

#con_head span a {
    padding: 10px 20px;
    color: white;
    background-color: #5fb878;
    font-size: 16px;
}

#con_head span a:hover {
    text-decoration: none;
}

#life_con {
    width: 85%;
    background-color: white;
    margin: 10px auto 20px auto;
    padding: 0;
    padding-bottom: 40px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}

#life_guide {
    padding: 0;
    background-color: #5fb878;
    margin: 0 auto;
    text-align: center;
    position: fixed;
    top: 200px;
}

#life_guide a {
    color: white;
    display: block;
    padding: 8px 0;
    font-size: 18px;
    /* background-color: #5FB878; */
}

#life_guide a:visited {
    background-color: #5fb878;
}

#life_guide a:hover {
    text-decoration: none;
    background-color: #009688;
}

#life_c {
    margin-left: 20px;
    float: right;
}

#life_c::before {
    content: "";
    width: 2px;
    height: 100%;
    background-color: #009688;
    position: absolute;
    left: 31.1%;
}

.row_left {
    color: #009688;
    display: inline-block;
    text-align: left;
}

.row_right {
    text-align: left;
    display: inline-block;
    color: white;
}

.row_right p {
    text-align: left;
    margin: 0;
    padding: 10px;
    text-indent: 2em;
    display: inline-block;
    background-color: #009688;
}

.c_row {
    margin-bottom: 20px;
}

.row_mid {
    float: left;
    display: inline-block;
    position: relative;
    left: -10px;
}

.c_row i {
    margin: auto 10px;
    z-index: 99;
}

.life_year {
    margin: 10px;
    font-size: 22px;
    font-weight: bold;
}
@media screen and (max-width: 879px) {
    .c_row i {
        position: absolute;
        z-index: -1;
    }
    #life_c::before {
        width: 0px;
    }
    #life_c {
        margin-left: 0;
    }
}
@media screen and (max-width: 426px) {
    #life_guide a {
        font-size: 12px;
    }
    .row_right p,
    .row_left {
        font-size: 12px;
    }
    .life_year {
        font-size: 16px;
    }
}
@media screen and (max-width: 769px) {
    .row_mid {
        display: none;
    }
}
</style>


