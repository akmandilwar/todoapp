<template>
    <div>
       <h1 class="homestyle">Class and Style Bindings</h1>
       <h1 v-bind:style="{color:'blue'}">Style Bindings</h1>
       <h1 v-bind:class="{display:show,displayColor:show}">class Binding with object</h1>
       <h1 v-bind:class="[show ? 'yesSHow' : 'noShow']">class Binding with object</h1>
    </div>
</template>
<script>

export default {
    name:'Home',
    data(){
        return{
                 show:true,
                 arrayClass:true

        }
    },
}
</script>
<style scoped>
.homestyle{
    color:orange;
}
.display{
    background-color: brown;
}
.arrayClass{
background-color:cyan;
}
</style>