<template>
    <div class="m5">
        <div class="my1">
            <div>
                <span :text-content.prop="name" class="cursive resource-title"></span>
                <span class="monospace resource-id">#<span :text-content.prop="id"></span></span>
            </div>
            <div :text-content.prop="description" class="resource-description"></div>
        </div>
        <el-card class="box-card mb1">
            <div slot="header">
                <el-tag type="primary">Metadata</el-tag>
            </div>
            <div>
                <el-row align="middle" class="mb1" type="flex">
                    <el-col :span="4">
                        <label class="field-label" for="id">ID:</label>
                    </el-col>
                    <el-col :span="16">
                        <span :text-content.prop="id" class="monospace field-span" id="id"></span>
                    </el-col>
                    <el-col :offset="1" :span="2">
                        <el-button @click="changeID">Remake</el-button>
                    </el-col>
                </el-row>
                <el-row align="middle" class="mb1" type="flex">
                    <el-col :span="4">
                        <label class="field-label" for="name">Name:</label>
                    </el-col>
                    <el-col :span="16">
                        <el-input :value="name" @input="changeName" id="name" placeholder="name"></el-input>
                    </el-col>
                </el-row>
                <el-row align="middle" type="flex">
                    <el-col :span="4">
                        <label class="field-label" for="description">Description:</label>
                    </el-col>
                    <el-col :span="16">
                        <el-input :value="description" @input="changeDescription" id="description" placeholder="description" type="textarea"></el-input>
                    </el-col>
                </el-row>
            </div>
        </el-card>
        <el-card class="box-card mb1" v-for="(field, index) in fields">
            <el-row align="middle" justify="space-between" type="flex" slot="header">
                <el-col>
                    <el-row align="middle" type="flex">
                        <el-tag type="success">Field</el-tag>
                        &nbsp;
                        <span :text-content.prop="field.name"></span>
                    </el-row>
                </el-col>
                <el-col>
                    <el-row align="middle" justify="end" type="flex" v-if="!field.readonly">
                        <i class="el-icon-delete link-like" @click="deleteField(index)"></i>
                    </el-row>
                </el-col>
            </el-row>
            <div>
                <el-row align="middle" class="mb1" type="flex">
                    <el-col :span="4">
                        <label class="field-label">Name:</label>
                    </el-col>
                    <el-col :span="16">
                        <el-input :disabled="field.readonly" @input="updateFieldName(index, $event)" :value="field.name" placeholder="name"></el-input>
                    </el-col>
                </el-row>
                <el-row align="middle" class="mb1" type="flex">
                    <el-col :span="4">
                         <label class="field-label">Type:</label>
                    </el-col>
                    <el-col :span="16">
                        <el-select @input="updateFieldType(index, $event)" :disabled="field.readonly" filterable placeholder="type" :value="field.type">
                            <el-option v-for="item in types" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-col>
                </el-row>
            </div>
        </el-card>
        <el-card class="box-card mb1">
            <div>
                <el-row align="middle" justify="center" type="flex">
                    <el-button @click="addField">
                        <i class="el-icon-plus"></i>
                        <span>&nbsp;Add New Field</span>
                    </el-button>
                </el-row>
            </div>
        </el-card>
    </div>
</template>

<script>
    import { mapMutations, mapGetters } from 'vuex'
    import * as types from '../store/mutation-types'
    let mappedMutations = mapMutations({
        addField: types.ADD_FIELD,
        changeID: types.CHANGE_ID
    }) 
    let methods = Object.assign({
        changeDescription(description) {
            this.$store.commit(types.CHANGE_DESCRIPTION, { description })
        },
        changeName(name) {
            this.$store.commit(types.CHANGE_NAME, { name })
        },
        deleteField(index) {
            this.$store.commit(types.DELETE_FIELD, { index })
        },
        updateFieldName(index, name) {
            this.$store.commit(types.UPDATE_FIELD, { index, field: { name } })
        },
        updateFieldType(index, type) {
            console.log(index, type)
            this.$store.commit(types.UPDATE_FIELD, { index, field: { type } })
        }
    }, mappedMutations)
    export default {
        computed: mapGetters(['description', 'fields', 'id', 'name', 'types']),
        methods
    }
</script>