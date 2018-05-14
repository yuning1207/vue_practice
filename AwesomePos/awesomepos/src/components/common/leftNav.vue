<template>
    <div class="leftnav">
        <ul>
            <li>
                <i class="icon iconfont icon-goumai"></i>
                <div>收银</div>
            </li>
            <li>
                <i class="icon iconfont icon-dianpu"></i>
                <div>店铺</div>
            </li>
            <li>
                <i class="icon iconfont icon-hanbao"></i>
                <div>商品</div>
            </li>
            <li>
                <i class="icon iconfont icon-31huiyuanqia"></i>
                <div>会员</div>
            </li>
            <li>
                <i class="icon iconfont icon-report"></i>
                <div>统计</div>
            </li>
            <li>
                <i class="icon iconfont icon-gongnengjianyi"></i>
                <div>设置</div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name:'leftnav'
    }
</script>
<style>
*{
    padding: 0;
    margin: 0;
}
.leftnav{
    width: 5%;
    height: 100%;
    background-color: #1D8ce0;
    color: #fff;   
    float: left;        
    font-size: 10px;   
    overflow: hidden;
}
li{
    border-bottom: 1px solid #20a0ff;
    text-align: center;
    padding: 10px;
    list-style: none;
}
.iconfont{
    font-size: 24px;   
}
</style>