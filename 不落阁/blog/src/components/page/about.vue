<template>
    <div class="about">
        <div class="con_pre">
            <p>
                <a>网站首页</a>
                <i class="fa fa-lg fa-angle-right"></i>生活点滴
            </p>
        </div>
        <div id="con_head">
            <a @click="author()" class="active">关于作者</a>
            <a @click="net()">关于网站</a>
            <a @click="link()">友情链接</a>
            <a @click="talk()">留言交流</a>
        </div>
        <div id="con_c">
            <el-row id="con_author">
                <p>
                    <span class="c_head">关于作者</span>
                </p>
                <el-col :xs="24" :sm="12" :md="12" class="author_info">
                    <img src="../../../static/img/info.png">
                    <p>YuNing</p>
                    <p>本人是一枚90后程序员，web前端工程师，主攻HTML + CSS + JavaScript + Vue</p>
                    <p class="ab_add">
                        <i class="fa fa-location-arrow"></i> 陕西 - 西安</p>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" class="author_info">
                    <img src="../../../static/img/head.jpg">
                    <p>RenLuXiang</p>
                    <p>本人是一枚90后程序员，web前端工程师，主攻HTML + CSS + JavaScript + Vue</p>
                    <p class="ab_add">
                        <i class="fa fa-location-arrow"></i> 陕西 - 西安</p>
                </el-col>
            </el-row>
            <div id="con_net">
                <p>
                    <span class="c_head">关于网站</span>
                </p>
                <div class="c_img"></div>
                <p>本网站纯手工打造，历时近1个月，主要是自己学习了vue之后的练手项目。</p>
                <p>前端方面用了element-ui框架和boostrap框架来布局，并且实现响应式。js方面用了vue-2.0，用vue-cli作为脚手架，vue-router来配置路由，vuex来管理公用的状态。 后台方面用的是java。
                </p>
            </div>
            <div id="con_friend">
                <p>
                    <span class="c_head">友情链接</span>
                </p>
                <div class="c_img"></div>
                <ul>
                    <li>
                        <p>小李Blog</p>
                        <p>www.jhnsa.cn</p>
                    </li>
                    <li>
                        <p>小李Blog</p>
                        <p>www.jhnsa.cn</p>
                    </li>
                    <li>
                        <p>小李Blog</p>
                        <p>www.jhnsa.cn</p>
                    </li>
                    <li>
                        <p>小李Blog</p>
                        <p>www.jhnsayuning.cn</p>
                    </li>
                    <li>
                        <p>小李Blog</p>
                        <p>www.jhnsa.cn</p>
                    </li>
                    <li>
                        <p>小李Blog</p>
                        <p>www.jhnsayuning.cn</p>
                    </li>
                    <li>
                        <p>小李Blog</p>
                        <p>www.jhnsa.cn</p>
                    </li>
                    <li>
                        <p>小李Blog</p>
                        <p>www.jhnsayuning.cn</p>
                    </li>
                </ul>
            </div>
            <div id="con_talk">
                <p>
                    <span class="c_head">留言交流</span>
                </p>
                <img src="../../../static/img/talk.png">
                <p>可留言、可吐槽、可提问。欢迎灌水，杜绝广告！</p>
                <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="textarea">
                </el-input>
                <el-button type="primary" @click="talk_commit">提交留言</el-button>
                <div id="talk_con">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "about",
    data() {
        return {
            textarea: "",
            talk_name: "YuNing",
            days: 1
        };
    },
    mounted: function() {
        $(".el-menu-item")
            .eq(3)
            .css({
                color: "rgb(255, 208, 75)",
                borderBottomColor: "rgb(255, 208, 75)",
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
                color: "rgb(255, 255, 255)",
                borderBottomColor: "transparent",
                backgroundColor: "rgb(84, 92, 100)"
            });
        $(".el-menu-item")
            .eq(0)
            .css({
                color: "rgb(255, 255, 255)",
                borderBottomColor: "transparent",
                backgroundColor: "rgb(84, 92, 100)"
            });
        global.link1 = $("#con_head a").eq(0);
        global.link2 = $("#con_head a").eq(1);
        global.link3 = $("#con_head a").eq(2);
        global.link4 = $("#con_head a").eq(3);
        global.c_head = $(".c_head");
    },
    created() {},
    methods: {
        talk_commit: function() {
            $("#talk_con").append(
                "<div><img src='../../../static/img/info.png'><p>" +
                    this.textarea +
                    "</p><p>来自" +
                    this.talk_name +
                    " " +
                    this.days +
                    "天前</p></div>"
            );
        },
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
                console.log(top2);
            }, 30);
        },
        author() {
            link1.addClass("active");
            link2.removeClass("active");
            link3.removeClass("active");
            link4.removeClass("active");
            let author_c = c_head[0].offsetTop;
            console.log("author offset: " + author_c);
            this.$options.methods.scroll(author_c);
        },
        net() {
            link2.addClass("active");
            link1.removeClass("active");
            link3.removeClass("active");
            link4.removeClass("active");
            let net_c = c_head[1].offsetTop - 55;
            this.$options.methods.scroll(net_c);
        },
        link() {
            link3.addClass("active");
            link1.removeClass("active");
            link2.removeClass("active");
            link4.removeClass("active");
            let link_c = c_head[2].offsetTop - 55;
            this.$options.methods.scroll(link_c);
        },
        talk() {
            link4.addClass("active");
            link1.removeClass("active");
            link3.removeClass("active");
            link2.removeClass("active");
            let talk_c = c_head[3].offsetTop - 55;
            this.$options.methods.scroll(talk_c);
        }
    }
};
</script>

