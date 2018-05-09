<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{count}}</h3>
        <button @click="$store.commit('add',10)">+</button> 
        <button @click="reduce">-</button>
        <br>
        <button @click="addActions">+</button> 
        <button @click="reduceActions">-</button>
    </div>
</template>
<script>
    import store from '@/vuex/store';
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    export default{
        data(){
            return{
                msg:'Hello Vuex'
            }
        },
        store,
        // computed:{
        //     count(){
        //         return this.$store.state.count;
        //     }
        // }
        computed:
            // mapState({
            //     count:state=>state.count
            // })
            // mapState(['count']),
            {
                // ...mapState(['count']),
                // count:function(){
                //     return this.$store.getters.count;
                // }
                
                count(){
                    return this.$store.state.a.count;
                },
                ...mapGetters(['count'])
            },

        methods:{
            ...mapMutations(['add','reduce']),
            ...mapActions(['addActions','reduceActions'])
        }
    }
</script>