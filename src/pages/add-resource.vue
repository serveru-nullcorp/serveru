<template>
    <div class="m-5">
        <div class="d-flex flex-row align-items-center mb-3">
            <span :text-content.prop="id" class="mr-1 monospace" id="id"></span>
            <button @click="changeID" class="btn btn-info btn-sm" type="button">Remake</button>
        </div>
        <label for="name">Name</label>
        <div class="input-group input-group-sm">
            <input :value="name" @input="changeName" class="form-control" id="name" placeholder="name" type="text" />
        </div>
        <br />
        <label for="description">Description</label>
        <div class="input-group input-group-sm">
            <input :value="description" @input="changeDescription" class="form-control" id="description" placeholder="description" type="text" />
        </div>
        <br />
        <div>
            <label>Fields</label>
            <br />
            <div v-for="(field, index) in fields">
                <label :for="'field' + index + 'name'">Name</label>
                <div class="input-group input-group-sm">
                    <input :disabled="field.readonly" :id="'field' + index + 'name'" :value="field.name" class="form-control" placeholder="name" type="text"></input>
                </div>
                <br />
                <label :for="'field' + index + 'type'">Type</label>
                <div class="input-group input-group-sm">
                    <input :disabled="field.readonly" :id="'field' + index + 'type'" :value="field.type" class="form-control" placeholder="type" type="text"></input>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations, mapGetters } from 'vuex'
    import * as types from '../store/mutation-types'
    let mappedMutations = mapMutations({
        changeID: types.CHANGE_ID
    }) 
    let methods = Object.assign({
        changeDescription(e) {
            this.$store.commit(types.CHANGE_DESCRIPTION, { name: e.target.value })
        },
        changeName(e) {
            this.$store.commit(types.CHANGE_NAME, { name: e.target.value })
        }
    }, mappedMutations)
    export default {
        computed: mapGetters(['description', 'fields', 'id', 'name']),
        methods
    }
</script>

<style>
.monospace {
    font-family: Courier New, Courier, monospace;
}
</style>