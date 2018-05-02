<template>
    <div>
        {{msg}}
        <router-view></router-view>
    </div>    
</template>
<script>
export default{
    name:'hi',
    data:function(){
        return {
            msg:'i am hi page'
        }
    }
}
</script>