<template>
    <el-row>
        <el-button v-for="displayName in displayNames"  type="primary" @click='fff[0]'>{{displayName}}</el-button>
    </el-row>
</template>
<script>
    export default {
        name:"opers",
        props:{"displayNames":Array,"fff":Array},
        methods:{
            create(){
                this.fff();
            }
        }
    }

</script>