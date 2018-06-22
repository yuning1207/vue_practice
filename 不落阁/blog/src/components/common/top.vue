<template>
    <div class="top">
        <div id="fix_con">
            <img src="../../../static/img/other.png" @click="fix_con">
        </div>
        <div id="fix_con_all">
            <a><img src="../../../static/img/QQspace.png"></a>
            <a><img src="../../../static/img/sina.png"></a>
            <a><img src="../../../static/img/weixin.png"></a>
            <a><img src="../../../static/img/QQ.png"></a>
        </div>
        <div id="fix_top"><img src="../../../static/img/top.png" @click="fix_top"></div>
    </div>
</template>
<script>
export default {
    name: "top",
    created: function() {
        global.tag = true;
        document.onmousedown = function(ev) {
            console.log("created");
            if (
                ev.target != fix_con &&
                ev.target != fix_con.getElementsByTagName("img")[0]
            ) {
                var oEvent = ev || event; //IE浏览器直接使用event或者window.event得到事件本身。
                if (
                    oEvent.button == 1 ||
                    oEvent.button == 2 ||
                    oEvent.button == 0
                ) {
                    fix_con_all.style.right = "-200px";
                    tag = !tag;
                } // IE下鼠标的 左键是1 ，  右键是2   ff和chrome下 鼠标左键是0  右键是2
            }
        };
        window.onscroll = function() {
            if (
                document.documentElement.scrollTop != 0 ||
                document.body.scrollTop != 0
            ) {
                fix_top.style.display = "block";
                fix_con.style.bottom = "66px";
                fix_con_all.style.bottom = "66px";
            } else {
                fix_top.style.display = "none";
                fix_con.style.bottom = "15px";
                fix_con_all.style.bottom = "15px";
            }
        };
    },
    methods: {
        fix_con: function() {
            console.log("method");
            if (tag) {
                fix_con_all.style.right = "70px";
                tag = !tag;
            } else {
                fix_con_all.style.right = "-200px";
                tag = !tag;
            }
        },
        fix_top: function() {
            var tops, speed;
            var top0;
            var timer;
            timer = setInterval(function() {
                tops =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;
                speed = tops / 4;
                document.documentElement.scrollTop = document.body.scrollTop =
                    tops - speed;
                top0 =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;
                if (top0 == 0) {
                    timer = clearInterval(timer);
                }
            }, 50);
        }
    }
};
</script>

<style>
#fix_con,
#fix_top {
    background-color: #9f9f9f;
    width: 50px;
    height: 50px;
    border-radius: 2px;
    position: fixed;
    right: 15px;
    opacity: 0.85;
    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
}

#fix_con {
    bottom: 15px;
}

#fix_top {
    bottom: 15px;
    display: none;
}
.top img {
    margin: 10px;
}
#fix_con img,
#fix_top img {
    padding: 10px;
    margin: 0;
}
#fix_con:hover,
#fix_top:hover {
    opacity: 0.6;
}

#fix_con_all {
    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    height: 50px;
    width: 200px;
    position: fixed;
    right: -200px;
    bottom: 66px;
    background-color: #444;
    border-radius: 2px;
    box-shadow: 0 2px 10px 0 white;
}

#fix_con_all a {
    width: 30px;
    height: 30px;
    margin: 10px;
    display: block;
    float: left;
}

#fix_con_all a img {
    margin: 0;
}

#fix_con_all a:hover img {
    opacity: 0.8;
}
</style>

