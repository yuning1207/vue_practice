<template>
    <div class="articles_con">
        <el-row id="articles">
            <div class="articles">
                <p class="con_pre">
                    <a>网站首页</a>
                    <i class="fa fa-lg fa-angle-right"></i>
                    <span>文章专栏</span>
                </p>
            </div>
            <el-col :xs="24" :md="17">
                <el-row class="articles">
                    <el-col :span="6" class="img">
                        <img src="../../../static/img/index_a_1.png" alt="[Welcome to .NET Core]ASP.NET Core中间件介绍">
                    </el-col>
                    <el-col :span="17" class="con">
                        <div class="a_title">
                            <img src="../../../static/img/is_top.png">
                            <a>[Welcome to .NET Core]ASP.NET Core中间件介绍</a>
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
                            <a>.js</a>
                        </span>
                        <span class="a_comment">
                            <i class="el-icon-edit"></i>566</span>
                        <span class="a_see">
                            <i class="el-icon-view"></i>11</span>

                    </div>
                </el-row>
                <el-pagination layout="prev, pager, next" :page-size="10">
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
                        <a>ASP.NET MVC</a>
                        <a>SQL Server</a>
                        <a>Entity Framework</a>
                        <a>Web前端</a>
                        <a>C#基础</a>
                        <a>杂文随笔</a>
                        <a>.NET Core</a>
                    </div>
                </div>
                <div class="rows">
                    <div id="auther_tell" class="col-xs-6 col-md-12">
                        <p class="right_head">作者推荐</p>
                        <hr>
                        <p>
                            <i class="fa fa-hand-o-right"></i>
                            <a>【Welcome to .NET Core】ASP.NET Core中间件介绍</a>
                        </p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "articles"
};
</script>

<style>
/* 整体 */
.articles_con {
    background-color: #e2e2e2;
    padding: 20px 0;
}
#articles {
    width: 85%;
    margin: 0 auto;
}
.con_pre {
    margin-left: 15px;
}
.con_pre a {
    color: black;
    font-weight: bold;
}
.con_pre > a:hover {
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
}
/* 右边 */
#articles_right {
    margin: 20px 0;
}
#share_search {
    margin-bottom: 15px;
}

#share_search div {
    background-color: white;
    display: inline-block;
    height: 35px;
}

#search_input {
    width: 85%;
}

#search_input input {
    width: 100%;
    height: 100%;
    padding-left: 10px;
    border: 0;
    outline: 0;
}

#search_i:hover,
#search_input:hover {
    border: 1px solid #ccc;
}

#search_i {
    width: 13%;
    float: right;
}

#search_i a {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 8px 30%;
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
    width: 47%;
    padding: 8px;
}

#guide_con a:hover {
    color: #5fb878;
    text-decoration: none;
    border-color: #5fb878;
}

#auther_tell i {
    margin-right: 8px;
    color: #009688;
}

#right_guide {
    display: none;
}

#fix_con,
#fix_con_all,
#fix_top {
    z-index: 2;
}
</style>


