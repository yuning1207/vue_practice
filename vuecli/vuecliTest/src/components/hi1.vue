<template>
<div>
    {{msg}}-{{$route.params.username}}-{{$route.params.id}}
</div>
</template>
<script>
    export default{
        name:'hi1',
        data:function(){
            return {
                msg:'i am hi1 page'
            }
        }
    }
</script>