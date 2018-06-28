<template>
    <div class="about">
        about
    </div>
</template>

<script>
export default {
    name: "about",
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
    }
};
</script>