<style>
p {
    text-align: left;
}
.con_pre {
    border-left: 5px solid transparent;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
    width: 85%;
    margin: 15px auto 10px auto;
}
.con_pre:hover {
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
    background-color: #393d49;
    text-align: center;
    width: 85%;
    margin: 15px auto;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    position: sticky;
    position: -webkit-sticky;
    top: 0px;
    z-index: 1;
}

#con_head a {
    display: inline-block;
    color: white;
    background-color: #393d49;
    margin-bottom: 0;
    padding: 10px 20px;
    font-size: 15px;
}

#con_head .active {
    color: #393d49;
    background-color: white;
}

#con_head a:hover {
    text-decoration: none;
    color: #5fb878;
}
#con_c {
    width: 85%;
    margin: 0 auto 10px auto;
    background-color: white;
    box-sizing: border-box;
    padding: 15px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}
.c_head {
    font-size: 13px;
    color: white;
    background-color: #ff5722;
    padding: 3px 6px;
    border-radius: 2px;
}
.author_info img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
.author_info p:nth-of-type(1) {
    text-align: center;
    font-size: 22px;
    margin: 20px 0;
}
.author_info p:nth-of-type(2) {
    text-indent: 2em;
    line-height: 25px;
    margin: 0 40px;
}
.author_info p:nth-of-type(3) {
    text-align: center;
    margin: 10px 0 40px 0;
}
.c_img {
    height: 300px;
    width: 100%;
    margin: 10px 0;
    background-image: url("../../../static/img/home0.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
#con_net,
#con_friend {
    margin-bottom: 40px;
}
#con_net p:nth-of-type(2),
#con_net p:nth-of-type(3) {
    text-indent: 2em;
    line-height: 22px;
    margin: 10px;
}
#con_friend ul li {
    list-style: none;
    float: left;
    padding: 10px 20px;
    margin: 10px;
    border: 1px solid #eee;
}
#con_friend ul li:hover {
    border: 1px solid #1e9fff;
}
#con_friend ul {
    overflow: hidden;
}
#con_talk {
    overflow: hidden;
}
#con_talk > p:nth-of-type(2) {
    text-align: center;
    margin: 20px 0;
    font-size: 22px;
    font-weight: bold;
}
#con_talk .el-textarea {
    width: 90%;
}
#con_talk button {
    display: block;
    float: right;
    margin: 5px 5% 15px 0;
}
#talk_con div {
    /* clear: both; */
    overflow: hidden;
    margin: 10px auto;
    border: 1px solid #eee;
    padding: 10px;
    width: 90%;
    box-sizing: border-box;
}
#talk_con div img {
    height: 50px;
    width: 50px;
    float: left;
}
#talk_con div p:nth-of-type(1) {
    margin: 5px 0 0 70px;
}
#talk_con div p:nth-of-type(2) {
    text-align: right;
    margin-top: 10px;
}
</style>

