<template>
    <el-container>
        <el-header>
            <el-row>
                <el-col :span="23">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                             @select="handleSelect">
                        <el-menu-item index="1">
                            <router-link to="/testcase">案例维护</router-link>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <router-link to="/casedate">测试数据维护</router-link>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <router-link to="/testresult">测试结果查看</router-link>
                        </el-menu-item>
                        <el-submenu index="9">
                            <template slot="title">预留</template>
                            <el-menu-item index="9-1">选项1</el-menu-item>
                            <el-menu-item index="9-2">选项2</el-menu-item>
                            <el-menu-item index="9-3">选项3</el-menu-item>
                            <el-submenu index="9-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="9-4-1">选项1</el-menu-item>
                                <el-menu-item index="9-4-2">选项2</el-menu-item>
                                <el-menu-item index="9-4-3">选项3</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                    </el-menu>
                </el-col>
                <el-col :span="1">
                    <el-button icon="el-icon-search" circle></el-button>
                </el-col>
            </el-row>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
<script>

    import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";

    export default {
        components: {ElButton},
        name: "maincontainer",
        data() {
            return {
                activeIndex: '1'
            };
        },
        methods: {

            handleSelect() {

            }
        }

    }
</script>