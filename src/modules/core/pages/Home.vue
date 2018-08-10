<template>
    <v-container fluid>
        <div></div>
        <div style="height:500px;background-color:#F0A393"></div>
        <div style="height:500px;background-color:#93AFF0"></div>
        <div style="height:500px;background-color:#F093C9"></div>
    </v-container>
</template>

<script>
    export default {
        name: "Home",
        mounted : function (){
            console.log(this.$bus.$emit("test"));
        }
    }
</script>

<style scoped>
</style>