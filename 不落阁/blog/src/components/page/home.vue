<template>
    <div class="home block">
        <el-carousel>
            <el-carousel-item v-for="item in 4" :key="item">
                <h1>Welcome to my Blog</h1>
            </el-carousel-item>
        </el-carousel>
        <el-row>
            <el-col :xs="20" :sm="15" class="article">
                <el-row>
                    <el-col :span="6" class="img">
                        <img src="../../../static/img/index_a_1.png" alt="[Welcome to .NET Core]ASP.NET Core中间件介绍">
                    </el-col>
                    <el-col :span="16" class="con">
                        <div class="a_title">
                            <img src="img/顶.png">
                            <a>【Welcome to .NET Core】ASP.NET Core中间件介绍</a>
                        </div>
                        <div class="a_body">
                            .NET Core入门系列第二篇。对ASP.NET Core的新模块——中间件做简单的介绍和实践。
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :xs="20" :sm="7" class="article">
                2
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "home"
    // data(){
    //     return {
    //         datalist=[]
    //     }
    // },
    // created:function(){

    // }
};
</script>

<style>
.home {
    height: 800px;
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

.el-row {
    width: 85%;
    margin: 15px auto 5px auto;
}
.article {
    padding: 10px 0;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
    margin: 15px 20px;
}
.img {
    margin-bottom: 20px;
    margin-top: 20px;
}
.img img {
    width: 100%;
}
</style>
