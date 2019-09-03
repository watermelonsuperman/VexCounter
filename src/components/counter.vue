

<template>
<div>
    <button @click="inc(index)">+</button>
    {{get(index)}}
    <button @click="dec(index)">-</button>

</div>
</template>

<script>

export default {
    name:'counter',
    props:{
        index:Number
    },
    methods:{
        get:function(index){
            return this.$store.getters.getCount(index);
        
        },
        inc:function(index){
            this.$store.commit('increment',index);
        },
        dec:function(index){
            this.$store.commit('dec',index);
        }
    }

}
</script>