<template>
    <div>
        <p>{{msg}}</p>
        <p>{{ $route.params.id}}</p>
        <p>{{ $route.params.title}}</p>
    </div>
</template>
<script>
export default{
    // name:'params',
    data:function(){
        return {
            msg:'i am params'
        }
    }
}
</script>