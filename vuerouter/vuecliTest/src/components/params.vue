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
    },
    beforeRouteEnter:(to,from,next)=>{
        console.log('我准备进入params路由了');
        next();
    },
    beforeRouteLeave:(to,from,next)=>{
        console.log('我准备离开params路由了');
        next();
    }
}
</script>