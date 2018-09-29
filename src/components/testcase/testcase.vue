<template>
    <div>
        <el-row>
            <el-col :span="1">
                <el-button :span="1" type="primary" @click="showCreateCase" icon="el-icon-plus" round>新增案例</el-button>
            </el-col>
        </el-row>
        <el-table :data="tableData" style="width: 100%" align="right">
            <el-table-column prop="caseNo" label="案例编号" width="280">
            </el-table-column>
            <el-table-column prop="caseBrief" label="案例简述" width="180">
            </el-table-column>
            <el-table-column prop="caseCreator" label="创建者" width="180">
            </el-table-column>
            <el-table-column prop="caseGroup" label="创建小组" width="180">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button circle @click="handleDetail(scope.row)" type="primary" icon="el-icon-edit"></el-button>
                    <el-button circle @click="handleDelete(scope.$index)" type="danger"
                               icon="el-icon-delete"></el-button>
                </template>
            </el-table-column>
            <el-table-column label="标签">
                <template slot-scope="scope">
                    <el-tag
                            :key="tag"
                            v-for="tag in scope.row.tags"
                            closable
                            :disable-transitions="false"
                            @close="handleTagDelete(tag,scope.row)">
                        {{tag}}
                    </el-tag>
                </template>

            </el-table-column>
        </el-table>
        <el-dialog title="案例信息" :visible.sync="dialogFormVisible">
            <el-form :model="currentCase">
                <el-form-item label="案例编号" label-width="120px">
                    <el-input v-model="currentCase.caseNo" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="案例简述" label-width="120px">
                    <el-input v-model="currentCase.caseBrief" autoComplete="off" placeholder="简单点，说话的方式简单点"
                    ></el-input>
                </el-form-item>
                <el-form-item label="案例描述" label-width="120px">
                    <el-input v-model="currentCase.caseDes" autoComplete="off" about="简单点，说话的方式简单点"
                              type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="创建者" label-width="120px">
                    <el-input v-model="currentCase.caseCreator"></el-input>
                </el-form-item>
                <el-form-item label="创建小组" label-width="120px">
                    <el-input v-model="currentCase.caseGroup" autoComplete="off" about=""></el-input>
                </el-form-item>
                <el-form-item label="标签" label-width="120px">
                    <el-tag
                            :key="tag"
                            v-for="tag in currentCase.tags"
                            closable
                            :disable-transitions="false"
                            @close="handleTagDelete(tag,currentCase)">
                        {{tag}}
                    </el-tag>
                    <el-input
                            class="input-new-tag"
                            v-if="inputTagVisible"
                            v-model="tagString"
                            ref="saveTagInput"
                            size="small"
                            @keyup.enter.native="handleTagConfirm"
                            @blur="handleTagConfirm"
                    >
                    </el-input>
                    <el-button v-else class="button-new-tag" size="small" @click="showTagInput">+ New Tag</el-button>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="createCase()">确 定</el-button>
                <el-button @click="dialogFormVisible = false">取 消</el-button>
            </div>
        </el-dialog>
    </div>

</template>

<script>
    import oper from "./oper.vue";
    import ElInput from "../../../node_modules/element-ui/packages/input/src/input.vue";


    export default {
        data() {
            return {
                tagString:"",
                inputTagVisible:false,
                currentCase: {},
                tableData: [{
                    caseNo: 'CG00000000001',
                    caseDes: '简单测试',
                    caseCreator: '移动组',
                    tags: ["tag1", "tag2", "tag3"]
                },
                    {
                        caseNo: 'CG00000000002',
                        caseDes: '简单测试',
                        caseCreator: '移动组',
                        tags:[]
                    },
                    {
                        caseNo: 'CG00000000003',
                        caseDes: '简单测试',
                        caseCreator: '移动组',
                        tags:[]
                    },
                    {
                        caseNo: 'CG00000000004',
                        caseDes: '简单测试',
                        caseCreator: '移动组',
                        tags:[]
                    }],
                dialogFormVisible: false
            }
        },
        methods: {
            showCreateCase: function () {
                this.currentCase = {_new: true,tags:[]}
                this.dialogFormVisible = true;
            },
            handleDetail: function (row) {
                debugger
                this.dialogFormVisible = true;
                this.currentCase = row;
            },
            handleDelete: function (id) {
                this.tableData.splice(id, 1);
            },
            createCase: function () {
                let tmpCase= this.currentCase;
                if (tmpCase._new){
                    delete tmpCase._new;
                    this.tableData.push(tmpCase);
                }



                this.dialogFormVisible = false;
            },
            handleTagDelete: function (tag, row) {
                row.tags.splice(row.tags.indexOf(tag), 1);
            },
            showTagInput() {
                this.inputTagVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },

            handleTagConfirm() {
                console.log(this.currentCase.caseNo);
                if (this.tagString) {
                    if(this.currentCase.tags==undefined)
                        this.currentCase.tags=[];
                    this.currentCase.tags.push(this.tagString);
                }
                this.inputTagVisible = false;
                this.tagString = '';
            }

        },
        components: {
            ElInput,
            oper
        }
    }
</script>

<style>
    .el-tag + .el-tag {
        margin-left: 10px;
    }
    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }
</style>