<template>
    <div class="m5">
        <div class="my1">
            <div>
                <span :text-content.prop="name" class="cursive resource-title"></span>
                <span class="monospace resource-id">#<span :text-content.prop="id"></span></span>
            </div>
            <div :text-content.prop="description" class="resource-description"></div>
        </div>
        <div class="flex-container">
            <el-card class="mb1 mr1 mw20">
                <div slot="header">
                    <el-tag type="primary">Metadata</el-tag>
                </div>
                <div>
                    <div class="mb2">
                        <el-button @click="changeID">Remake ID</el-button>
                    </div>
                    <div class="mb2">
                        <div class="mb1">
                            <label class="field-label" for="name">Name:</label>
                        </div>
                        <div>
                            <el-input :value="name" @input="changeName" id="name" placeholder="name"></el-input>
                        </div>
                    </div>
                    <div class="mb2">
                        <div class="mb1">
                            <label class="field-label" for="description">Description:</label>
                        </div>
                        <div>
                            <el-input :value="description" @input="changeDescription" id="description" placeholder="description" type="textarea"></el-input>
                        </div>
                    </div>
                </div>
            </el-card>
            <el-card class="mb1 mr1 mw20" v-for="(field, index) in fields">
                <el-row align="middle" justify="space-between" type="flex" slot="header">
                    <el-col>
                        <el-row align="middle" type="flex">
                            <el-tag class="link-like" @click.native="field.readonly ? null : toggleFieldMetaType(index)" :type="field.metadata.field ? 'success' : 'gray'">Field</el-tag>
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
                    <div class="mb2">
                        <div class="mb1">
                            <label class="field-label">Name:</label>
                        </div>
                        <div>
                            <el-input :disabled="field.readonly" @input="updateFieldName(index, $event)" :value="field.name" placeholder="name"></el-input>
                        </div>
                    </div>
                    <div class="mb2">
                        <div class="mb1">
                            <label class="field-label">Type:</label>
                        </div>
                        <div>
                            <el-select @input="updateFieldType(index, $event)" :disabled="field.readonly" filterable placeholder="type" :value="field.type">
                                <el-option v-for="item in types" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </div>
                    </div>
                </div>
            </el-card>
            <el-card class="mb1 mr1 mw20 centered">
                <el-button @click="addField">
                    <i class="el-icon-plus"></i>
                    <span>&nbsp;Add New Field</span>
                </el-button>
            </el-card>
        </div>
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
        toggleFieldMetaType(index) {
            this.$store.commit(types.TOGGLE_FIELD_META_TYPE, { index })
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