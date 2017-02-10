<template>
    <div class="m5">
        <div class="my1">
            <div>
                <span :text-content.prop="name" class="cursive resource-title"></span>
                <span class="monospace resource-id">#<span :text-content.prop="id"></span></span>
            </div>
            <div :text-content.prop="description" class="resource-description"></div>
        </div>
        <div class="add-resource-container">
            <div class="metadata-pane">
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
            <div class="striped-table">
                <div class="row pl1">
                    <el-tag type="primary">Metadata</el-tag>
                </div>
                <div @click="selectField(index)" v-for="(field, index) in fields" class="row pl1">
                    <span v-text="field.name"></span>
                </div>
            </div>
            <div class="edit-pane">
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
        updateFieldName(index, name) {
            this.$store.commit(types.UPDATE_FIELD, { index, field: { name } })
        },
        updateFieldType(index, type) {
            this.$store.commit(types.UPDATE_FIELD, { index, field: { type } })
        }
    }, mappedMutations)
    export default {
        computed: mapGetters(['description', 'fields', 'id', 'name', 'types']),
        methods
    }
</script>