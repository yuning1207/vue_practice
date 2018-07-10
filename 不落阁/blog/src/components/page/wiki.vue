<template>
    <div class="wiki">
        <div class="title">{{wikidata.title}}</div>
        <hr>
        <div class='body markdown' v-html="compiledMarkdown"></div>
    </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import marked from "marked";
export default {
    name: "wiki",
    data() {
        return {
            wikidata: {
                msg: "",
                title: "等待中..."
            }
        };
    },
    created: function() {
        this.get();
    },
    methods: {
        get() {
            let id = this.$route.params.wikid;
            let url = "/api/Blog/wiki/getWiki/" + id;
            axios
                .get(url)
                .then(res => {
                    if (res.data.status == 0) {
                        this.wikidata.title = res.data.data.title;
                        this.wikidata.msg = res.data.data.content;
                        document.documentElement.scrollTop = document.body.scrollTop = 0;
                    }
                })
                .catch(err => {
                    console.log(err);
                    alert("wiki网络错误，不能访问");
                });
        }
    },
    computed: {
        compiledMarkdown() {
            return marked(this.wikidata.msg, { sanitize: true });
        }
    },
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
    }
};
</script>
<style>
@import "../../../static/css/markdown.css";
.wiki {
    margin: 10%;
    padding: 5%;
    margin-top: 0;
    background-color: white;
}
.wiki .title {
    padding: 20px auto;
    margin: 20px auto;
    font-size: 25px;
    font-weight: bold;
}
.wiki .body {
    text-align: left;
    font-size: 16px;
}
</style>

